#include <nan.h>
#include "v8.h"

#include "atomicops.h"
#include "flags.h"
#include <node.h>

namespace i = v8::internal;

// Reset all flags to their default value.
NAN_METHOD(ResetAllFlags) {
  i::FlagList::ResetAllFlags();
  NanReturnUndefined();
}

// Print help to stdout with flags, types, and default values.
NAN_METHOD(PrintHelp) {
  i::FlagList::PrintHelp();
  NanReturnUndefined();
}

// Set flags as consequence of being implied by another flag.
NAN_METHOD(EnforceFlagImplications) {
  i::FlagList::EnforceFlagImplications();
  NanReturnUndefined();
}

void init(v8::Handle<v8::Object> exports) {
  exports->Set(NanNew<v8::String>("resetAllFlags"), NanNew<v8::FunctionTemplate>(ResetAllFlags)->GetFunction());
  exports->Set(NanNew<v8::String>("printHelp"), NanNew<v8::FunctionTemplate>(PrintHelp)->GetFunction());
  exports->Set(NanNew<v8::String>("enforceFlagImplications"), NanNew<v8::FunctionTemplate>(EnforceFlagImplications)->GetFunction());
}

NODE_MODULE(v8_flag_list, init)
