//#include <nan.h>
#include "../node_modules/nan/nan.h"
#include "v8.h"

#include "atomicops.h"
#include "flags.h"
#include <node.h>

namespace i = v8::internal;

/* v8 flag-definitions.h not properly cleaning this one up */
#undef DEFINE_float
#define DEFINE_bool(nam, def, cmt)   FLAG(Boolean, nam)
#define DEFINE_int(nam, def, cmt)    FLAG(Integer, nam)
#define DEFINE_float(nam, def, cmt)  FLAG( Number, nam)
#define DEFINE_string(nam, def, cmt) FLAG(String, nam)
#define DEFINE_implication(x, y)

#if (NODE_VERSION_AT_LEAST(0, 10, 28))
  #include "v8_flag_definitions_0.10.h"
#elif (NODE_VERSION_AT_LEAST(0, 8, 26))
  #include "v8_flag_definitions_0.8.h"
#endif

#define FLAG(type, nam)                              \
  NAN_METHOD(Get_##nam) {                            \
    NanScope();                                      \
    NanReturnValue(NanNew<v8::type>(i::FLAG_##nam)); \
  }

EXPOSE(FLAG)
#ifdef ENABLE_DISASSEMBLER
EXPOSE_DISASSEMBLER(FLAG)
#endif

#undef FLAG
#define S(x) #x
#define FLAG(type, nam) \
  exports->Set(NanNew<v8::String>(S(nam)), NanNew<v8::FunctionTemplate>(Get_##nam)->GetFunction());

void init(v8::Handle<v8::Object> exports) {
EXPOSE(FLAG)
#ifdef ENABLE_DISASSEMBLER
EXPOSE_DISASSEMBLER(FLAG)
#endif
}

NODE_MODULE(v8_flag_definitions, init)

#undef DEFINE_bool
#undef DEFINE_int
#undef DEFINE_float
#undef DEFINE_string
#undef FLAG
#undef S
#undef DEFINE_implication
