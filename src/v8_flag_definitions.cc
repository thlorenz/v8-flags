//#include <nan.h>
#include "../node_modules/nan/nan.h"
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

/* v8 flag-definitions.h not properly cleaning this one up */
#undef DEFINE_float
#undef DEFINE_args
#undef FLAG
#define DEFINE_bool(nam, def, cmt)   FLAG(Boolean, nam)
#define DEFINE_int(nam, def, cmt)    FLAG(Integer, nam)
#define DEFINE_float(nam, def, cmt)  FLAG(Number, nam)
#define DEFINE_string(nam, def, cmt) FLAG(String, nam)
#define DEFINE_implication(x, y)
#define DEFINE_args(nam, def, cmt)

#define FLAG_FULL(type, nam)                           \
  NAN_METHOD(Get_##nam) {                              \
    NanScope();                                        \
    NanReturnValue(NanNew<v8::type>(i::FLAG_##nam));   \
  }                                                    \
                                                       \
  NAN_METHOD(Set_##nam) {                              \
    NanScope();                                        \
    v8::Handle<v8::type> flag =  args[0]->To##type();  \
    i::FLAG_##nam = convert(flag);                     \
    NanReturnUndefined();                              \
  }

#define FLAG_READONLY(type, nam)                       \
  NAN_METHOD(Get_##nam) {                              \
    NanScope();                                        \
    NanReturnValue(NanNew<v8::type>(i::FLAG_##nam));   \
  }

#if (NODE_VERSION_AT_LEAST(0, 10, 28))
  #include "v8_flag_definitions_0.10.h"
#elif (NODE_VERSION_AT_LEAST(0, 8, 26))
  #include "v8_flag_definitions_0.8.h"
#endif


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
#if (NODE_VERSION_AT_LEAST(0, 10, 28))
  #include "v8_flag_definitions_0.10.h"
#elif (NODE_VERSION_AT_LEAST(0, 8, 26))
  #include "v8_flag_definitions_0.8.h"
#endif
}

NODE_MODULE(v8_flag_definitions, init)

#undef DEFINE_bool
#undef DEFINE_int
#undef DEFINE_float
#undef DEFINE_string
#undef FLAG_FULL
#undef FLAG_READONLY
#undef S
#undef DEFINE_implication
