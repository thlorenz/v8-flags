<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [use_strict *{Boolean}*](#use_strict-boolean)
- [es5_readonly *{Boolean}*](#es5_readonly-boolean)
- [es52_globals *{Boolean}*](#es52_globals-boolean)
- [harmony_typeof *{Boolean}*](#harmony_typeof-boolean)
- [harmony_scoping *{Boolean}*](#harmony_scoping-boolean)
- [harmony_modules *{Boolean}*](#harmony_modules-boolean)
  - [Implications](#implications)
- [harmony_proxies *{Boolean}*](#harmony_proxies-boolean)
- [harmony_collections *{Boolean}*](#harmony_collections-boolean)
- [harmony *{Boolean}*](#harmony-boolean)
  - [Implications](#implications-1)
- [packed_arrays *{Boolean}*](#packed_arrays-boolean)
- [smi_only_arrays *{Boolean}*](#smi_only_arrays-boolean)
- [clever_optimizations *{Boolean}*](#clever_optimizations-boolean)
- [unbox_double_arrays *{Boolean}*](#unbox_double_arrays-boolean)
- [string_slices *{Boolean}*](#string_slices-boolean)
- [crankshaft *{Boolean}*](#crankshaft-boolean)
  - [Resources](#resources)
- [hydrogen_filter *{String}*](#hydrogen_filter-string)
- [use_range *{Boolean}*](#use_range-boolean)
- [eliminate_dead_phis *{Boolean}*](#eliminate_dead_phis-boolean)
- [use_gvn *{Boolean}*](#use_gvn-boolean)
- [use_canonicalizing *{Boolean}*](#use_canonicalizing-boolean)
- [use_inlining *{Boolean}*](#use_inlining-boolean)
- [max_inlined_source_size *{Integer}*](#max_inlined_source_size-integer)
- [max_inlined_nodes *{Integer}*](#max_inlined_nodes-integer)
- [max_inlined_nodes_cumulative *{Integer}*](#max_inlined_nodes_cumulative-integer)
- [loop_invariant_code_motion *{Boolean}*](#loop_invariant_code_motion-boolean)
- [collect_megamorphic_maps_from_stub_cache *{Boolean}*](#collect_megamorphic_maps_from_stub_cache-boolean)
- [hydrogen_stats *{Boolean}*](#hydrogen_stats-boolean)
- [trace_hydrogen *{Boolean}*](#trace_hydrogen-boolean)
- [trace_phase *{String}*](#trace_phase-string)
- [trace_inlining *{Boolean}*](#trace_inlining-boolean)
- [trace_alloc *{Boolean}*](#trace_alloc-boolean)
- [trace_all_uses *{Boolean}*](#trace_all_uses-boolean)
- [trace_range *{Boolean}*](#trace_range-boolean)
- [trace_gvn *{Boolean}*](#trace_gvn-boolean)
- [trace_representation *{Boolean}*](#trace_representation-boolean)
- [stress_pointer_maps *{Boolean}*](#stress_pointer_maps-boolean)
- [stress_environments *{Boolean}*](#stress_environments-boolean)
- [deopt_every_n_times *{Integer}*](#deopt_every_n_times-integer)
- [trap_on_deopt *{Boolean}*](#trap_on_deopt-boolean)
- [deoptimize_uncommon_cases *{Boolean}*](#deoptimize_uncommon_cases-boolean)
- [polymorphic_inlining *{Boolean}*](#polymorphic_inlining-boolean)
- [use_osr *{Boolean}*](#use_osr-boolean)
- [array_bounds_checks_elimination *{Boolean}*](#array_bounds_checks_elimination-boolean)
- [array_index_dehoisting *{Boolean}*](#array_index_dehoisting-boolean)
- [dead_code_elimination *{Boolean}*](#dead_code_elimination-boolean)
  - [Resources](#resources-1)
- [trace_dead_code_elimination *{Boolean}*](#trace_dead_code_elimination-boolean)
- [trace_osr *{Boolean}*](#trace_osr-boolean)
- [stress_runs *{Integer}*](#stress_runs-integer)
- [optimize_closures *{Boolean}*](#optimize_closures-boolean)
- [lookup_sample_by_shared *{Boolean}*](#lookup_sample_by_shared-boolean)
- [cache_optimized_code *{Boolean}*](#cache_optimized_code-boolean)
- [inline_construct *{Boolean}*](#inline_construct-boolean)
- [inline_arguments *{Boolean}*](#inline_arguments-boolean)
- [inline_accessors *{Boolean}*](#inline_accessors-boolean)
- [loop_weight *{Integer}*](#loop_weight-integer)
- [optimize_for_in *{Boolean}*](#optimize_for_in-boolean)
- [opt_safe_uint32_operations *{Boolean}*](#opt_safe_uint32_operations-boolean)
- [parallel_recompilation *{Boolean}*](#parallel_recompilation-boolean)
- [trace_parallel_recompilation *{Boolean}*](#trace_parallel_recompilation-boolean)
- [parallel_recompilation_queue_length *{Integer}*](#parallel_recompilation_queue_length-integer)
- [experimental_profiler *{Boolean}*](#experimental_profiler-boolean)
  - [Implications](#implications-2)
- [watch_ic_patching *{Boolean}*](#watch_ic_patching-boolean)
- [frame_count *{Integer}*](#frame_count-integer)
- [self_optimization *{Boolean}*](#self_optimization-boolean)
- [direct_self_opt *{Boolean}*](#direct_self_opt-boolean)
- [retry_self_opt *{Boolean}*](#retry_self_opt-boolean)
- [count_based_interrupts *{Boolean}*](#count_based_interrupts-boolean)
- [interrupt_at_exit *{Boolean}*](#interrupt_at_exit-boolean)
- [weighted_back_edges *{Boolean}*](#weighted_back_edges-boolean)
- [interrupt_budget *{Integer}*](#interrupt_budget-integer)
- [type_info_threshold *{Integer}*](#type_info_threshold-integer)
- [self_opt_count *{Integer}*](#self_opt_count-integer)
- [trace_opt_verbose *{Boolean}*](#trace_opt_verbose-boolean)
  - [Implications](#implications-3)
- [debug_code *{Boolean}*](#debug_code-boolean)
- [code_comments *{Boolean}*](#code_comments-boolean)
  - [Resources](#resources-2)
- [enable_sse2 *{Boolean}*](#enable_sse2-boolean)
- [enable_sse3 *{Boolean}*](#enable_sse3-boolean)
- [enable_sse4_1 *{Boolean}*](#enable_sse4_1-boolean)
- [enable_cmov *{Boolean}*](#enable_cmov-boolean)
- [enable_rdtsc *{Boolean}*](#enable_rdtsc-boolean)
- [enable_sahf *{Boolean}*](#enable_sahf-boolean)
- [enable_vfp3 *{Boolean}*](#enable_vfp3-boolean)
- [enable_vfp2 *{Boolean}*](#enable_vfp2-boolean)
- [enable_armv7 *{Boolean}*](#enable_armv7-boolean)
- [enable_sudiv *{Boolean}*](#enable_sudiv-boolean)
- [enable_movw_movt *{Boolean}*](#enable_movw_movt-boolean)
- [enable_unaligned_accesses *{Boolean}*](#enable_unaligned_accesses-boolean)
- [enable_fpu *{Boolean}*](#enable_fpu-boolean)
- [expose_gc *{Boolean}*](#expose_gc-boolean)
- [expose_externalize_string *{Boolean}*](#expose_externalize_string-boolean)
- [stack_trace_limit *{Integer}*](#stack_trace_limit-integer)
- [builtins_in_stack_traces *{Boolean}*](#builtins_in_stack_traces-boolean)
- [disable_native_files *{Boolean}*](#disable_native_files-boolean)
- [inline_new *{Boolean}*](#inline_new-boolean)
- [stack_trace_on_abort *{Boolean}*](#stack_trace_on_abort-boolean)
- [trace *{Boolean}*](#trace-boolean)
- [mask_constants_with_cookie *{Boolean}*](#mask_constants_with_cookie-boolean)
- [lazy *{Boolean}*](#lazy-boolean)
- [trace_opt *{Boolean}*](#trace_opt-boolean)
- [trace_opt_stats *{Boolean}*](#trace_opt_stats-boolean)
- [opt *{Boolean}*](#opt-boolean)
- [always_opt *{Boolean}*](#always_opt-boolean)
- [prepare_always_opt *{Boolean}*](#prepare_always_opt-boolean)
- [trace_deopt *{Boolean}*](#trace_deopt-boolean)
- [min_preparse_length *{Integer}*](#min_preparse_length-integer)
- [always_full_compiler *{Boolean}*](#always_full_compiler-boolean)
- [max_opt_count *{Integer}*](#max_opt_count-integer)
- [compilation_cache *{Boolean}*](#compilation_cache-boolean)
  - [Resources](#resources-3)
- [cache_prototype_transitions *{Boolean}*](#cache_prototype_transitions-boolean)
  - [Resources:](#resources)
- [trace_debug_json *{Boolean}*](#trace_debug_json-boolean)
- [debugger_auto_break *{Boolean}*](#debugger_auto_break-boolean)
- [enable_liveedit *{Boolean}*](#enable_liveedit-boolean)
- [break_on_abort *{Boolean}*](#break_on_abort-boolean)
- [stack_size *{Integer}*](#stack_size-integer)
- [max_stack_trace_source_length *{Integer}*](#max_stack_trace_source_length-integer)
- [always_inline_smi_code *{Boolean}*](#always_inline_smi_code-boolean)
- [max_new_space_size *{Integer}*](#max_new_space_size-integer)
- [max_old_space_size *{Integer}*](#max_old_space_size-integer)
- [max_executable_size *{Integer}*](#max_executable_size-integer)
- [gc_global *{Boolean}*](#gc_global-boolean)
- [gc_interval *{Integer}*](#gc_interval-integer)
- [trace_gc *{Boolean}*](#trace_gc-boolean)
- [trace_gc_nvp *{Boolean}*](#trace_gc_nvp-boolean)
- [trace_gc_ignore_scavenger *{Boolean}*](#trace_gc_ignore_scavenger-boolean)
- [print_cumulative_gc_stat *{Boolean}*](#print_cumulative_gc_stat-boolean)
- [trace_gc_verbose *{Boolean}*](#trace_gc_verbose-boolean)
- [trace_fragmentation *{Boolean}*](#trace_fragmentation-boolean)
- [trace_external_memory *{Boolean}*](#trace_external_memory-boolean)
- [collect_maps *{Boolean}*](#collect_maps-boolean)
- [flush_code *{Boolean}*](#flush_code-boolean)
- [incremental_marking *{Boolean}*](#incremental_marking-boolean)
- [incremental_marking_steps *{Boolean}*](#incremental_marking_steps-boolean)
- [trace_incremental_marking *{Boolean}*](#trace_incremental_marking-boolean)
- [track_gc_object_stats *{Boolean}*](#track_gc_object_stats-boolean)
- [use_idle_notification *{Boolean}*](#use_idle_notification-boolean)
- [use_ic *{Boolean}*](#use_ic-boolean)
- [native_code_counters *{Boolean}*](#native_code_counters-boolean)
- [always_compact *{Boolean}*](#always_compact-boolean)
- [lazy_sweeping *{Boolean}*](#lazy_sweeping-boolean)
- [never_compact *{Boolean}*](#never_compact-boolean)
- [compact_code_space *{Boolean}*](#compact_code_space-boolean)
- [incremental_code_compaction *{Boolean}*](#incremental_code_compaction-boolean)
- [cleanup_code_caches_at_gc *{Boolean}*](#cleanup_code_caches_at_gc-boolean)
- [random_seed *{Integer}*](#random_seed-integer)
- [use_verbose_printer *{Boolean}*](#use_verbose_printer-boolean)
- [allow_natives_syntax *{Boolean}*](#allow_natives_syntax-boolean)
- [trace_parse *{Boolean}*](#trace_parse-boolean)
- [trace_sim *{Boolean}*](#trace_sim-boolean)
- [check_icache *{Boolean}*](#check_icache-boolean)
- [stop_sim_at *{Integer}*](#stop_sim_at-integer)
- [sim_stack_alignment *{Integer}*](#sim_stack_alignment-integer)
- [abort_on_uncaught_exception *{Boolean}*](#abort_on_uncaught_exception-boolean)
- [trace_exception *{Boolean}*](#trace_exception-boolean)
- [preallocate_message_memory *{Boolean}*](#preallocate_message_memory-boolean)
- [randomize_hashes *{Boolean}*](#randomize_hashes-boolean)
- [hash_seed *{Integer}*](#hash_seed-integer)
- [preemption *{Boolean}*](#preemption-boolean)
- [regexp_optimization *{Boolean}*](#regexp_optimization-boolean)
- [testing_string_flag *{String}*](#testing_string_flag-string)
- [testing_serialization_file *{String}*](#testing_serialization_file-string)
- [help *{Boolean}*](#help-boolean)
- [dump_counters *{Boolean}*](#dump_counters-boolean)
- [map_counters *{String}*](#map_counters-string)
- [debug_compile_events *{Boolean}*](#debug_compile_events-boolean)
  - [Resources](#resources-4)
- [debug_script_collected_events *{Boolean}*](#debug_script_collected_events-boolean)
- [gdbjit *{Boolean}*](#gdbjit-boolean)
- [gdbjit_full *{Boolean}*](#gdbjit_full-boolean)
- [gdbjit_dump *{Boolean}*](#gdbjit_dump-boolean)
- [gdbjit_dump_filter *{String}*](#gdbjit_dump_filter-string)
- [force_marking_deque_overflows *{Boolean}*](#force_marking_deque_overflows-boolean)
- [stress_compaction *{Boolean}*](#stress_compaction-boolean)
- [enable_slow_asserts *{Boolean}*](#enable_slow_asserts-boolean)
- [trace_codegen *{Boolean}*](#trace_codegen-boolean)
- [print_source *{Boolean}*](#print_source-boolean)
- [print_builtin_source *{Boolean}*](#print_builtin_source-boolean)
- [print_ast *{Boolean}*](#print_ast-boolean)
- [print_builtin_ast *{Boolean}*](#print_builtin_ast-boolean)
- [stop_at *{String}*](#stop_at-string)
- [print_builtin_scopes *{Boolean}*](#print_builtin_scopes-boolean)
- [print_scopes *{Boolean}*](#print_scopes-boolean)
- [trace_contexts *{Boolean}*](#trace_contexts-boolean)
- [gc_greedy *{Boolean}*](#gc_greedy-boolean)
- [gc_verbose *{Boolean}*](#gc_verbose-boolean)
- [heap_stats *{Boolean}*](#heap_stats-boolean)
- [code_stats *{Boolean}*](#code_stats-boolean)
  - [Resources](#resources-5)
- [verify_native_context_separation *{Boolean}*](#verify_native_context_separation-boolean)
- [print_handles *{Boolean}*](#print_handles-boolean)
- [print_global_handles *{Boolean}*](#print_global_handles-boolean)
- [trace_ic *{Boolean}*](#trace_ic-boolean)
- [print_interfaces *{Boolean}*](#print_interfaces-boolean)
- [print_interface_details *{Boolean}*](#print_interface_details-boolean)
- [print_interface_depth *{Integer}*](#print_interface_depth-integer)
- [trace_normalization *{Boolean}*](#trace_normalization-boolean)
- [trace_lazy *{Boolean}*](#trace_lazy-boolean)
- [collect_heap_spill_statistics *{Boolean}*](#collect_heap_spill_statistics-boolean)
- [trace_isolates *{Boolean}*](#trace_isolates-boolean)
- [log_state_changes *{Boolean}*](#log_state_changes-boolean)
- [regexp_possessive_quantifier *{Boolean}*](#regexp_possessive_quantifier-boolean)
- [trace_regexp_bytecodes *{Boolean}*](#trace_regexp_bytecodes-boolean)
- [trace_regexp_assembler *{Boolean}*](#trace_regexp_assembler-boolean)
- [log *{Boolean}*](#log-boolean)
- [log_all *{Boolean}*](#log_all-boolean)
- [log_runtime *{Boolean}*](#log_runtime-boolean)
- [log_api *{Boolean}*](#log_api-boolean)
- [log_code *{Boolean}*](#log_code-boolean)
- [log_gc *{Boolean}*](#log_gc-boolean)
- [log_handles *{Boolean}*](#log_handles-boolean)
- [log_snapshot_positions *{Boolean}*](#log_snapshot_positions-boolean)
- [log_suspect *{Boolean}*](#log_suspect-boolean)
- [prof *{Boolean}*](#prof-boolean)
- [prof_auto *{Boolean}*](#prof_auto-boolean)
- [prof_lazy *{Boolean}*](#prof_lazy-boolean)
- [prof_browser_mode *{Boolean}*](#prof_browser_mode-boolean)
- [log_regexp *{Boolean}*](#log_regexp-boolean)
- [sliding_state_window *{Boolean}*](#sliding_state_window-boolean)
- [logfile *{String}*](#logfile-string)
- [ll_prof *{Boolean}*](#ll_prof-boolean)
- [gc_fake_mmap *{String}*](#gc_fake_mmap-string)
- [trace_elements_transitions *{Boolean}*](#trace_elements_transitions-boolean)
- [print_code_stubs *{Boolean}*](#print_code_stubs-boolean)
- [test_secondary_stub_cache *{Boolean}*](#test_secondary_stub_cache-boolean)
- [test_primary_stub_cache *{Boolean}*](#test_primary_stub_cache-boolean)
- [print_code *{Boolean}*](#print_code-boolean)
- [print_opt_code *{Boolean}*](#print_opt_code-boolean)
- [print_unopt_code *{Boolean}*](#print_unopt_code-boolean)
- [print_code_verbose *{Boolean}*](#print_code_verbose-boolean)
- [print_builtin_code *{Boolean}*](#print_builtin_code-boolean)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### use_strict *{Boolean}*

enforce strict mode

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### es5_readonly *{Boolean}*

activate correct semantics for inheriting readonliness

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### es52_globals *{Boolean}*

activate new semantics for global var declarations

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### harmony_typeof *{Boolean}*

enable harmony semantics for typeof

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### harmony_scoping *{Boolean}*

enable harmony block scoping

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### harmony_modules *{Boolean}*

enable harmony modules (implies block scoping)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- harmony_scoping


### harmony_proxies *{Boolean}*

enable harmony proxies

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### harmony_collections *{Boolean}*

enable harmony collections (sets, maps, and weak maps)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### harmony *{Boolean}*

enable all harmony features (except typeof)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- harmony_scoping
- harmony_modules
- harmony_proxies
- harmony_collections


### packed_arrays *{Boolean}*

optimizes arrays that have no holes

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### smi_only_arrays *{Boolean}*

tracks arrays with only smi values

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### clever_optimizations *{Boolean}*

Optimize object size, Array shift, DOM strings and string +

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### unbox_double_arrays *{Boolean}*

automatically unbox arrays of doubles

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### string_slices *{Boolean}*

use string slices

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### crankshaft *{Boolean}*

use crankshaft

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`

#### Resources

- [v8 isolate.cc](https://github.com/v8/v8/blob/3.26.33/src/isolate.cc#L1778)
- [v8 runtime.cc](https://github.com/v8/v8/blob/3.26.33/src/runtime.cc#L8509)

### hydrogen_filter *{String}*

optimization filter

- **default:** ``
- **type:** `String`
- **readonly:** `false`


### use_range *{Boolean}*

use hydrogen range analysis

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### eliminate_dead_phis *{Boolean}*

eliminate dead phis

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### use_gvn *{Boolean}*

use hydrogen global value numbering

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### use_canonicalizing *{Boolean}*

use hydrogen instruction canonicalizing

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### use_inlining *{Boolean}*

use function inlining

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### max_inlined_source_size *{Integer}*

maximum source size in bytes considered for a single inlining

- **default:** `600`
- **type:** `Integer`
- **readonly:** `false`


### max_inlined_nodes *{Integer}*

maximum number of AST nodes considered for a single inlining

- **default:** `196`
- **type:** `Integer`
- **readonly:** `false`


### max_inlined_nodes_cumulative *{Integer}*

maximum cumulative number of AST nodes considered for inlining

- **default:** `196`
- **type:** `Integer`
- **readonly:** `false`


### loop_invariant_code_motion *{Boolean}*

loop invariant code motion

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### collect_megamorphic_maps_from_stub_cache *{Boolean}*

crankshaft harvests type feedback from stub cache

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### hydrogen_stats *{Boolean}*

print statistics for hydrogen

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_hydrogen *{Boolean}*

trace generated hydrogen to file

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_phase *{String}*

trace generated IR for specified phases

- **default:** `Z`
- **type:** `String`
- **readonly:** `false`


### trace_inlining *{Boolean}*

trace inlining decisions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_alloc *{Boolean}*

trace register allocator

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_all_uses *{Boolean}*

trace all use positions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_range *{Boolean}*

trace range analysis

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_gvn *{Boolean}*

trace global value numbering

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_representation *{Boolean}*

trace representation types

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### stress_pointer_maps *{Boolean}*

pointer map for every instruction

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### stress_environments *{Boolean}*

environment for every instruction

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### deopt_every_n_times *{Integer}*

deoptimize every n times a deopt point is passed

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### trap_on_deopt *{Boolean}*

put a break point before deoptimizing

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### deoptimize_uncommon_cases *{Boolean}*

deoptimize uncommon cases

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### polymorphic_inlining *{Boolean}*

polymorphic inlining

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### use_osr *{Boolean}*

use on-stack replacement

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### array_bounds_checks_elimination *{Boolean}*

perform array bounds checks elimination

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### array_index_dehoisting *{Boolean}*

perform array index dehoisting

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### dead_code_elimination *{Boolean}*

use dead code elimination

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`

#### Resources

[v8 hydrogen.cc](https://github.com/v8/v8/blob/3.26.33/src/hydrogen.cc#L3999)
[v8 hydrogin-dce.cc](https://github.com/v8/v8/blob/3.26.33/src/hydrogen-dce.cc)

**Note**: not available below **node:** `0.10` - **v8:** `3.14`

### trace_dead_code_elimination *{Boolean}*

trace dead code elimination

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_osr *{Boolean}*

trace on-stack replacement

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### stress_runs *{Integer}*

number of stress runs

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### optimize_closures *{Boolean}*

optimize closures

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### lookup_sample_by_shared *{Boolean}*

when picking a function to optimize, watch for shared function info, not JSFunction itself

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### cache_optimized_code *{Boolean}*

cache optimized code for closures

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### inline_construct *{Boolean}*

inline constructor calls

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### inline_arguments *{Boolean}*

inline functions with arguments object

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### inline_accessors *{Boolean}*

inline JavaScript accessors

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### loop_weight *{Integer}*

loop weight for representation inference

- **default:** `1`
- **type:** `Integer`
- **readonly:** `false`


### optimize_for_in *{Boolean}*

optimize functions containing for-in loops

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### opt_safe_uint32_operations *{Boolean}*

allow uint32 values on optimize frames if they are used only insafe operations

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### parallel_recompilation *{Boolean}*

optimizing hot functions asynchronously on a separate thread

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_parallel_recompilation *{Boolean}*

track parallel recompilation

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### parallel_recompilation_queue_length *{Integer}*

the length of the parallel compilation queue

- **default:** `2`
- **type:** `Integer`
- **readonly:** `false`


### experimental_profiler *{Boolean}*

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


### watch_ic_patching *{Boolean}*

profiler considers IC stability

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### frame_count *{Integer}*

number of stack frames inspected by the profiler

- **default:** `1`
- **type:** `Integer`
- **readonly:** `false`


### self_optimization *{Boolean}*

primitive functions trigger their own optimization

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### direct_self_opt *{Boolean}*

call recompile stub directly when self-optimizing

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### retry_self_opt *{Boolean}*

re-try self-optimization if it failed

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### count_based_interrupts *{Boolean}*

trigger profiler ticks based on counting instead of timing

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### interrupt_at_exit *{Boolean}*

insert an interrupt check at function exit

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### weighted_back_edges *{Boolean}*

weight back edges by jump distance for interrupt triggering

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### interrupt_budget *{Integer}*

execution budget before interrupt is triggered

- **default:** `5888`
- **type:** `Integer`
- **readonly:** `false`


### type_info_threshold *{Integer}*

percentage of ICs that must have type info to allow optimization

- **default:** `15`
- **type:** `Integer`
- **readonly:** `false`


### self_opt_count *{Integer}*

call count before self-optimization

- **default:** `130`
- **type:** `Integer`
- **readonly:** `false`


### trace_opt_verbose *{Boolean}*

extra verbose compilation tracing

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- trace_opt


### debug_code *{Boolean}*

generate extra code (assertions) for debugging

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### code_comments *{Boolean}*

emit comments in code disassembly

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Resources

- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/lithium-codegen.cc#L66-L73)
- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/heap.cc#L4528-L4536)

**Note**: not available below **node:** `0.11` - **v8:** `3.25`

### enable_sse2 *{Boolean}*

enable use of SSE2 instructions if available

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_sse3 *{Boolean}*

enable use of SSE3 instructions if available

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_sse4_1 *{Boolean}*

enable use of SSE4.1 instructions if available

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_cmov *{Boolean}*

enable use of CMOV instruction if available

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_rdtsc *{Boolean}*

enable use of RDTSC instruction if available

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_sahf *{Boolean}*

enable use of SAHF instruction if available (X64 only)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_vfp3 *{Boolean}*

enable use of VFP3 instructions if available - this implies enabling ARMv7 and VFP2 instructions (ARM only)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_vfp2 *{Boolean}*

enable use of VFP2 instructions if available

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_armv7 *{Boolean}*

enable use of ARMv7 instructions if available (ARM only)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_sudiv *{Boolean}*

enable use of SDIV and UDIV instructions if available (ARM only)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_movw_movt *{Boolean}*

enable loading 32-bit constant by means of movw/movt instruction pairs (ARM only)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### enable_unaligned_accesses *{Boolean}*

enable unaligned accesses for ARMv7 (ARM only)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_fpu *{Boolean}*

enable use of MIPS FPU instructions if available (MIPS only)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### expose_gc *{Boolean}*

expose gc extension


**NOTE:** This flag cannot be configured after the process started up!

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### expose_externalize_string *{Boolean}*

expose externalize string extension

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### stack_trace_limit *{Integer}*

number of stack frames to capture

- **default:** `10`
- **type:** `Integer`
- **readonly:** `false`


### builtins_in_stack_traces *{Boolean}*

show built-in functions in stack traces

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### disable_native_files *{Boolean}*

disable builtin natives files

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### inline_new *{Boolean}*

use fast inline allocation

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### stack_trace_on_abort *{Boolean}*

print a stack trace if an assertion failure occurs

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### trace *{Boolean}*

trace function calls

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### mask_constants_with_cookie *{Boolean}*

use random jit cookie to mask large constants

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### lazy *{Boolean}*

use lazy compilation

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### trace_opt *{Boolean}*

trace lazy optimization

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_opt_stats *{Boolean}*

trace lazy optimization statistics

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### opt *{Boolean}*

use adaptive optimizations

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### always_opt *{Boolean}*

always try to optimize functions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

**Note**: not properly working below **node:** `0.10` - **v8:** `3.14`

### prepare_always_opt *{Boolean}*

prepare for turning on always opt

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_deopt *{Boolean}*

trace deoptimization

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### min_preparse_length *{Integer}*

minimum length for automatic enable preparsing

- **default:** `1024`
- **type:** `Integer`
- **readonly:** `false`


### always_full_compiler *{Boolean}*

try to use the dedicated run-once backend for all code

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### max_opt_count *{Integer}*

maximum number of optimization attempts before giving up.

- **default:** `10`
- **type:** `Integer`
- **readonly:** `false`


### compilation_cache *{Boolean}*

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

### cache_prototype_transitions *{Boolean}*

cache prototype transitions

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`

#### Resources: 
  
- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/objects.cc#L12076)

### trace_debug_json *{Boolean}*

trace debugging JSON request/response

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### debugger_auto_break *{Boolean}*

automatically set the debug break flag when debugger commands are in the queue

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_liveedit *{Boolean}*

enable liveedit experimental feature

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### break_on_abort *{Boolean}*

always cause a debug break before aborting

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### stack_size *{Integer}*

default size of stack region v8 is allowed to use (in kBytes)

- **default:** `984`
- **type:** `Integer`
- **readonly:** `false`


### max_stack_trace_source_length *{Integer}*

maximum length of function source code printed in a stack trace.

- **default:** `300`
- **type:** `Integer`
- **readonly:** `false`


### always_inline_smi_code *{Boolean}*

always inline smi code in non-opt code

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### max_new_space_size *{Integer}*

max size of the new generation (in kBytes)

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### max_old_space_size *{Integer}*

max size of the old generation (in Mbytes)

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### max_executable_size *{Integer}*

max size of executable memory (in Mbytes)

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### gc_global *{Boolean}*

always perform global GCs

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### gc_interval *{Integer}*

garbage collect after <n> allocations

- **default:** `-1`
- **type:** `Integer`
- **readonly:** `false`


### trace_gc *{Boolean}*

print one trace line following each garbage collection

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_gc_nvp *{Boolean}*

print one detailed trace line in name=value format after each garbage collection

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_gc_ignore_scavenger *{Boolean}*

do not print trace line after scavenger collection

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### print_cumulative_gc_stat *{Boolean}*

print cumulative GC statistics in name=value format on exit

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_gc_verbose *{Boolean}*

print more details following each garbage collection

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_fragmentation *{Boolean}*

report fragmentation for old pointer and data pages

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_external_memory *{Boolean}*

print amount of external allocated memory after each time it is adjusted.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### collect_maps *{Boolean}*

garbage collect maps from which no objects can be reached

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### flush_code *{Boolean}*

flush code that we expect not to use again before full gc

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### incremental_marking *{Boolean}*

use incremental marking

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### incremental_marking_steps *{Boolean}*

do incremental marking steps

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### trace_incremental_marking *{Boolean}*

trace progress of the incremental marking

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### track_gc_object_stats *{Boolean}*

track object counts and memory usage

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### use_idle_notification *{Boolean}*

Use idle notification to reduce memory footprint.

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### use_ic *{Boolean}*

use inline caching

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### native_code_counters *{Boolean}*

generate extra code for manipulating stats counters

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### always_compact *{Boolean}*

Perform compaction on every full GC

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### lazy_sweeping *{Boolean}*

Use lazy sweeping for old pointer and data spaces

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### never_compact *{Boolean}*

Never perform compaction on full GC - testing only

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### compact_code_space *{Boolean}*

Compact code space on full non-incremental collections

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### incremental_code_compaction *{Boolean}*

Compact code space on full incremental collections

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### cleanup_code_caches_at_gc *{Boolean}*

Flush inline caches prior to mark compact collection and flush code caches in maps during mark compact cycle.

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### random_seed *{Integer}*

Default seed for initializing random generator (0, the default, means to use system random).

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### use_verbose_printer *{Boolean}*

allows verbose printing

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### allow_natives_syntax *{Boolean}*

allow natives syntax

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_parse *{Boolean}*

trace parsing and preparsing

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_sim *{Boolean}*

Trace simulator execution

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### check_icache *{Boolean}*

Check icache flushes in ARM and MIPS simulator

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### stop_sim_at *{Integer}*

Simulator stop after x number of instructions

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### sim_stack_alignment *{Integer}*

Stack alingment in bytes in simulator (4 or 8, 8 is default)

- **default:** `8`
- **type:** `Integer`
- **readonly:** `false`


### abort_on_uncaught_exception *{Boolean}*

abort program (dump core) when an uncaught exception is thrown

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_exception *{Boolean}*

print stack trace when throwing exceptions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### preallocate_message_memory *{Boolean}*

preallocate some memory to build stack traces.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### randomize_hashes *{Boolean}*

randomize hashes to avoid predictable hash collisions (with snapshots this option cannot override the baked-in seed)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### hash_seed *{Integer}*

Fixed seed to use to hash property keys (0 means random)(with snapshots this option cannot override the baked-in seed)

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### preemption *{Boolean}*

activate a 100ms timer that switches between V8 threads

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### regexp_optimization *{Boolean}*

generate optimized regexp code

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### testing_string_flag *{String}*

string-flag

- **default:** `Hello, world!`
- **type:** `String`
- **readonly:** `false`


### testing_serialization_file *{String}*

file in which to serialize heap

- **default:** `/tmp/serdes`
- **type:** `String`
- **readonly:** `false`


### help *{Boolean}*

Print usage message, including flags, on console

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### dump_counters *{Boolean}*

Dump counters on exit

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### map_counters *{String}*

Map counters to a file

- **default:** ``
- **type:** `String`
- **readonly:** `false`


### debug_compile_events *{Boolean}*

Enable debugger compile events

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`

#### Resources

[v8 debug.h](https://github.com/v8/v8/blob/3.26.33/src/debug.h#L843-L845)

**Note:** disabled by default on `WebOS`

### debug_script_collected_events *{Boolean}*

Enable debugger script collected events

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### gdbjit *{Boolean}*

enable GDBJIT interface (disables compacting GC)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### gdbjit_full *{Boolean}*

enable GDBJIT interface for all code objects

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### gdbjit_dump *{Boolean}*

dump elf objects with debug info to disk

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### gdbjit_dump_filter *{String}*

dump only objects containing this substring

- **default:** ``
- **type:** `String`
- **readonly:** `false`


### force_marking_deque_overflows *{Boolean}*

force overflows of marking deque by reducing it's size to 64 words

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### stress_compaction *{Boolean}*

stress the GC compactor to flush out bugs (implies --force_marking_deque_overflows)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### enable_slow_asserts *{Boolean}*

enable asserts that are slow to execute

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_codegen *{Boolean}*

print name of functions for which code is generated

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_source *{Boolean}*

pretty print source code

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_builtin_source *{Boolean}*

pretty print source code for builtins

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_ast *{Boolean}*

print source AST

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_builtin_ast *{Boolean}*

print source AST for builtins

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### stop_at *{String}*

function name where to insert a breakpoint

- **default:** ``
- **type:** `String`
- **readonly:** `true`


### print_builtin_scopes *{Boolean}*

print scopes for builtins

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_scopes *{Boolean}*

print scopes

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_contexts *{Boolean}*

trace contexts operations

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### gc_greedy *{Boolean}*

perform GC prior to some allocations

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### gc_verbose *{Boolean}*

print stuff during garbage collection

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### heap_stats *{Boolean}*

report heap statistics before and after GC

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### code_stats *{Boolean}*

report code statistics after GC

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`

#### Resources

- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/heap.cc#L582)
- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/heap.cc#L4528-L4536)

### verify_native_context_separation *{Boolean}*

verify that code holds on to at most one native context after GC

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_handles *{Boolean}*

report handles after GC

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_global_handles *{Boolean}*

report global handles after GC

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_ic *{Boolean}*

trace inline cache state transitions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_interfaces *{Boolean}*

print interfaces

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_interface_details *{Boolean}*

print interface inference details

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_interface_depth *{Integer}*

depth for printing interfaces

- **default:** `5`
- **type:** `Integer`
- **readonly:** `true`


### trace_normalization *{Boolean}*

prints when objects are turned into dictionaries.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_lazy *{Boolean}*

trace lazy compilation

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### collect_heap_spill_statistics *{Boolean}*

report heap spill statistics along with heap_stats (requires heap_stats)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_isolates *{Boolean}*

trace isolate state changes

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### log_state_changes *{Boolean}*

Log state changes.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### regexp_possessive_quantifier *{Boolean}*

enable possessive quantifier syntax for testing

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_regexp_bytecodes *{Boolean}*

trace regexp bytecode execution

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_regexp_assembler *{Boolean}*

trace regexp macro assembler calls.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### log *{Boolean}*

Minimal logging (no API, code, GC, suspect, or handles samples).

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_all *{Boolean}*

Log all events to the log file.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_runtime *{Boolean}*

Activate runtime system %Log call.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_api *{Boolean}*

Log API events to the log file.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_code *{Boolean}*

Log code events to the log file without profiling.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_gc *{Boolean}*

Log heap samples on garbage collection for the hp2ps tool.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_handles *{Boolean}*

Log global handle events.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_snapshot_positions *{Boolean}*

log positions of (de)serialized objects in the snapshot.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_suspect *{Boolean}*

Log suspect operations.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### prof *{Boolean}*

Log statistical profiling information (implies --log-code).

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### prof_auto *{Boolean}*

Used with --prof, starts profiling automatically

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### prof_lazy *{Boolean}*

Used with --prof, only does sampling and logging when profiler is active (implies --noprof_auto).

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### prof_browser_mode *{Boolean}*

Used with --prof, turns on browser-compatible mode for profiling.

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### log_regexp *{Boolean}*

Log regular expression execution.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### sliding_state_window *{Boolean}*

Update sliding state window counters.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### logfile *{String}*

Specify the name of the log file.

- **default:** `v8.log`
- **type:** `String`
- **readonly:** `false`


### ll_prof *{Boolean}*

Enable low-level linux profiler.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### gc_fake_mmap *{String}*

Specify the name of the file for fake gc mmap used in ll_prof

- **default:** `/tmp/__v8_gc__`
- **type:** `String`
- **readonly:** `false`


### trace_elements_transitions *{Boolean}*

trace elements transitions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_code_stubs *{Boolean}*

print code stubs

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### test_secondary_stub_cache *{Boolean}*

test secondary stub cache by disabling the primary one

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### test_primary_stub_cache *{Boolean}*

test primary stub cache by disabling the secondary one

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_code *{Boolean}*

print generated code

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_opt_code *{Boolean}*

print optimized code

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_unopt_code *{Boolean}*

print unoptimized code before printing optimized code based on it

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_code_verbose *{Boolean}*

print more information for code

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### print_builtin_code *{Boolean}*

print generated code for builtins

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`

