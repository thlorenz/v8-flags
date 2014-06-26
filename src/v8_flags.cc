#include <node.h>
#include <nan.h>
#include "v8.h"

using v8::FunctionTemplate;
using v8::Isolate;
using v8::Handle;
using v8::String;
using v8::Object;
using v8::String;
using v8::Uint32;

NAN_METHOD(Set) {
  NanScope();

  //Isolate* i = args.GetIsolate();

  Handle<String> flag = args[0]->ToString();
  size_t len;
  char *s = NanCString(flag, &len);
  v8::V8::SetFlagsFromString(s, len);

  NanReturnUndefined();
}

void init(Handle<v8::Object> exports) {
  exports->Set(NanNew<v8::String>("set"), NanNew<v8::FunctionTemplate>(Set)->GetFunction());
}

NODE_MODULE(v8_flags, init)


// i->RequestGarbageCollectionForTesting(i->kFullGarbageCollection);
