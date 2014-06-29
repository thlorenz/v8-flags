#include <nan.h>
#include "v8.h"

#include "atomicops.h"
#include "flags.h"
#include <node.h>
#include "implications.h"

namespace i = v8::internal;
using i::kPointerSize;
using i::MB;
using i::KB;

#undef DEFINE_float
#undef DEFINE_args
#undef FLAG
#define DEFINE_bool(nam, def, cmt)   FLAG(nam, def, cmt, Boolean)
#define DEFINE_int(nam, def, cmt)    FLAG(nam, def, cmt, Integer)
#define DEFINE_float(nam, def, cmt)  FLAG(nam, def, cmt, Number)
#define DEFINE_string(nam, def, cmt) FLAG(nam, def, cmt, String)
#define DEFINE_implication(nam, implication)
#define DEFINE_neg_implication(nam, implication)
#define DEFINE_args(nam, def, cmt)
#define DEFINE_maybe_bool(name, def)

#define FLAG_FULL(nam, def, cmt, type) CREATE_function(nam, def, cmt, type, false)
#define FLAG_READONLY(nam, def, cmt, type) CREATE_function(nam, def, cmt, type, true)

#define S(x) #x
#define CREATE_function(nam, def, cmt, type, conf)                    \
NAN_METHOD(nam) {                                                     \
  NanScope();                                                         \
  NanCallback *cb = new NanCallback(args[0].As<v8::Function>());      \
                                                                      \
  v8::Local<v8::Value> argv[] = {                                     \
      NanNew<v8::String>(S(nam))                                      \
    , NanNew<v8::type>(def)                                           \
    , NanNew<v8::String>(cmt)                                         \
    , NanNew<v8::String>(S(type))                                     \
    , NanNew<v8::Boolean>(conf)                                       \
  };                                                                  \
                                                                      \
  cb->Call(5, argv);                                                  \
  NanReturnUndefined();                                               \
}                                                                     \
                                                                      \
NAN_METHOD(implications_##nam) {                                      \
  NanScope();                                                         \
  NanCallback *cb = new NanCallback(args[0].As<v8::Function>());      \
  v8::Local<v8::Value> argv[MAX_IMPLICATIONS];                        \
  int len;                                                            \
  get_implications(S(nam), argv, &len);                               \
  cb->Call(len, argv);                                                \
  NanReturnUndefined();                                               \
}                                                                     \
                                                                      \
NAN_METHOD(neg_implications_##nam) {                                  \
  NanScope();                                                         \
  NanCallback *cb = new NanCallback(args[0].As<v8::Function>());      \
  v8::Local<v8::Value> argv[MAX_IMPLICATIONS];                        \
  int len;                                                            \
  get_neg_implications(S(nam), argv, &len);                           \
  cb->Call(len, argv);                                                \
  NanReturnUndefined();                                               \
}

#if (NODE_VERSION_AT_LEAST(0, 11, 13))
  #include "v8_flag_definitions_0.11.h"
#elif (NODE_VERSION_AT_LEAST(0, 10, 28))
  #include "v8_flag_definitions_0.10.h"
#elif (NODE_VERSION_AT_LEAST(0, 8, 26))
  #include "v8_flag_definitions_0.8.h"
#endif

#undef FLAG
#undef CREATE_function

#define CREATE_function(nam, def, cmt, type, conf)                                                                                   \
  create_implications(S(nam));                                                                                                       \
  create_neg_implications(S(nam));                                                                                                   \
  exports->Set(NanNew<v8::String>(S(nam)), NanNew<v8::FunctionTemplate>(nam)->GetFunction());                                        \
  exports->Set(NanNew<v8::String>("neg_implications_" S(nam)), NanNew<v8::FunctionTemplate>(neg_implications_##nam)->GetFunction()); \
  exports->Set(NanNew<v8::String>("implications_" S(nam)), NanNew<v8::FunctionTemplate>(implications_##nam)->GetFunction());

#undef DEFINE_implication
#undef DEFINE_neg_implication
#define DEFINE_implication(nam, implication) add_implication(S(nam), S(implication));
#define DEFINE_neg_implication(nam, implication) add_neg_implication(S(nam), S(implication));

void init(v8::Handle<v8::Object> exports) {
#if (NODE_VERSION_AT_LEAST(0, 11, 13))
  #include "v8_flag_definitions_0.11.h"
#elif (NODE_VERSION_AT_LEAST(0, 10, 28))
  #include "v8_flag_definitions_0.10.h"
#elif (NODE_VERSION_AT_LEAST(0, 8, 26))
  #include "v8_flag_definitions_0.8.h"
#endif
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
#undef DEFINE_args
#undef DEFINE_maybe_bool

NODE_MODULE(v8_flags_meta, init)
