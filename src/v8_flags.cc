#include <nan.h>
#include "v8.h"

#include "atomicops.h"
#include "flags.h"
#include <node.h>

namespace i = v8::internal;

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

#define DEFINE_bool(nam, def, cmt)   FLAG(Boolean, nam)
#define DEFINE_int(nam, def, cmt)    FLAG(Integer, nam)
#define DEFINE_float(nam, def, cmt)  FLAG(Number, nam)
#define DEFINE_string(nam, def, cmt) FLAG(String, nam)
#define DEFINE_implication(x, y)
#define DEFINE_neg_implication(x, y)
#define DEFINE_maybe_bool(name, def)

#define FLAG_FULL(type, nam)                                \
  NAN_METHOD(Get_##nam) {                                   \
    NanScope();                                             \
    if (is_null(i::FLAG_##nam)) {                           \
      NanReturnUndefined();                                 \
    } else {                                                \
      NanReturnValue(NanNew<v8::type>(i::FLAG_##nam));      \
    }                                                       \
  }                                                         \
                                                            \
  NAN_METHOD(Set_##nam) {                                   \
    NanScope();                                             \
    v8::Handle<v8::type> flag =  args[0]->To##type();       \
    i::FLAG_##nam = convert(flag);                          \
    NanReturnUndefined();                                   \
  }

#define FLAG_READONLY(type, nam)                       \
  NAN_METHOD(Get_##nam) {                              \
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
#define S(x) #x

#define FLAG_FULL(type, nam)                                                                        \
  exports->Set(NanNew<v8::String>(S(nam)), NanNew<v8::FunctionTemplate>(Get_##nam)->GetFunction()); \
  exports->Set(NanNew<v8::String>("set_" S(nam)), NanNew<v8::FunctionTemplate>(Set_##nam)->GetFunction());

#define FLAG_READONLY(type, nam) \
  exports->Set(NanNew<v8::String>(S(nam)), NanNew<v8::FunctionTemplate>(Get_##nam)->GetFunction());

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
