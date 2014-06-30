#include <nan.h>
#include "v8.h"

#include "atomicops.h"
#include "flags.h"
#include <node.h>

namespace i = v8::internal;

void ensureBoolean(v8::Local<v8::Value> arg, const char* error) {
  if (arg->IsBoolean()) return;
  NanThrowError(error, -1);
  /*NanThrowError("Need to supply argument of type "
       " when setting '"  "' flag!", -1);*/
}

void ensureInt32(v8::Local<v8::Value> arg, const char* error) {
  if (arg->IsInt32()) return;
  NanThrowError(error, -1);
}

void ensureNumber(v8::Local<v8::Value> arg, const char* error) {
  if (arg->IsNumber()) return;
  NanThrowError(error, -1);
}

void ensureString(v8::Local<v8::Value> arg, const char* error) {
  if (arg->IsString()) return;
  NanThrowError(error, -1);
}

bool convert(v8::Handle<v8::Boolean> arg) {
  return arg->BooleanValue();
}

int32_t convert(v8::Handle<v8::Integer> arg) {
  return arg->Int32Value();
}

double convert(v8::Handle<v8::Number> arg) {
  return arg->NumberValue();
}

char* convert(v8::Handle<v8::String> arg) {
  size_t len;
  return NanCString(arg, &len);
}

// The below are just to avoid warning when checking for null for primitive types
// via the Get_##nam macros. Overloaded functions are a quick and dirty way to run differnent code per type.
bool is_null(bool val) {
  return false;
}

bool is_null(int val) {
  return false;
}

bool is_null(float val) {
  return false;
}

bool is_null(const char* val) {
  return val == NULL;
}

/* v8 flag-definitions.h not properly cleaning this one up */
#undef DEFINE_float
#undef DEFINE_args
#undef FLAG

#define S(x) #x
#define DEFINE_bool(nam, def, cmt)   FLAG(Boolean, nam, Boolean)
#define DEFINE_int(nam, def, cmt)    FLAG(Integer, nam, Int32)
#define DEFINE_float(nam, def, cmt)  FLAG(Number, nam, Number)
#define DEFINE_string(nam, def, cmt) FLAG(String, nam, String)
#define DEFINE_implication(x, y)
#define DEFINE_neg_implication(x, y)
#define DEFINE_maybe_bool(name, def)

#define FLAG_FULL(type, nam, istype)                     \
  NAN_METHOD(Access_##nam) {                             \
    NanScope();                                          \
    if (args.Length()) {                                 \
      ensure##istype(args[0],                            \
         "Need to supply argument of type " S(type)      \
        " when setting '" S(nam) "' flag!");             \
                                                         \
      v8::Handle<v8::type> flag =  args[0]->To##type();  \
      i::FLAG_##nam = convert(flag);                     \
      NanReturnUndefined();                              \
    } else {                                             \
     if (is_null(i::FLAG_##nam)) {                       \
        NanReturnUndefined();                            \
      } else {                                           \
        NanReturnValue(NanNew<v8::type>(i::FLAG_##nam)); \
      }                                                  \
    }                                                    \
  }

#define FLAG_READONLY(type, nam, istype)                       \
  NAN_METHOD(Access_##nam) {                           \
    NanScope();                                        \
    if (is_null(i::FLAG_##nam)) {                      \
      NanReturnUndefined();                            \
    } else {                                           \
      NanReturnValue(NanNew<v8::type>(i::FLAG_##nam)); \
    }                                                  \
  }

#include "v8_flag_definitions.h"

#undef FLAG_FULL
#undef FLAG_READONLY
#undef FLAG

#define FLAG_FULL(type, nam, istype) \
  exports->Set(NanNew<v8::String>(S(nam)), NanNew<v8::FunctionTemplate>(Access_##nam)->GetFunction());

#define FLAG_READONLY(type, nam, istype) FLAG_FULL(type, nam, istype)

void init(v8::Handle<v8::Object> exports) {
  #include "v8_flag_definitions.h"
}

#undef DEFINE_bool
#undef DEFINE_int
#undef DEFINE_float
#undef DEFINE_string
#undef FLAG_FULL
#undef FLAG_READONLY
#undef S
#undef DEFINE_implication
#undef DEFINE_neg_implication
#undef DEFINE_maybe_bool

NODE_MODULE(v8_flags, init)
