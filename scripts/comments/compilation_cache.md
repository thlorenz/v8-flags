The compilation cache keeps shared function infos for compiled
scripts and evals. The shared function infos are looked up using
the source string as the key. For regular expressions the
compilation data is cached.

Enable/Disable is used by debugger to disable compilation cache during debugging to make sure new scripts are always
compiled, however both this flag and the `enabled_` property need to be `true` in order for the compilation cache to get
used.

#### Resources

- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/compilation-cache.h#L220)
- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/debug.cc#L3292-L3301)
