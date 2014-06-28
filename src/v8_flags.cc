//#include <nan.h>
#include "../node_modules/nan/nan.h"
#include "v8.h"

#include "atomicops.h"
#include "flags.h"
#include <node.h>

using v8::FunctionTemplate;
using v8::Isolate;
using v8::Handle;
using v8::String;
using v8::Object;
using v8::String;
using v8::Uint32;
using v8::Integer;
using v8::Boolean;

namespace i = v8::internal;

NAN_METHOD(Get_allow_natives_syntax) {
  NanScope();
  NanReturnValue(NanNew<Boolean>(i::FLAG_allow_natives_syntax));
}

NAN_METHOD(Set) {
  NanScope();

  Handle<String> flag = args[0]->ToString();
  size_t len;
  char *s = NanCString(flag, &len);
  int32_t err = i::FlagList::SetFlagsFromString(s, len);
  NanReturnValue(NanNew<Integer>(err));
}

void init(Handle<v8::Object> exports) {
  exports->Set(NanNew<v8::String>("set"), NanNew<v8::FunctionTemplate>(Set)->GetFunction());
  exports->Set(NanNew<v8::String>("get_allow_natives_syntax"), NanNew<v8::FunctionTemplate>(Get_allow_natives_syntax)->GetFunction());
}

NODE_MODULE(v8_flags, init)
