#ifndef __V8_FLAGS_IMPLICATIONS__
#define __V8_FLAGS_IMPLICATIONS__

#include <map>
#include "v8.h"
#include "nan.h"

#define MAX_IMPLICATIONS 20

class SizedArray {
  const char* _items[MAX_IMPLICATIONS];
  int _len;
public:
  SizedArray() : _len(0) {}
  void add(const char* el) { _items[_len++] = el; }
  const char** items() { return _items; }
  int len() const { return _len; }
};

typedef std::map<const char*, SizedArray*> Implications;
static Implications implications;
static Implications neg_implications;

void create_implications(const char* name) {
  implications[name] = new SizedArray();
}

void add_implication(const char* name, const char* impl) {
  implications[name]->add(impl);
}

void create_neg_implications(const char* name) {
  neg_implications[name] = new SizedArray();
}

void add_neg_implication(const char* name, const char* impl) {
  neg_implications[name]->add(impl);
}

void get_implications(const char* name, v8::Local<v8::Value>* argv, int* len) {
  *len = implications[name]->len();
  const char **items = implications[name]->items();

  for(int i = 0; i < *len; i++) {
    argv[i] = NanNew<v8::String>(items[i]);
  }
}

void get_neg_implications(const char* name, v8::Local<v8::Value>* argv, int* len) {
  *len = neg_implications[name]->len();
  const char **items = neg_implications[name]->items();

  for(int i = 0; i < *len; i++) {
    argv[i] = NanNew<v8::String>(items[i]);
  }
}
#endif
