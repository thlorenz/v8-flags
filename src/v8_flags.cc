#include <node.h>
#include <nan.h>
#include "v8.h"
#define FLAG_MODE_DECLARE 1
#define V8_OOL_CONSTANT_POOL 1
//#include "../v8/flag-definitions.h"

using v8::FunctionTemplate;
using v8::Handle;
using v8::Object;
using v8::String;
using v8::Uint32;

NAN_METHOD(Reset) {
  NanScope();

  //v8::V8::SetFlagsFromString("--allow-natives-syntax", (int)strlen("--allow-natives-syntax"));


  fprintf(stderr, "allow natives %d", v8::internal::FLAG_allow_natives_syntax);
  NanReturnUndefined();
}

void init(Handle<v8::Object> exports) {
  exports->Set(NanNew<v8::String>("reset"), NanNew<v8::FunctionTemplate>(Reset)->GetFunction());
}

NODE_MODULE(v8_flags, init)
