<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [use_strict `false` *{Boolean}*](#use_strict-false-boolean)
- [es5_readonly `true` *{Boolean}*](#es5_readonly-true-boolean)
- [es52_globals `true` *{Boolean}*](#es52_globals-true-boolean)
- [harmony_typeof `false` *{Boolean}*](#harmony_typeof-false-boolean)
  - [Resources](#resources)
- [harmony_scoping `false` *{Boolean}*](#harmony_scoping-false-boolean)
- [harmony_modules `false` *{Boolean}*](#harmony_modules-false-boolean)
  - [Implications](#implications)
  - [References](#references)
- [harmony_proxies `false` *{Boolean}*](#harmony_proxies-false-boolean)
  - [Resources](#resources-1)
- [harmony_collections `false` *{Boolean}*](#harmony_collections-false-boolean)
  - [References](#references-1)
- [harmony `false` *{Boolean}*](#harmony-false-boolean)
  - [Implications](#implications-1)
- [packed_arrays `true` *{Boolean}*](#packed_arrays-true-boolean)
- [smi_only_arrays `true` *{Boolean}*](#smi_only_arrays-true-boolean)
- [clever_optimizations `true` *{Boolean}*](#clever_optimizations-true-boolean)
- [unbox_double_arrays `true` *{Boolean}*](#unbox_double_arrays-true-boolean)
- [string_slices `true` *{Boolean}*](#string_slices-true-boolean)
- [crankshaft `true` *{Boolean}*](#crankshaft-true-boolean)
  - [Resources](#resources-2)
- [hydrogen_filter `` *{String}*](#hydrogen_filter--string)
- [use_range `true` *{Boolean}*](#use_range-true-boolean)
- [eliminate_dead_phis `true` *{Boolean}*](#eliminate_dead_phis-true-boolean)
- [use_gvn `true` *{Boolean}*](#use_gvn-true-boolean)
- [use_canonicalizing `true` *{Boolean}*](#use_canonicalizing-true-boolean)
- [use_inlining `true` *{Boolean}*](#use_inlining-true-boolean)
- [max_inlined_source_size `600` *{Integer}*](#max_inlined_source_size-600-integer)
- [max_inlined_nodes `196` *{Integer}*](#max_inlined_nodes-196-integer)
- [max_inlined_nodes_cumulative `196` *{Integer}*](#max_inlined_nodes_cumulative-196-integer)
- [loop_invariant_code_motion `true` *{Boolean}*](#loop_invariant_code_motion-true-boolean)
- [collect_megamorphic_maps_from_stub_cache `true` *{Boolean}*](#collect_megamorphic_maps_from_stub_cache-true-boolean)
- [hydrogen_stats `false` *{Boolean}*](#hydrogen_stats-false-boolean)
- [trace_hydrogen `false` *{Boolean}*](#trace_hydrogen-false-boolean)
- [trace_phase `Z` *{String}*](#trace_phase-z-string)
- [trace_inlining `false` *{Boolean}*](#trace_inlining-false-boolean)
- [trace_alloc `false` *{Boolean}*](#trace_alloc-false-boolean)
- [trace_all_uses `false` *{Boolean}*](#trace_all_uses-false-boolean)
- [trace_range `false` *{Boolean}*](#trace_range-false-boolean)
- [trace_gvn `false` *{Boolean}*](#trace_gvn-false-boolean)
- [trace_representation `false` *{Boolean}*](#trace_representation-false-boolean)
- [stress_pointer_maps `false` *{Boolean}*](#stress_pointer_maps-false-boolean)
- [stress_environments `false` *{Boolean}*](#stress_environments-false-boolean)
- [deopt_every_n_times `0` *{Integer}*](#deopt_every_n_times-0-integer)
- [trap_on_deopt `false` *{Boolean}*](#trap_on_deopt-false-boolean)
- [deoptimize_uncommon_cases `true` *{Boolean}*](#deoptimize_uncommon_cases-true-boolean)
- [polymorphic_inlining `true` *{Boolean}*](#polymorphic_inlining-true-boolean)
- [use_osr `true` *{Boolean}*](#use_osr-true-boolean)
- [array_bounds_checks_elimination `true` *{Boolean}*](#array_bounds_checks_elimination-true-boolean)
- [array_index_dehoisting `true` *{Boolean}*](#array_index_dehoisting-true-boolean)
- [dead_code_elimination `true` *{Boolean}*](#dead_code_elimination-true-boolean)
  - [Resources](#resources-3)
- [trace_dead_code_elimination `false` *{Boolean}*](#trace_dead_code_elimination-false-boolean)
- [trace_osr `false` *{Boolean}*](#trace_osr-false-boolean)
- [stress_runs `0` *{Integer}*](#stress_runs-0-integer)
- [optimize_closures `true` *{Boolean}*](#optimize_closures-true-boolean)
- [lookup_sample_by_shared `true` *{Boolean}*](#lookup_sample_by_shared-true-boolean)
- [cache_optimized_code `true` *{Boolean}*](#cache_optimized_code-true-boolean)
- [inline_construct `true` *{Boolean}*](#inline_construct-true-boolean)
- [inline_arguments `true` *{Boolean}*](#inline_arguments-true-boolean)
- [inline_accessors `true` *{Boolean}*](#inline_accessors-true-boolean)
- [loop_weight `1` *{Integer}*](#loop_weight-1-integer)
- [optimize_for_in `true` *{Boolean}*](#optimize_for_in-true-boolean)
- [opt_safe_uint32_operations `true` *{Boolean}*](#opt_safe_uint32_operations-true-boolean)
- [parallel_recompilation `false` *{Boolean}*](#parallel_recompilation-false-boolean)
- [trace_parallel_recompilation `false` *{Boolean}*](#trace_parallel_recompilation-false-boolean)
- [parallel_recompilation_queue_length `2` *{Integer}*](#parallel_recompilation_queue_length-2-integer)
- [experimental_profiler `true` *{Boolean}*](#experimental_profiler-true-boolean)
  - [Implications](#implications-2)
- [watch_ic_patching `false` *{Boolean}*](#watch_ic_patching-false-boolean)
- [frame_count `1` *{Integer}*](#frame_count-1-integer)
- [self_optimization `false` *{Boolean}*](#self_optimization-false-boolean)
- [direct_self_opt `false` *{Boolean}*](#direct_self_opt-false-boolean)
- [retry_self_opt `false` *{Boolean}*](#retry_self_opt-false-boolean)
- [count_based_interrupts `false` *{Boolean}*](#count_based_interrupts-false-boolean)
- [interrupt_at_exit `false` *{Boolean}*](#interrupt_at_exit-false-boolean)
- [weighted_back_edges `false` *{Boolean}*](#weighted_back_edges-false-boolean)
- [interrupt_budget `5888` *{Integer}*](#interrupt_budget-5888-integer)
- [type_info_threshold `15` *{Integer}*](#type_info_threshold-15-integer)
- [self_opt_count `130` *{Integer}*](#self_opt_count-130-integer)
- [trace_opt_verbose `false` *{Boolean}*](#trace_opt_verbose-false-boolean)
  - [Implications](#implications-3)
- [debug_code `false` *{Boolean}*](#debug_code-false-boolean)
- [code_comments `false` *{Boolean}*](#code_comments-false-boolean)
  - [Resources](#resources-4)
- [enable_sse2 `true` *{Boolean}*](#enable_sse2-true-boolean)
- [enable_sse3 `true` *{Boolean}*](#enable_sse3-true-boolean)
- [enable_sse4_1 `true` *{Boolean}*](#enable_sse4_1-true-boolean)
- [enable_cmov `true` *{Boolean}*](#enable_cmov-true-boolean)
- [enable_rdtsc `true` *{Boolean}*](#enable_rdtsc-true-boolean)
- [enable_sahf `true` *{Boolean}*](#enable_sahf-true-boolean)
- [enable_vfp3 `true` *{Boolean}*](#enable_vfp3-true-boolean)
- [enable_vfp2 `true` *{Boolean}*](#enable_vfp2-true-boolean)
- [enable_armv7 `true` *{Boolean}*](#enable_armv7-true-boolean)
- [enable_sudiv `true` *{Boolean}*](#enable_sudiv-true-boolean)
- [enable_movw_movt `false` *{Boolean}*](#enable_movw_movt-false-boolean)
- [enable_unaligned_accesses `true` *{Boolean}*](#enable_unaligned_accesses-true-boolean)
- [enable_fpu `true` *{Boolean}*](#enable_fpu-true-boolean)
- [expose_natives_as `undefined` *{String}*](#expose_natives_as-undefined-string)
- [expose_debug_as `undefined` *{String}*](#expose_debug_as-undefined-string)
- [expose_gc `false` *{Boolean}*](#expose_gc-false-boolean)
- [expose_externalize_string `false` *{Boolean}*](#expose_externalize_string-false-boolean)
- [stack_trace_limit `10` *{Integer}*](#stack_trace_limit-10-integer)
- [builtins_in_stack_traces `false` *{Boolean}*](#builtins_in_stack_traces-false-boolean)
- [disable_native_files `false` *{Boolean}*](#disable_native_files-false-boolean)
- [inline_new `true` *{Boolean}*](#inline_new-true-boolean)
- [stack_trace_on_abort `true` *{Boolean}*](#stack_trace_on_abort-true-boolean)
- [trace `false` *{Boolean}*](#trace-false-boolean)
- [mask_constants_with_cookie `true` *{Boolean}*](#mask_constants_with_cookie-true-boolean)
- [lazy `true` *{Boolean}*](#lazy-true-boolean)
- [trace_opt `false` *{Boolean}*](#trace_opt-false-boolean)
- [trace_opt_stats `false` *{Boolean}*](#trace_opt_stats-false-boolean)
- [opt `true` *{Boolean}*](#opt-true-boolean)
- [always_opt `false` *{Boolean}*](#always_opt-false-boolean)
- [prepare_always_opt `false` *{Boolean}*](#prepare_always_opt-false-boolean)
- [trace_deopt `false` *{Boolean}*](#trace_deopt-false-boolean)
- [min_preparse_length `1024` *{Integer}*](#min_preparse_length-1024-integer)
- [always_full_compiler `false` *{Boolean}*](#always_full_compiler-false-boolean)
- [max_opt_count `10` *{Integer}*](#max_opt_count-10-integer)
- [compilation_cache `true` *{Boolean}*](#compilation_cache-true-boolean)
  - [Resources](#resources-5)
- [cache_prototype_transitions `true` *{Boolean}*](#cache_prototype_transitions-true-boolean)
  - [Resources:](#resources)
- [trace_debug_json `false` *{Boolean}*](#trace_debug_json-false-boolean)
- [debugger_auto_break `true` *{Boolean}*](#debugger_auto_break-true-boolean)
- [enable_liveedit `true` *{Boolean}*](#enable_liveedit-true-boolean)
- [break_on_abort `true` *{Boolean}*](#break_on_abort-true-boolean)
- [stack_size `984` *{Integer}*](#stack_size-984-integer)
- [max_stack_trace_source_length `300` *{Integer}*](#max_stack_trace_source_length-300-integer)
- [always_inline_smi_code `false` *{Boolean}*](#always_inline_smi_code-false-boolean)
- [max_new_space_size `0` *{Integer}*](#max_new_space_size-0-integer)
- [max_old_space_size `0` *{Integer}*](#max_old_space_size-0-integer)
- [max_executable_size `0` *{Integer}*](#max_executable_size-0-integer)
- [gc_global `false` *{Boolean}*](#gc_global-false-boolean)
- [gc_interval `-1` *{Integer}*](#gc_interval--1-integer)
- [trace_gc `false` *{Boolean}*](#trace_gc-false-boolean)
- [trace_gc_nvp `false` *{Boolean}*](#trace_gc_nvp-false-boolean)
- [trace_gc_ignore_scavenger `false` *{Boolean}*](#trace_gc_ignore_scavenger-false-boolean)
- [print_cumulative_gc_stat `false` *{Boolean}*](#print_cumulative_gc_stat-false-boolean)
- [trace_gc_verbose `false` *{Boolean}*](#trace_gc_verbose-false-boolean)
- [trace_fragmentation `false` *{Boolean}*](#trace_fragmentation-false-boolean)
- [trace_external_memory `false` *{Boolean}*](#trace_external_memory-false-boolean)
- [collect_maps `true` *{Boolean}*](#collect_maps-true-boolean)
- [flush_code `true` *{Boolean}*](#flush_code-true-boolean)
- [incremental_marking `true` *{Boolean}*](#incremental_marking-true-boolean)
- [incremental_marking_steps `true` *{Boolean}*](#incremental_marking_steps-true-boolean)
- [trace_incremental_marking `false` *{Boolean}*](#trace_incremental_marking-false-boolean)
- [track_gc_object_stats `false` *{Boolean}*](#track_gc_object_stats-false-boolean)
- [use_idle_notification `true` *{Boolean}*](#use_idle_notification-true-boolean)
- [use_ic `true` *{Boolean}*](#use_ic-true-boolean)
- [native_code_counters `false` *{Boolean}*](#native_code_counters-false-boolean)
- [always_compact `false` *{Boolean}*](#always_compact-false-boolean)
- [lazy_sweeping `true` *{Boolean}*](#lazy_sweeping-true-boolean)
- [never_compact `false` *{Boolean}*](#never_compact-false-boolean)
- [compact_code_space `true` *{Boolean}*](#compact_code_space-true-boolean)
- [incremental_code_compaction `true` *{Boolean}*](#incremental_code_compaction-true-boolean)
- [cleanup_code_caches_at_gc `true` *{Boolean}*](#cleanup_code_caches_at_gc-true-boolean)
- [random_seed `0` *{Integer}*](#random_seed-0-integer)
- [use_verbose_printer `true` *{Boolean}*](#use_verbose_printer-true-boolean)
- [allow_natives_syntax `false` *{Boolean}*](#allow_natives_syntax-false-boolean)
- [trace_parse `false` *{Boolean}*](#trace_parse-false-boolean)
- [trace_sim `false` *{Boolean}*](#trace_sim-false-boolean)
- [check_icache `false` *{Boolean}*](#check_icache-false-boolean)
- [stop_sim_at `0` *{Integer}*](#stop_sim_at-0-integer)
- [sim_stack_alignment `8` *{Integer}*](#sim_stack_alignment-8-integer)
- [abort_on_uncaught_exception `false` *{Boolean}*](#abort_on_uncaught_exception-false-boolean)
- [trace_exception `false` *{Boolean}*](#trace_exception-false-boolean)
- [preallocate_message_memory `false` *{Boolean}*](#preallocate_message_memory-false-boolean)
- [randomize_hashes `true` *{Boolean}*](#randomize_hashes-true-boolean)
- [hash_seed `0` *{Integer}*](#hash_seed-0-integer)
- [preemption `false` *{Boolean}*](#preemption-false-boolean)
- [regexp_optimization `true` *{Boolean}*](#regexp_optimization-true-boolean)
- [testing_string_flag `Hello, world!` *{String}*](#testing_string_flag-hello-world!-string)
- [testing_serialization_file `/tmp/serdes` *{String}*](#testing_serialization_file-tmpserdes-string)
- [extra_code `undefined` *{String}*](#extra_code-undefined-string)
- [help `false` *{Boolean}*](#help-false-boolean)
- [dump_counters `false` *{Boolean}*](#dump_counters-false-boolean)
- [map_counters `` *{String}*](#map_counters--string)
- [debug_compile_events `true` *{Boolean}*](#debug_compile_events-true-boolean)
  - [Resources](#resources-6)
- [debug_script_collected_events `true` *{Boolean}*](#debug_script_collected_events-true-boolean)
- [gdbjit `false` *{Boolean}*](#gdbjit-false-boolean)
- [gdbjit_full `false` *{Boolean}*](#gdbjit_full-false-boolean)
- [gdbjit_dump `false` *{Boolean}*](#gdbjit_dump-false-boolean)
- [gdbjit_dump_filter `` *{String}*](#gdbjit_dump_filter--string)
- [force_marking_deque_overflows `false` *{Boolean}*](#force_marking_deque_overflows-false-boolean)
- [stress_compaction `false` *{Boolean}*](#stress_compaction-false-boolean)
- [enable_slow_asserts `false` *{Boolean}*](#enable_slow_asserts-false-boolean)
- [trace_codegen `false` *{Boolean}*](#trace_codegen-false-boolean)
- [print_source `false` *{Boolean}*](#print_source-false-boolean)
- [print_builtin_source `false` *{Boolean}*](#print_builtin_source-false-boolean)
- [print_ast `false` *{Boolean}*](#print_ast-false-boolean)
- [print_builtin_ast `false` *{Boolean}*](#print_builtin_ast-false-boolean)
- [stop_at `` *{String}*](#stop_at--string)
- [print_builtin_scopes `false` *{Boolean}*](#print_builtin_scopes-false-boolean)
- [print_scopes `false` *{Boolean}*](#print_scopes-false-boolean)
- [trace_contexts `false` *{Boolean}*](#trace_contexts-false-boolean)
- [gc_greedy `false` *{Boolean}*](#gc_greedy-false-boolean)
- [gc_verbose `false` *{Boolean}*](#gc_verbose-false-boolean)
- [heap_stats `false` *{Boolean}*](#heap_stats-false-boolean)
- [code_stats `false` *{Boolean}*](#code_stats-false-boolean)
  - [Resources](#resources-7)
- [verify_native_context_separation `false` *{Boolean}*](#verify_native_context_separation-false-boolean)
- [print_handles `false` *{Boolean}*](#print_handles-false-boolean)
- [print_global_handles `false` *{Boolean}*](#print_global_handles-false-boolean)
- [trace_ic `false` *{Boolean}*](#trace_ic-false-boolean)
- [print_interfaces `false` *{Boolean}*](#print_interfaces-false-boolean)
- [print_interface_details `false` *{Boolean}*](#print_interface_details-false-boolean)
- [print_interface_depth `5` *{Integer}*](#print_interface_depth-5-integer)
- [trace_normalization `false` *{Boolean}*](#trace_normalization-false-boolean)
- [trace_lazy `false` *{Boolean}*](#trace_lazy-false-boolean)
- [collect_heap_spill_statistics `false` *{Boolean}*](#collect_heap_spill_statistics-false-boolean)
- [trace_isolates `false` *{Boolean}*](#trace_isolates-false-boolean)
- [log_state_changes `false` *{Boolean}*](#log_state_changes-false-boolean)
- [regexp_possessive_quantifier `false` *{Boolean}*](#regexp_possessive_quantifier-false-boolean)
- [trace_regexp_bytecodes `false` *{Boolean}*](#trace_regexp_bytecodes-false-boolean)
- [trace_regexp_assembler `false` *{Boolean}*](#trace_regexp_assembler-false-boolean)
- [log `false` *{Boolean}*](#log-false-boolean)
- [log_all `false` *{Boolean}*](#log_all-false-boolean)
- [log_runtime `false` *{Boolean}*](#log_runtime-false-boolean)
- [log_api `false` *{Boolean}*](#log_api-false-boolean)
- [log_code `false` *{Boolean}*](#log_code-false-boolean)
- [log_gc `false` *{Boolean}*](#log_gc-false-boolean)
- [log_handles `false` *{Boolean}*](#log_handles-false-boolean)
- [log_snapshot_positions `false` *{Boolean}*](#log_snapshot_positions-false-boolean)
- [log_suspect `false` *{Boolean}*](#log_suspect-false-boolean)
- [prof `false` *{Boolean}*](#prof-false-boolean)
- [prof_auto `true` *{Boolean}*](#prof_auto-true-boolean)
- [prof_lazy `false` *{Boolean}*](#prof_lazy-false-boolean)
- [prof_browser_mode `true` *{Boolean}*](#prof_browser_mode-true-boolean)
- [log_regexp `false` *{Boolean}*](#log_regexp-false-boolean)
- [sliding_state_window `false` *{Boolean}*](#sliding_state_window-false-boolean)
- [logfile `v8.log` *{String}*](#logfile-v8log-string)
- [ll_prof `false` *{Boolean}*](#ll_prof-false-boolean)
- [gc_fake_mmap `/tmp/__v8_gc__` *{String}*](#gc_fake_mmap-tmp__v8_gc__-string)
- [trace_elements_transitions `false` *{Boolean}*](#trace_elements_transitions-false-boolean)
- [print_code_stubs `false` *{Boolean}*](#print_code_stubs-false-boolean)
- [test_secondary_stub_cache `false` *{Boolean}*](#test_secondary_stub_cache-false-boolean)
- [test_primary_stub_cache `false` *{Boolean}*](#test_primary_stub_cache-false-boolean)
- [print_code `false` *{Boolean}*](#print_code-false-boolean)
- [print_opt_code `false` *{Boolean}*](#print_opt_code-false-boolean)
- [print_unopt_code `false` *{Boolean}*](#print_unopt_code-false-boolean)
- [print_code_verbose `false` *{Boolean}*](#print_code_verbose-false-boolean)
- [print_builtin_code `false` *{Boolean}*](#print_builtin_code-false-boolean)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### use_strict `false` *{Boolean}*

enforce strict mode

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### es5_readonly `true` *{Boolean}*

activate correct semantics for inheriting readonliness

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### es52_globals `true` *{Boolean}*

activate new semantics for global var declarations

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### harmony_typeof `false` *{Boolean}*

enable harmony semantics for typeof

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

**Note:** this feature seems to work in v8 even without turning on this flag.

#### Resources

- *rejected?* [proposal](http://wiki.ecmascript.org/doku.php?id=harmony:typeof_null&s=typeof)

### harmony_scoping `false` *{Boolean}*

enable harmony block scoping

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### harmony_modules `false` *{Boolean}*

enable harmony modules (implies block scoping)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- harmony_scoping

#### References

- [spec](http://wiki.ecmascript.org/doku.php?id=harmony:modules)
- [v8 parser.cc](https://github.com/v8/v8/blob/3.25.30/src/parser.cc#L1147)

### harmony_proxies `false` *{Boolean}*

enable harmony proxies


**NOTE:** This flag cannot be configured after the process started up!

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Resources

- [v8 bootstrapper.cc](https://github.com/v8/v8/blob/3.25.30/src/bootstrapper.cc#L1609-L1614)
- [spec draft](http://wiki.ecmascript.org/doku.php?id=harmony:direct_proxies)

### harmony_collections `false` *{Boolean}*

enable harmony collections (sets, maps, and weak maps)


**NOTE:** This flag cannot be configured after the process started up!

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### References

- [v8 bootstrapper.cc](https://github.com/v8/v8/blob/3.25.30/src/bootstrapper.cc#L1363-L1374)
- [example](http://dailyjs.com/2012/10/15/preparing-for-esnext/#example_collections)

### harmony `false` *{Boolean}*

enable all harmony features (except typeof)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- harmony_scoping
- harmony_modules
- harmony_proxies
- harmony_collections


### packed_arrays `true` *{Boolean}*

optimizes arrays that have no holes

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### smi_only_arrays `true` *{Boolean}*

tracks arrays with only smi values

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### clever_optimizations `true` *{Boolean}*

Optimize object size, Array shift, DOM strings and string +

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### unbox_double_arrays `true` *{Boolean}*

automatically unbox arrays of doubles

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### string_slices `true` *{Boolean}*

use string slices

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### crankshaft `true` *{Boolean}*

use crankshaft

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`

#### Resources

- [v8 isolate.cc](https://github.com/v8/v8/blob/3.26.33/src/isolate.cc#L1778)
- [v8 runtime.cc](https://github.com/v8/v8/blob/3.26.33/src/runtime.cc#L8509)

### hydrogen_filter `` *{String}*

optimization filter

- **default:** ``
- **type:** `String`
- **readonly:** `false`


### use_range `true` *{Boolean}*

use hydrogen range analysis

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### eliminate_dead_phis `true` *{Boolean}*

eliminate dead phis

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### use_gvn `true` *{Boolean}*

use hydrogen global value numbering

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### use_canonicalizing `true` *{Boolean}*

use hydrogen instruction canonicalizing

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### use_inlining `true` *{Boolean}*

use function inlining

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### max_inlined_source_size `600` *{Integer}*

maximum source size in bytes considered for a single inlining

- **default:** `600`
- **type:** `Integer`
- **readonly:** `false`


### max_inlined_nodes `196` *{Integer}*

maximum number of AST nodes considered for a single inlining

- **default:** `196`
- **type:** `Integer`
- **readonly:** `false`


### max_inlined_nodes_cumulative `196` *{Integer}*

maximum cumulative number of AST nodes considered for inlining

- **default:** `196`
- **type:** `Integer`
- **readonly:** `false`


### loop_invariant_code_motion `true` *{Boolean}*

loop invariant code motion

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### collect_megamorphic_maps_from_stub_cache `true` *{Boolean}*

crankshaft harvests type feedback from stub cache

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### hydrogen_stats `false` *{Boolean}*

print statistics for hydrogen

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_hydrogen `false` *{Boolean}*

trace generated hydrogen to file

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_phase `Z` *{String}*

trace generated IR for specified phases

- **default:** `Z`
- **type:** `String`
- **readonly:** `false`


### trace_inlining `false` *{Boolean}*

trace inlining decisions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_alloc `false` *{Boolean}*

trace register allocator

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_all_uses `false` *{Boolean}*

trace all use positions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_range `false` *{Boolean}*

trace range analysis

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_gvn `false` *{Boolean}*

trace global value numbering

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_representation `false` *{Boolean}*

trace representation types

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### stress_pointer_maps `false` *{Boolean}*

pointer map for every instruction

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### stress_environments `false` *{Boolean}*

environment for every instruction

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### deopt_every_n_times `0` *{Integer}*

deoptimize every n times a deopt point is passed

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### trap_on_deopt `false` *{Boolean}*

put a break point before deoptimizing

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### deoptimize_uncommon_cases `true` *{Boolean}*

deoptimize uncommon cases

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### polymorphic_inlining `true` *{Boolean}*

polymorphic inlining

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### use_osr `true` *{Boolean}*

use on-stack replacement

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### array_bounds_checks_elimination `true` *{Boolean}*

perform array bounds checks elimination

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### array_index_dehoisting `true` *{Boolean}*

perform array index dehoisting

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### dead_code_elimination `true` *{Boolean}*

use dead code elimination

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`

#### Resources

[v8 hydrogen.cc](https://github.com/v8/v8/blob/3.26.33/src/hydrogen.cc#L3999)
[v8 hydrogin-dce.cc](https://github.com/v8/v8/blob/3.26.33/src/hydrogen-dce.cc)

**Note**: not available below **node:** `0.10` - **v8:** `3.14`

### trace_dead_code_elimination `false` *{Boolean}*

trace dead code elimination

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_osr `false` *{Boolean}*

trace on-stack replacement

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### stress_runs `0` *{Integer}*

number of stress runs

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### optimize_closures `true` *{Boolean}*

optimize closures

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### lookup_sample_by_shared `true` *{Boolean}*

when picking a function to optimize, watch for shared function info, not JSFunction itself

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### cache_optimized_code `true` *{Boolean}*

cache optimized code for closures

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### inline_construct `true` *{Boolean}*

inline constructor calls

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### inline_arguments `true` *{Boolean}*

inline functions with arguments object

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### inline_accessors `true` *{Boolean}*

inline JavaScript accessors

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### loop_weight `1` *{Integer}*

loop weight for representation inference

- **default:** `1`
- **type:** `Integer`
- **readonly:** `false`


### optimize_for_in `true` *{Boolean}*

optimize functions containing for-in loops

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### opt_safe_uint32_operations `true` *{Boolean}*

allow uint32 values on optimize frames if they are used only insafe operations

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### parallel_recompilation `false` *{Boolean}*

optimizing hot functions asynchronously on a separate thread

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_parallel_recompilation `false` *{Boolean}*

track parallel recompilation

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### parallel_recompilation_queue_length `2` *{Integer}*

the length of the parallel compilation queue

- **default:** `2`
- **type:** `Integer`
- **readonly:** `false`


### experimental_profiler `true` *{Boolean}*

enable all profiler experiments

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- watch_ic_patching
- self_optimization
- retry_self_opt
- count_based_interrupts
- interrupt_at_exit
- weighted_back_edges


### watch_ic_patching `false` *{Boolean}*

profiler considers IC stability

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### frame_count `1` *{Integer}*

number of stack frames inspected by the profiler

- **default:** `1`
- **type:** `Integer`
- **readonly:** `false`


### self_optimization `false` *{Boolean}*

primitive functions trigger their own optimization

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### direct_self_opt `false` *{Boolean}*

call recompile stub directly when self-optimizing

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### retry_self_opt `false` *{Boolean}*

re-try self-optimization if it failed

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### count_based_interrupts `false` *{Boolean}*

trigger profiler ticks based on counting instead of timing

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### interrupt_at_exit `false` *{Boolean}*

insert an interrupt check at function exit

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### weighted_back_edges `false` *{Boolean}*

weight back edges by jump distance for interrupt triggering

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### interrupt_budget `5888` *{Integer}*

execution budget before interrupt is triggered

- **default:** `5888`
- **type:** `Integer`
- **readonly:** `false`


### type_info_threshold `15` *{Integer}*

percentage of ICs that must have type info to allow optimization

- **default:** `15`
- **type:** `Integer`
- **readonly:** `false`


### self_opt_count `130` *{Integer}*

call count before self-optimization

- **default:** `130`
- **type:** `Integer`
- **readonly:** `false`


### trace_opt_verbose `false` *{Boolean}*

extra verbose compilation tracing

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- trace_opt


### debug_code `false` *{Boolean}*

generate extra code (assertions) for debugging

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### code_comments `false` *{Boolean}*

emit comments in code disassembly

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Resources

- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/lithium-codegen.cc#L66-L73)
- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/heap.cc#L4528-L4536)

**Note**: not available below **node:** `0.11` - **v8:** `3.25`

### enable_sse2 `true` *{Boolean}*

enable use of SSE2 instructions if available

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_sse3 `true` *{Boolean}*

enable use of SSE3 instructions if available

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_sse4_1 `true` *{Boolean}*

enable use of SSE4.1 instructions if available

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_cmov `true` *{Boolean}*

enable use of CMOV instruction if available

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_rdtsc `true` *{Boolean}*

enable use of RDTSC instruction if available

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_sahf `true` *{Boolean}*

enable use of SAHF instruction if available (X64 only)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_vfp3 `true` *{Boolean}*

enable use of VFP3 instructions if available - this implies enabling ARMv7 and VFP2 instructions (ARM only)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_vfp2 `true` *{Boolean}*

enable use of VFP2 instructions if available

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_armv7 `true` *{Boolean}*

enable use of ARMv7 instructions if available (ARM only)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_sudiv `true` *{Boolean}*

enable use of SDIV and UDIV instructions if available (ARM only)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_movw_movt `false` *{Boolean}*

enable loading 32-bit constant by means of movw/movt instruction pairs (ARM only)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### enable_unaligned_accesses `true` *{Boolean}*

enable unaligned accesses for ARMv7 (ARM only)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_fpu `true` *{Boolean}*

enable use of MIPS FPU instructions if available (MIPS only)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### expose_natives_as `undefined` *{String}*

expose natives in global object


**NOTE:** This flag cannot be configured after the process started up!

- **default:** `undefined`
- **type:** `String`
- **readonly:** `false`


### expose_debug_as `undefined` *{String}*

expose debug in global object


**NOTE:** This flag cannot be configured after the process started up!

- **default:** `undefined`
- **type:** `String`
- **readonly:** `false`


### expose_gc `false` *{Boolean}*

expose gc extension


**NOTE:** This flag cannot be configured after the process started up!

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### expose_externalize_string `false` *{Boolean}*

expose externalize string extension

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### stack_trace_limit `10` *{Integer}*

number of stack frames to capture

- **default:** `10`
- **type:** `Integer`
- **readonly:** `false`


### builtins_in_stack_traces `false` *{Boolean}*

show built-in functions in stack traces

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### disable_native_files `false` *{Boolean}*

disable builtin natives files

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### inline_new `true` *{Boolean}*

use fast inline allocation

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### stack_trace_on_abort `true` *{Boolean}*

print a stack trace if an assertion failure occurs

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### trace `false` *{Boolean}*

trace function calls

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### mask_constants_with_cookie `true` *{Boolean}*

use random jit cookie to mask large constants

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### lazy `true` *{Boolean}*

use lazy compilation

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### trace_opt `false` *{Boolean}*

trace lazy optimization

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_opt_stats `false` *{Boolean}*

trace lazy optimization statistics

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### opt `true` *{Boolean}*

use adaptive optimizations

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### always_opt `false` *{Boolean}*

always try to optimize functions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

**Note**: not properly working below **node:** `0.10` - **v8:** `3.14`

### prepare_always_opt `false` *{Boolean}*

prepare for turning on always opt

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_deopt `false` *{Boolean}*

trace deoptimization

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### min_preparse_length `1024` *{Integer}*

minimum length for automatic enable preparsing

- **default:** `1024`
- **type:** `Integer`
- **readonly:** `false`


### always_full_compiler `false` *{Boolean}*

try to use the dedicated run-once backend for all code

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### max_opt_count `10` *{Integer}*

maximum number of optimization attempts before giving up.

- **default:** `10`
- **type:** `Integer`
- **readonly:** `false`


### compilation_cache `true` *{Boolean}*

enable compilation cache

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`

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

### cache_prototype_transitions `true` *{Boolean}*

cache prototype transitions

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`

#### Resources: 
  
- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/objects.cc#L12076)

### trace_debug_json `false` *{Boolean}*

trace debugging JSON request/response

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### debugger_auto_break `true` *{Boolean}*

automatically set the debug break flag when debugger commands are in the queue

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_liveedit `true` *{Boolean}*

enable liveedit experimental feature

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### break_on_abort `true` *{Boolean}*

always cause a debug break before aborting

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### stack_size `984` *{Integer}*

default size of stack region v8 is allowed to use (in kBytes)

- **default:** `984`
- **type:** `Integer`
- **readonly:** `false`


### max_stack_trace_source_length `300` *{Integer}*

maximum length of function source code printed in a stack trace.

- **default:** `300`
- **type:** `Integer`
- **readonly:** `false`


### always_inline_smi_code `false` *{Boolean}*

always inline smi code in non-opt code

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### max_new_space_size `0` *{Integer}*

max size of the new generation (in kBytes)

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### max_old_space_size `0` *{Integer}*

max size of the old generation (in Mbytes)

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### max_executable_size `0` *{Integer}*

max size of executable memory (in Mbytes)

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### gc_global `false` *{Boolean}*

always perform global GCs

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### gc_interval `-1` *{Integer}*

garbage collect after <n> allocations

- **default:** `-1`
- **type:** `Integer`
- **readonly:** `false`


### trace_gc `false` *{Boolean}*

print one trace line following each garbage collection

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_gc_nvp `false` *{Boolean}*

print one detailed trace line in name=value format after each garbage collection

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_gc_ignore_scavenger `false` *{Boolean}*

do not print trace line after scavenger collection

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### print_cumulative_gc_stat `false` *{Boolean}*

print cumulative GC statistics in name=value format on exit

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_gc_verbose `false` *{Boolean}*

print more details following each garbage collection

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_fragmentation `false` *{Boolean}*

report fragmentation for old pointer and data pages

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_external_memory `false` *{Boolean}*

print amount of external allocated memory after each time it is adjusted.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### collect_maps `true` *{Boolean}*

garbage collect maps from which no objects can be reached

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### flush_code `true` *{Boolean}*

flush code that we expect not to use again before full gc

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### incremental_marking `true` *{Boolean}*

use incremental marking

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### incremental_marking_steps `true` *{Boolean}*

do incremental marking steps

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### trace_incremental_marking `false` *{Boolean}*

trace progress of the incremental marking

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### track_gc_object_stats `false` *{Boolean}*

track object counts and memory usage

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### use_idle_notification `true` *{Boolean}*

Use idle notification to reduce memory footprint.

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### use_ic `true` *{Boolean}*

use inline caching

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### native_code_counters `false` *{Boolean}*

generate extra code for manipulating stats counters

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### always_compact `false` *{Boolean}*

Perform compaction on every full GC

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### lazy_sweeping `true` *{Boolean}*

Use lazy sweeping for old pointer and data spaces

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### never_compact `false` *{Boolean}*

Never perform compaction on full GC - testing only

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### compact_code_space `true` *{Boolean}*

Compact code space on full non-incremental collections

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### incremental_code_compaction `true` *{Boolean}*

Compact code space on full incremental collections

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### cleanup_code_caches_at_gc `true` *{Boolean}*

Flush inline caches prior to mark compact collection and flush code caches in maps during mark compact cycle.

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### random_seed `0` *{Integer}*

Default seed for initializing random generator (0, the default, means to use system random).

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### use_verbose_printer `true` *{Boolean}*

allows verbose printing

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### allow_natives_syntax `false` *{Boolean}*

allow natives syntax

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_parse `false` *{Boolean}*

trace parsing and preparsing

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_sim `false` *{Boolean}*

Trace simulator execution

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### check_icache `false` *{Boolean}*

Check icache flushes in ARM and MIPS simulator

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### stop_sim_at `0` *{Integer}*

Simulator stop after x number of instructions

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### sim_stack_alignment `8` *{Integer}*

Stack alingment in bytes in simulator (4 or 8, 8 is default)

- **default:** `8`
- **type:** `Integer`
- **readonly:** `false`


### abort_on_uncaught_exception `false` *{Boolean}*

abort program (dump core) when an uncaught exception is thrown

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_exception `false` *{Boolean}*

print stack trace when throwing exceptions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### preallocate_message_memory `false` *{Boolean}*

preallocate some memory to build stack traces.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### randomize_hashes `true` *{Boolean}*

randomize hashes to avoid predictable hash collisions (with snapshots this option cannot override the baked-in seed)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### hash_seed `0` *{Integer}*

Fixed seed to use to hash property keys (0 means random)(with snapshots this option cannot override the baked-in seed)

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### preemption `false` *{Boolean}*

activate a 100ms timer that switches between V8 threads

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### regexp_optimization `true` *{Boolean}*

generate optimized regexp code

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### testing_string_flag `Hello, world!` *{String}*

string-flag

- **default:** `Hello, world!`
- **type:** `String`
- **readonly:** `false`


### testing_serialization_file `/tmp/serdes` *{String}*

file in which to serialize heap

- **default:** `/tmp/serdes`
- **type:** `String`
- **readonly:** `false`


### extra_code `undefined` *{String}*

A filename with extra code to be included in the snapshot (mksnapshot only)

- **default:** `undefined`
- **type:** `String`
- **readonly:** `false`


### help `false` *{Boolean}*

Print usage message, including flags, on console

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### dump_counters `false` *{Boolean}*

Dump counters on exit

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### map_counters `` *{String}*

Map counters to a file

- **default:** ``
- **type:** `String`
- **readonly:** `false`


### debug_compile_events `true` *{Boolean}*

Enable debugger compile events

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`

#### Resources

[v8 debug.h](https://github.com/v8/v8/blob/3.26.33/src/debug.h#L843-L845)

**Note:** disabled by default on `WebOS`

### debug_script_collected_events `true` *{Boolean}*

Enable debugger script collected events

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### gdbjit `false` *{Boolean}*

enable GDBJIT interface (disables compacting GC)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### gdbjit_full `false` *{Boolean}*

enable GDBJIT interface for all code objects

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### gdbjit_dump `false` *{Boolean}*

dump elf objects with debug info to disk

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### gdbjit_dump_filter `` *{String}*

dump only objects containing this substring

- **default:** ``
- **type:** `String`
- **readonly:** `false`


### force_marking_deque_overflows `false` *{Boolean}*

force overflows of marking deque by reducing it's size to 64 words

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### stress_compaction `false` *{Boolean}*

stress the GC compactor to flush out bugs (implies --force_marking_deque_overflows)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### enable_slow_asserts `false` *{Boolean}*

enable asserts that are slow to execute

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_codegen `false` *{Boolean}*

print name of functions for which code is generated

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_source `false` *{Boolean}*

pretty print source code

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_builtin_source `false` *{Boolean}*

pretty print source code for builtins

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_ast `false` *{Boolean}*

print source AST

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_builtin_ast `false` *{Boolean}*

print source AST for builtins

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### stop_at `` *{String}*

function name where to insert a breakpoint

- **default:** ``
- **type:** `String`
- **readonly:** `true`


### print_builtin_scopes `false` *{Boolean}*

print scopes for builtins

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_scopes `false` *{Boolean}*

print scopes

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_contexts `false` *{Boolean}*

trace contexts operations

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### gc_greedy `false` *{Boolean}*

perform GC prior to some allocations

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### gc_verbose `false` *{Boolean}*

print stuff during garbage collection

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### heap_stats `false` *{Boolean}*

report heap statistics before and after GC

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### code_stats `false` *{Boolean}*

report code statistics after GC

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`

#### Resources

- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/heap.cc#L582)
- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/heap.cc#L4528-L4536)

### verify_native_context_separation `false` *{Boolean}*

verify that code holds on to at most one native context after GC

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_handles `false` *{Boolean}*

report handles after GC

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_global_handles `false` *{Boolean}*

report global handles after GC

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_ic `false` *{Boolean}*

trace inline cache state transitions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_interfaces `false` *{Boolean}*

print interfaces

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_interface_details `false` *{Boolean}*

print interface inference details

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_interface_depth `5` *{Integer}*

depth for printing interfaces

- **default:** `5`
- **type:** `Integer`
- **readonly:** `true`


### trace_normalization `false` *{Boolean}*

prints when objects are turned into dictionaries.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_lazy `false` *{Boolean}*

trace lazy compilation

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### collect_heap_spill_statistics `false` *{Boolean}*

report heap spill statistics along with heap_stats (requires heap_stats)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_isolates `false` *{Boolean}*

trace isolate state changes

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### log_state_changes `false` *{Boolean}*

Log state changes.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### regexp_possessive_quantifier `false` *{Boolean}*

enable possessive quantifier syntax for testing

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_regexp_bytecodes `false` *{Boolean}*

trace regexp bytecode execution

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_regexp_assembler `false` *{Boolean}*

trace regexp macro assembler calls.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### log `false` *{Boolean}*

Minimal logging (no API, code, GC, suspect, or handles samples).

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_all `false` *{Boolean}*

Log all events to the log file.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_runtime `false` *{Boolean}*

Activate runtime system %Log call.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_api `false` *{Boolean}*

Log API events to the log file.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_code `false` *{Boolean}*

Log code events to the log file without profiling.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_gc `false` *{Boolean}*

Log heap samples on garbage collection for the hp2ps tool.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_handles `false` *{Boolean}*

Log global handle events.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_snapshot_positions `false` *{Boolean}*

log positions of (de)serialized objects in the snapshot.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_suspect `false` *{Boolean}*

Log suspect operations.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### prof `false` *{Boolean}*

Log statistical profiling information (implies --log-code).

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### prof_auto `true` *{Boolean}*

Used with --prof, starts profiling automatically

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### prof_lazy `false` *{Boolean}*

Used with --prof, only does sampling and logging when profiler is active (implies --noprof_auto).

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### prof_browser_mode `true` *{Boolean}*

Used with --prof, turns on browser-compatible mode for profiling.

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### log_regexp `false` *{Boolean}*

Log regular expression execution.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### sliding_state_window `false` *{Boolean}*

Update sliding state window counters.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### logfile `v8.log` *{String}*

Specify the name of the log file.

- **default:** `v8.log`
- **type:** `String`
- **readonly:** `false`


### ll_prof `false` *{Boolean}*

Enable low-level linux profiler.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### gc_fake_mmap `/tmp/__v8_gc__` *{String}*

Specify the name of the file for fake gc mmap used in ll_prof

- **default:** `/tmp/__v8_gc__`
- **type:** `String`
- **readonly:** `false`


### trace_elements_transitions `false` *{Boolean}*

trace elements transitions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_code_stubs `false` *{Boolean}*

print code stubs

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### test_secondary_stub_cache `false` *{Boolean}*

test secondary stub cache by disabling the primary one

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### test_primary_stub_cache `false` *{Boolean}*

test primary stub cache by disabling the secondary one

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_code `false` *{Boolean}*

print generated code

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_opt_code `false` *{Boolean}*

print optimized code

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_unopt_code `false` *{Boolean}*

print unoptimized code before printing optimized code based on it

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_code_verbose `false` *{Boolean}*

print more information for code

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_builtin_code `false` *{Boolean}*

print generated code for builtins

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`

