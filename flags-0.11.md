<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [use_strict *{Boolean}*](#use_strict-boolean)
- [es_staging *{Boolean}*](#es_staging-boolean)
  - [Implications](#implications)
- [harmony_typeof *{Boolean}*](#harmony_typeof-boolean)
- [harmony_scoping *{Boolean}*](#harmony_scoping-boolean)
- [harmony_modules *{Boolean}*](#harmony_modules-boolean)
  - [Implications](#implications-1)
- [harmony_symbols *{Boolean}*](#harmony_symbols-boolean)
- [harmony_proxies *{Boolean}*](#harmony_proxies-boolean)
- [harmony_collections *{Boolean}*](#harmony_collections-boolean)
- [harmony_generators *{Boolean}*](#harmony_generators-boolean)
- [harmony_iteration *{Boolean}*](#harmony_iteration-boolean)
- [harmony_numeric_literals *{Boolean}*](#harmony_numeric_literals-boolean)
- [harmony_strings *{Boolean}*](#harmony_strings-boolean)
- [harmony_arrays *{Boolean}*](#harmony_arrays-boolean)
- [harmony_maths *{Boolean}*](#harmony_maths-boolean)
- [harmony *{Boolean}*](#harmony-boolean)
  - [Implications](#implications-2)
- [packed_arrays *{Boolean}*](#packed_arrays-boolean)
- [smi_only_arrays *{Boolean}*](#smi_only_arrays-boolean)
- [compiled_keyed_dictionary_loads *{Boolean}*](#compiled_keyed_dictionary_loads-boolean)
- [clever_optimizations *{Boolean}*](#clever_optimizations-boolean)
- [pretenuring *{Boolean}*](#pretenuring-boolean)
- [pretenuring_call_new *{Boolean}*](#pretenuring_call_new-boolean)
- [allocation_site_pretenuring *{Boolean}*](#allocation_site_pretenuring-boolean)
- [trace_pretenuring *{Boolean}*](#trace_pretenuring-boolean)
- [trace_pretenuring_statistics *{Boolean}*](#trace_pretenuring_statistics-boolean)
- [track_fields *{Boolean}*](#track_fields-boolean)
- [track_double_fields *{Boolean}*](#track_double_fields-boolean)
  - [Implications](#implications-3)
- [track_heap_object_fields *{Boolean}*](#track_heap_object_fields-boolean)
  - [Implications](#implications-4)
- [track_computed_fields *{Boolean}*](#track_computed_fields-boolean)
  - [Implications](#implications-5)
- [smi_binop *{Boolean}*](#smi_binop-boolean)
- [optimize_for_size *{Boolean}*](#optimize_for_size-boolean)
- [unbox_double_arrays *{Boolean}*](#unbox_double_arrays-boolean)
- [string_slices *{Boolean}*](#string_slices-boolean)
- [crankshaft *{Boolean}*](#crankshaft-boolean)
  - [Resources](#resources)
- [hydrogen_filter *{String}*](#hydrogen_filter-string)
- [use_gvn *{Boolean}*](#use_gvn-boolean)
- [gvn_iterations *{Integer}*](#gvn_iterations-integer)
- [use_canonicalizing *{Boolean}*](#use_canonicalizing-boolean)
- [use_inlining *{Boolean}*](#use_inlining-boolean)
- [use_escape_analysis *{Boolean}*](#use_escape_analysis-boolean)
- [use_allocation_folding *{Boolean}*](#use_allocation_folding-boolean)
- [use_local_allocation_folding *{Boolean}*](#use_local_allocation_folding-boolean)
- [use_write_barrier_elimination *{Boolean}*](#use_write_barrier_elimination-boolean)
- [max_inlining_levels *{Integer}*](#max_inlining_levels-integer)
- [max_inlined_source_size *{Integer}*](#max_inlined_source_size-integer)
- [max_inlined_nodes *{Integer}*](#max_inlined_nodes-integer)
- [max_inlined_nodes_cumulative *{Integer}*](#max_inlined_nodes_cumulative-integer)
- [loop_invariant_code_motion *{Boolean}*](#loop_invariant_code_motion-boolean)
- [fast_math *{Boolean}*](#fast_math-boolean)
- [collect_megamorphic_maps_from_stub_cache *{Boolean}*](#collect_megamorphic_maps_from_stub_cache-boolean)
- [hydrogen_stats *{Boolean}*](#hydrogen_stats-boolean)
- [trace_check_elimination *{Boolean}*](#trace_check_elimination-boolean)
- [trace_hydrogen *{Boolean}*](#trace_hydrogen-boolean)
- [trace_hydrogen_filter *{String}*](#trace_hydrogen_filter-string)
- [trace_hydrogen_stubs *{Boolean}*](#trace_hydrogen_stubs-boolean)
- [trace_phase *{String}*](#trace_phase-string)
- [trace_inlining *{Boolean}*](#trace_inlining-boolean)
- [trace_load_elimination *{Boolean}*](#trace_load_elimination-boolean)
- [trace_store_elimination *{Boolean}*](#trace_store_elimination-boolean)
- [trace_alloc *{Boolean}*](#trace_alloc-boolean)
- [trace_all_uses *{Boolean}*](#trace_all_uses-boolean)
- [trace_range *{Boolean}*](#trace_range-boolean)
- [trace_gvn *{Boolean}*](#trace_gvn-boolean)
- [trace_representation *{Boolean}*](#trace_representation-boolean)
- [trace_escape_analysis *{Boolean}*](#trace_escape_analysis-boolean)
- [trace_allocation_folding *{Boolean}*](#trace_allocation_folding-boolean)
- [trace_track_allocation_sites *{Boolean}*](#trace_track_allocation_sites-boolean)
- [trace_migration *{Boolean}*](#trace_migration-boolean)
- [trace_generalization *{Boolean}*](#trace_generalization-boolean)
- [stress_pointer_maps *{Boolean}*](#stress_pointer_maps-boolean)
- [stress_environments *{Boolean}*](#stress_environments-boolean)
- [deopt_every_n_times *{Integer}*](#deopt_every_n_times-integer)
- [deopt_every_n_garbage_collections *{Integer}*](#deopt_every_n_garbage_collections-integer)
- [print_deopt_stress *{Boolean}*](#print_deopt_stress-boolean)
- [trap_on_deopt *{Boolean}*](#trap_on_deopt-boolean)
- [trap_on_stub_deopt *{Boolean}*](#trap_on_stub_deopt-boolean)
- [deoptimize_uncommon_cases *{Boolean}*](#deoptimize_uncommon_cases-boolean)
- [polymorphic_inlining *{Boolean}*](#polymorphic_inlining-boolean)
- [use_osr *{Boolean}*](#use_osr-boolean)
- [array_bounds_checks_elimination *{Boolean}*](#array_bounds_checks_elimination-boolean)
- [trace_bce *{Boolean}*](#trace_bce-boolean)
- [array_bounds_checks_hoisting *{Boolean}*](#array_bounds_checks_hoisting-boolean)
- [array_index_dehoisting *{Boolean}*](#array_index_dehoisting-boolean)
- [analyze_environment_liveness *{Boolean}*](#analyze_environment_liveness-boolean)
- [load_elimination *{Boolean}*](#load_elimination-boolean)
- [check_elimination *{Boolean}*](#check_elimination-boolean)
  - [Resources](#resources-1)
- [store_elimination *{Boolean}*](#store_elimination-boolean)
- [dead_code_elimination *{Boolean}*](#dead_code_elimination-boolean)
  - [Resources](#resources-2)
- [fold_constants *{Boolean}*](#fold_constants-boolean)
- [trace_dead_code_elimination *{Boolean}*](#trace_dead_code_elimination-boolean)
- [unreachable_code_elimination *{Boolean}*](#unreachable_code_elimination-boolean)
- [trace_osr *{Boolean}*](#trace_osr-boolean)
- [stress_runs *{Integer}*](#stress_runs-integer)
- [optimize_closures *{Boolean}*](#optimize_closures-boolean)
- [lookup_sample_by_shared *{Boolean}*](#lookup_sample_by_shared-boolean)
- [cache_optimized_code *{Boolean}*](#cache_optimized_code-boolean)
- [flush_optimized_code_cache *{Boolean}*](#flush_optimized_code_cache-boolean)
- [inline_construct *{Boolean}*](#inline_construct-boolean)
- [inline_arguments *{Boolean}*](#inline_arguments-boolean)
- [inline_accessors *{Boolean}*](#inline_accessors-boolean)
- [escape_analysis_iterations *{Integer}*](#escape_analysis_iterations-integer)
- [optimize_for_in *{Boolean}*](#optimize_for_in-boolean)
- [opt_safe_uint32_operations *{Boolean}*](#opt_safe_uint32_operations-boolean)
- [concurrent_recompilation *{Boolean}*](#concurrent_recompilation-boolean)
- [trace_concurrent_recompilation *{Boolean}*](#trace_concurrent_recompilation-boolean)
- [concurrent_recompilation_queue_length *{Integer}*](#concurrent_recompilation_queue_length-integer)
- [concurrent_recompilation_delay *{Integer}*](#concurrent_recompilation_delay-integer)
- [block_concurrent_recompilation *{Boolean}*](#block_concurrent_recompilation-boolean)
- [concurrent_osr *{Boolean}*](#concurrent_osr-boolean)
  - [Implications](#implications-6)
- [omit_map_checks_for_leaf_maps *{Boolean}*](#omit_map_checks_for_leaf_maps-boolean)
- [typed_array_max_size_in_heap *{Integer}*](#typed_array_max_size_in_heap-integer)
- [frame_count *{Integer}*](#frame_count-integer)
- [interrupt_budget *{Integer}*](#interrupt_budget-integer)
- [type_info_threshold *{Integer}*](#type_info_threshold-integer)
- [self_opt_count *{Integer}*](#self_opt_count-integer)
- [trace_opt_verbose *{Boolean}*](#trace_opt_verbose-boolean)
  - [Implications](#implications-7)
- [debug_code *{Boolean}*](#debug_code-boolean)
- [code_comments *{Boolean}*](#code_comments-boolean)
  - [Resources](#resources-3)
- [enable_sse2 *{Boolean}*](#enable_sse2-boolean)
- [enable_sse3 *{Boolean}*](#enable_sse3-boolean)
- [enable_sse4_1 *{Boolean}*](#enable_sse4_1-boolean)
- [enable_cmov *{Boolean}*](#enable_cmov-boolean)
- [enable_sahf *{Boolean}*](#enable_sahf-boolean)
- [enable_vfp3 *{Boolean}*](#enable_vfp3-boolean)
- [enable_armv7 *{Boolean}*](#enable_armv7-boolean)
- [enable_neon *{Boolean}*](#enable_neon-boolean)
- [enable_sudiv *{Boolean}*](#enable_sudiv-boolean)
- [enable_movw_movt *{Boolean}*](#enable_movw_movt-boolean)
- [enable_unaligned_accesses *{Boolean}*](#enable_unaligned_accesses-boolean)
- [enable_32dregs *{Boolean}*](#enable_32dregs-boolean)
- [enable_vldr_imm *{Boolean}*](#enable_vldr_imm-boolean)
- [force_long_branches *{Boolean}*](#force_long_branches-boolean)
- [expose_free_buffer *{Boolean}*](#expose_free_buffer-boolean)
- [expose_gc *{Boolean}*](#expose_gc-boolean)
- [expose_externalize_string *{Boolean}*](#expose_externalize_string-boolean)
- [expose_trigger_failure *{Boolean}*](#expose_trigger_failure-boolean)
- [stack_trace_limit *{Integer}*](#stack_trace_limit-integer)
- [builtins_in_stack_traces *{Boolean}*](#builtins_in_stack_traces-boolean)
- [disable_native_files *{Boolean}*](#disable_native_files-boolean)
- [inline_new *{Boolean}*](#inline_new-boolean)
- [trace_codegen *{Boolean}*](#trace_codegen-boolean)
- [trace *{Boolean}*](#trace-boolean)
- [mask_constants_with_cookie *{Boolean}*](#mask_constants_with_cookie-boolean)
- [lazy *{Boolean}*](#lazy-boolean)
- [trace_opt *{Boolean}*](#trace_opt-boolean)
- [trace_opt_stats *{Boolean}*](#trace_opt_stats-boolean)
- [opt *{Boolean}*](#opt-boolean)
- [always_opt *{Boolean}*](#always_opt-boolean)
- [always_osr *{Boolean}*](#always_osr-boolean)
  - [Resources:](#resources)
- [prepare_always_opt *{Boolean}*](#prepare_always_opt-boolean)
- [trace_deopt *{Boolean}*](#trace_deopt-boolean)
- [trace_stub_failures *{Boolean}*](#trace_stub_failures-boolean)
- [min_preparse_length *{Integer}*](#min_preparse_length-integer)
- [always_full_compiler *{Boolean}*](#always_full_compiler-boolean)
- [max_opt_count *{Integer}*](#max_opt_count-integer)
- [compilation_cache *{Boolean}*](#compilation_cache-boolean)
  - [Resources](#resources-4)
- [cache_prototype_transitions *{Boolean}*](#cache_prototype_transitions-boolean)
  - [Resources:](#resources-1)
- [cpu_profiler_sampling_interval *{Integer}*](#cpu_profiler_sampling_interval-integer)
- [trace_debug_json *{Boolean}*](#trace_debug_json-boolean)
- [trace_js_array_abuse *{Boolean}*](#trace_js_array_abuse-boolean)
- [trace_external_array_abuse *{Boolean}*](#trace_external_array_abuse-boolean)
- [trace_array_abuse *{Boolean}*](#trace_array_abuse-boolean)
  - [Implications](#implications-8)
- [debugger_auto_break *{Boolean}*](#debugger_auto_break-boolean)
- [enable_liveedit *{Boolean}*](#enable_liveedit-boolean)
- [hard_abort *{Boolean}*](#hard_abort-boolean)
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
- [print_max_heap_committed *{Boolean}*](#print_max_heap_committed-boolean)
- [trace_gc_verbose *{Boolean}*](#trace_gc_verbose-boolean)
- [trace_fragmentation *{Boolean}*](#trace_fragmentation-boolean)
- [trace_external_memory *{Boolean}*](#trace_external_memory-boolean)
- [collect_maps *{Boolean}*](#collect_maps-boolean)
- [weak_embedded_maps_in_optimized_code *{Boolean}*](#weak_embedded_maps_in_optimized_code-boolean)
- [weak_embedded_objects_in_optimized_code *{Boolean}*](#weak_embedded_objects_in_optimized_code-boolean)
- [flush_code *{Boolean}*](#flush_code-boolean)
- [flush_code_incrementally *{Boolean}*](#flush_code_incrementally-boolean)
- [trace_code_flushing *{Boolean}*](#trace_code_flushing-boolean)
- [age_code *{Boolean}*](#age_code-boolean)
- [incremental_marking *{Boolean}*](#incremental_marking-boolean)
- [incremental_marking_steps *{Boolean}*](#incremental_marking_steps-boolean)
- [trace_incremental_marking *{Boolean}*](#trace_incremental_marking-boolean)
- [track_gc_object_stats *{Boolean}*](#track_gc_object_stats-boolean)
- [parallel_sweeping *{Boolean}*](#parallel_sweeping-boolean)
- [concurrent_sweeping *{Boolean}*](#concurrent_sweeping-boolean)
  - [Resources](#resources-5)
- [sweeper_threads *{Integer}*](#sweeper_threads-integer)
- [job_based_sweeping *{Boolean}*](#job_based_sweeping-boolean)
- [heap_profiler_trace_objects *{Boolean}*](#heap_profiler_trace_objects-boolean)
- [use_idle_notification *{Boolean}*](#use_idle_notification-boolean)
- [use_ic *{Boolean}*](#use_ic-boolean)
- [native_code_counters *{Boolean}*](#native_code_counters-boolean)
- [always_compact *{Boolean}*](#always_compact-boolean)
- [lazy_sweeping *{Boolean}*](#lazy_sweeping-boolean)
- [never_compact *{Boolean}*](#never_compact-boolean)
- [compact_code_space *{Boolean}*](#compact_code_space-boolean)
- [incremental_code_compaction *{Boolean}*](#incremental_code_compaction-boolean)
- [cleanup_code_caches_at_gc *{Boolean}*](#cleanup_code_caches_at_gc-boolean)
- [use_marking_progress_bar *{Boolean}*](#use_marking_progress_bar-boolean)
- [zap_code_space *{Boolean}*](#zap_code_space-boolean)
- [random_seed *{Integer}*](#random_seed-integer)
- [use_verbose_printer *{Boolean}*](#use_verbose_printer-boolean)
- [allow_natives_syntax *{Boolean}*](#allow_natives_syntax-boolean)
- [trace_parse *{Boolean}*](#trace_parse-boolean)
- [trace_sim *{Boolean}*](#trace_sim-boolean)
- [debug_sim *{Boolean}*](#debug_sim-boolean)
  - [Resources](#resources-6)
- [check_icache *{Boolean}*](#check_icache-boolean)
- [stop_sim_at *{Integer}*](#stop_sim_at-integer)
- [sim_stack_alignment *{Integer}*](#sim_stack_alignment-integer)
- [sim_stack_size *{Integer}*](#sim_stack_size-integer)
- [log_regs_modified *{Boolean}*](#log_regs_modified-boolean)
- [log_colour *{Boolean}*](#log_colour-boolean)
- [ignore_asm_unimplemented_break *{Boolean}*](#ignore_asm_unimplemented_break-boolean)
- [trace_sim_messages *{Boolean}*](#trace_sim_messages-boolean)
- [stack_trace_on_illegal *{Boolean}*](#stack_trace_on_illegal-boolean)
- [abort_on_uncaught_exception *{Boolean}*](#abort_on_uncaught_exception-boolean)
- [randomize_hashes *{Boolean}*](#randomize_hashes-boolean)
- [hash_seed *{Integer}*](#hash_seed-integer)
- [profile_deserialization *{Boolean}*](#profile_deserialization-boolean)
- [regexp_optimization *{Boolean}*](#regexp_optimization-boolean)
- [testing_serialization_file *{String}*](#testing_serialization_file-string)
- [profile_hydrogen_code_stub_compilation *{Boolean}*](#profile_hydrogen_code_stub_compilation-boolean)
- [predictable *{Boolean}*](#predictable-boolean)
  - [Negative implications](#negative-implications)
- [help *{Boolean}*](#help-boolean)
- [dump_counters *{Boolean}*](#dump_counters-boolean)
- [map_counters *{String}*](#map_counters-string)
- [debug_compile_events *{Boolean}*](#debug_compile_events-boolean)
  - [Resources](#resources-7)
- [debug_script_collected_events *{Boolean}*](#debug_script_collected_events-boolean)
- [gdbjit *{Boolean}*](#gdbjit-boolean)
- [gdbjit_full *{Boolean}*](#gdbjit_full-boolean)
- [gdbjit_dump *{Boolean}*](#gdbjit_dump-boolean)
- [gdbjit_dump_filter *{String}*](#gdbjit_dump_filter-string)
- [force_marking_deque_overflows *{Boolean}*](#force_marking_deque_overflows-boolean)
- [stress_compaction *{Boolean}*](#stress_compaction-boolean)
- [print_source *{Boolean}*](#print_source-boolean)
- [print_builtin_source *{Boolean}*](#print_builtin_source-boolean)
- [print_ast *{Boolean}*](#print_ast-boolean)
- [print_builtin_ast *{Boolean}*](#print_builtin_ast-boolean)
- [stop_at *{String}*](#stop_at-string)
- [trap_on_abort *{Boolean}*](#trap_on_abort-boolean)
- [print_builtin_scopes *{Boolean}*](#print_builtin_scopes-boolean)
- [print_scopes *{Boolean}*](#print_scopes-boolean)
- [trace_contexts *{Boolean}*](#trace_contexts-boolean)
- [gc_greedy *{Boolean}*](#gc_greedy-boolean)
- [gc_verbose *{Boolean}*](#gc_verbose-boolean)
- [heap_stats *{Boolean}*](#heap_stats-boolean)
- [code_stats *{Boolean}*](#code_stats-boolean)
  - [Resources](#resources-8)
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
- [prof_browser_mode *{Boolean}*](#prof_browser_mode-boolean)
- [log_regexp *{Boolean}*](#log_regexp-boolean)
- [logfile *{String}*](#logfile-string)
- [logfile_per_isolate *{Boolean}*](#logfile_per_isolate-boolean)
- [ll_prof *{Boolean}*](#ll_prof-boolean)
- [perf_basic_prof *{Boolean}*](#perf_basic_prof-boolean)
- [perf_jit_prof *{Boolean}*](#perf_jit_prof-boolean)
- [gc_fake_mmap *{String}*](#gc_fake_mmap-string)
- [log_internal_timer_events *{Boolean}*](#log_internal_timer_events-boolean)
  - [Implications](#implications-9)
- [log_timer_events *{Boolean}*](#log_timer_events-boolean)
  - [Implications](#implications-10)
- [log_instruction_stats *{Boolean}*](#log_instruction_stats-boolean)
- [log_instruction_file *{String}*](#log_instruction_file-string)
- [log_instruction_period *{Integer}*](#log_instruction_period-integer)
- [redirect_code_traces *{Boolean}*](#redirect_code_traces-boolean)
- [hydrogen_track_positions *{Boolean}*](#hydrogen_track_positions-boolean)
- [trace_elements_transitions *{Boolean}*](#trace_elements_transitions-boolean)
- [trace_creation_allocation_sites *{Boolean}*](#trace_creation_allocation_sites-boolean)
- [print_code_stubs *{Boolean}*](#print_code_stubs-boolean)
- [test_secondary_stub_cache *{Boolean}*](#test_secondary_stub_cache-boolean)
- [test_primary_stub_cache *{Boolean}*](#test_primary_stub_cache-boolean)
- [print_code *{Boolean}*](#print_code-boolean)
- [print_opt_code *{Boolean}*](#print_opt_code-boolean)
- [print_unopt_code *{Boolean}*](#print_unopt_code-boolean)
- [print_code_verbose *{Boolean}*](#print_code_verbose-boolean)
- [print_builtin_code *{Boolean}*](#print_builtin_code-boolean)
- [enable_ool_constant_pool *{Boolean}*](#enable_ool_constant_pool-boolean)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### use_strict *{Boolean}*

enforce strict mode

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### es_staging *{Boolean}*

enable upcoming ES6+ features

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- harmony_maths


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


### harmony_symbols *{Boolean}*

enable harmony symbols (a.k.a. private names)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### harmony_proxies *{Boolean}*

enable harmony proxies

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### harmony_collections *{Boolean}*

enable harmony collections (sets, maps)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### harmony_generators *{Boolean}*

enable harmony generators

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### harmony_iteration *{Boolean}*

enable harmony iteration (for-of)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### harmony_numeric_literals *{Boolean}*

enable harmony numeric literals (0o77, 0b11)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### harmony_strings *{Boolean}*

enable harmony string

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### harmony_arrays *{Boolean}*

enable harmony arrays

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### harmony_maths *{Boolean}*

enable harmony math functions

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
- harmony_symbols
- harmony_proxies
- harmony_collections
- harmony_generators
- harmony_iteration
- harmony_numeric_literals
- harmony_strings
- harmony_arrays
- es_staging


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


### compiled_keyed_dictionary_loads *{Boolean}*

use optimizing compiler to generate keyed dictionary load stubs

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### clever_optimizations *{Boolean}*

Optimize object size, Array shift, DOM strings and string +

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### pretenuring *{Boolean}*

allocate objects in old space

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### pretenuring_call_new *{Boolean}*

pretenure call new

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### allocation_site_pretenuring *{Boolean}*

pretenure with allocation sites

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### trace_pretenuring *{Boolean}*

trace pretenuring decisions of HAllocate instructions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_pretenuring_statistics *{Boolean}*

trace allocation site pretenuring statistics

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### track_fields *{Boolean}*

track fields with only smi values

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### track_double_fields *{Boolean}*

track fields with double values

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- track_fields


### track_heap_object_fields *{Boolean}*

track fields with heap values

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- track_fields


### track_computed_fields *{Boolean}*

track computed boilerplate fields

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- track_fields


### smi_binop *{Boolean}*

support smi representation in binary operations

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### optimize_for_size *{Boolean}*

Enables optimizations which favor memory size over execution speed.

- **default:** `false`
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

- **default:** `*`
- **type:** `String`
- **readonly:** `false`


### use_gvn *{Boolean}*

use hydrogen global value numbering

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### gvn_iterations *{Integer}*

maximum number of GVN fix-point iterations

- **default:** `3`
- **type:** `Integer`
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


### use_escape_analysis *{Boolean}*

use hydrogen escape analysis

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### use_allocation_folding *{Boolean}*

use allocation folding

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### use_local_allocation_folding *{Boolean}*

only fold in basic blocks

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### use_write_barrier_elimination *{Boolean}*

eliminate write barriers targeting allocations in optimized code

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### max_inlining_levels *{Integer}*

maximum number of inlining levels

- **default:** `5`
- **type:** `Integer`
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

- **default:** `400`
- **type:** `Integer`
- **readonly:** `false`


### loop_invariant_code_motion *{Boolean}*

loop invariant code motion

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### fast_math *{Boolean}*

faster (but maybe less accurate) math functions

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


### trace_check_elimination *{Boolean}*

trace check elimination phase

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_hydrogen *{Boolean}*

trace generated hydrogen to file

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_hydrogen_filter *{String}*

hydrogen tracing filter

- **default:** `*`
- **type:** `String`
- **readonly:** `false`


### trace_hydrogen_stubs *{Boolean}*

trace generated hydrogen for stubs

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_phase *{String}*

trace generated IR for specified phases

- **default:** `HLZ`
- **type:** `String`
- **readonly:** `false`


### trace_inlining *{Boolean}*

trace inlining decisions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_load_elimination *{Boolean}*

trace load elimination

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_store_elimination *{Boolean}*

trace store elimination

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


### trace_escape_analysis *{Boolean}*

trace hydrogen escape analysis

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_allocation_folding *{Boolean}*

trace allocation folding

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_track_allocation_sites *{Boolean}*

trace the tracking of allocation sites

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_migration *{Boolean}*

trace object migration

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_generalization *{Boolean}*

trace map generalization

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


### deopt_every_n_garbage_collections *{Integer}*

deoptimize every n garbage collections

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### print_deopt_stress *{Boolean}*

print number of possible deopt points

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trap_on_deopt *{Boolean}*

put a break point before deoptimizing

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trap_on_stub_deopt *{Boolean}*

put a break point before deoptimizing a stub

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


### trace_bce *{Boolean}*

trace array bounds check elimination

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### array_bounds_checks_hoisting *{Boolean}*

perform array bounds checks hoisting

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### array_index_dehoisting *{Boolean}*

perform array index dehoisting

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### analyze_environment_liveness *{Boolean}*

analyze liveness of environment slots and zap dead values

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### load_elimination *{Boolean}*

use load elimination

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### check_elimination *{Boolean}*

use check elimination

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`

#### Resources

- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/hydrogen.cc#L4029)

### store_elimination *{Boolean}*

use store elimination

- **default:** `false`
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

### fold_constants *{Boolean}*

use constant folding

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### trace_dead_code_elimination *{Boolean}*

trace dead code elimination

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### unreachable_code_elimination *{Boolean}*

eliminate unreachable code

- **default:** `true`
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


### flush_optimized_code_cache *{Boolean}*

flushes the cache of optimized code for closures on every GC

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


### escape_analysis_iterations *{Integer}*

maximum number of escape analysis fix-point iterations

- **default:** `2`
- **type:** `Integer`
- **readonly:** `false`


### optimize_for_in *{Boolean}*

optimize functions containing for-in loops

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### opt_safe_uint32_operations *{Boolean}*

allow uint32 values on optimize frames if they are used only in safe operations

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### concurrent_recompilation *{Boolean}*

optimizing hot functions asynchronously on a separate thread

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### trace_concurrent_recompilation *{Boolean}*

track concurrent recompilation

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### concurrent_recompilation_queue_length *{Integer}*

the length of the concurrent compilation queue

- **default:** `8`
- **type:** `Integer`
- **readonly:** `false`


### concurrent_recompilation_delay *{Integer}*

artificial compilation delay in ms

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### block_concurrent_recompilation *{Boolean}*

block queued jobs until released

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### concurrent_osr *{Boolean}*

concurrent on-stack replacement

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- concurrent_recompilation


### omit_map_checks_for_leaf_maps *{Boolean}*

do not emit check maps for constant values that have a leaf map, deoptimize the optimized code if the layout of the maps changes.

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### typed_array_max_size_in_heap *{Integer}*

threshold for in-heap typed array

- **default:** `64`
- **type:** `Integer`
- **readonly:** `false`


### frame_count *{Integer}*

number of stack frames inspected by the profiler

- **default:** `1`
- **type:** `Integer`
- **readonly:** `false`


### interrupt_budget *{Integer}*

execution budget before interrupt is triggered

- **default:** `6144`
- **type:** `Integer`
- **readonly:** `false`


### type_info_threshold *{Integer}*

percentage of ICs that must have type info to allow optimization

- **default:** `25`
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


### enable_sahf *{Boolean}*

enable use of SAHF instruction if available (X64 only)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_vfp3 *{Boolean}*

enable use of VFP3 instructions if available

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_armv7 *{Boolean}*

enable use of ARMv7 instructions if available (ARM only)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_neon *{Boolean}*

enable use of NEON instructions if available (ARM only)

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


### enable_32dregs *{Boolean}*

enable use of d16-d31 registers on ARM - this requires VFP3

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### enable_vldr_imm *{Boolean}*

enable use of constant pools for double immediate (ARM only)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### force_long_branches *{Boolean}*

force all emitted branches to be in long mode (MIPS only)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### expose_free_buffer *{Boolean}*

expose freeBuffer extension

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### expose_gc *{Boolean}*

expose gc extension

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### expose_externalize_string *{Boolean}*

expose externalize string extension

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### expose_trigger_failure *{Boolean}*

expose trigger-failure extension

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


### trace_codegen *{Boolean}*

print name of functions for which code is generated

- **default:** `false`
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

### always_osr *{Boolean}*

always try to OSR functions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

OSR (*On Stack Replacement*) is used to convert a running function’s interpreter frame into a JIT’d frame – in the middle of that method.

#### Resources: 
  
- [Efficient and General On-Stack Replacement for Aggressive Program Specialization](http://www.cs.ucsb.edu/~ckrintz/papers/osr.pdf)
- [What the heck is OSR](http://www.azulsystems.com/blog/cliff/2011-11-22-what-the-heck-is-osr-and-why-is-it-bad-or-good)
- [v8 source](https://github.com/v8/v8/blob/3.26.33/src/runtime-profiler.cc#L178-L185)


**Note**: available starting with **node:** `0.10` - **v8:** `3.14`

### prepare_always_opt *{Boolean}*

prepare for turning on always opt

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_deopt *{Boolean}*

trace optimize function deoptimization

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_stub_failures *{Boolean}*

trace deoptimization of generated code stubs

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

### cpu_profiler_sampling_interval *{Integer}*

CPU profiler sampling interval in microseconds

- **default:** `1000`
- **type:** `Integer`
- **readonly:** `false`


### trace_debug_json *{Boolean}*

trace debugging JSON request/response

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_js_array_abuse *{Boolean}*

trace out-of-bounds accesses to JS arrays

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_external_array_abuse *{Boolean}*

trace out-of-bounds-accesses to external arrays

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_array_abuse *{Boolean}*

trace out-of-bounds accesses to all arrays

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- trace_js_array_abuse
- trace_external_array_abuse


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


### hard_abort *{Boolean}*

abort by crashing

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


### print_max_heap_committed *{Boolean}*

print statistics of the maximum memory committed for the heap in name=value format on exit

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


### weak_embedded_maps_in_optimized_code *{Boolean}*

make maps embedded in optimized code weak

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### weak_embedded_objects_in_optimized_code *{Boolean}*

make objects embedded in optimized code weak

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### flush_code *{Boolean}*

flush code that we expect not to use again (during full gc)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### flush_code_incrementally *{Boolean}*

flush code that we expect not to use again (incrementally)

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### trace_code_flushing *{Boolean}*

trace code flushing progress

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### age_code *{Boolean}*

track un-executed functions to age code and flush only old code (required for code flushing)

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


### parallel_sweeping *{Boolean}*

enable parallel sweeping

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### concurrent_sweeping *{Boolean}*

enable concurrent sweeping

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Resources

- [v8 mark-compact.cc](https://github.com/v8/v8/blob/3.26.33/src/mark-compact.cc#L210-L211)
- [v8 mark-compact.cc](https://github.com/v8/v8/blob/3.26.33/src/mark-compact.cc#L4253)
- [v8 sweeper-thread.cc](https://github.com/v8/v8/blob/3.26.33/src/sweeper-thread.cc#L79-L81)

**Note**: not available below **node:** `0.11` - **v8:** `3.25`

### sweeper_threads *{Integer}*

number of parallel and concurrent sweeping threads

- **default:** `0`
- **type:** `Integer`
- **readonly:** `false`


### job_based_sweeping *{Boolean}*

enable job based sweeping

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### heap_profiler_trace_objects *{Boolean}*

Dump heap object allocations/movements/size_updates

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


### use_marking_progress_bar *{Boolean}*

Use a progress bar to scan large objects in increments when incremental marking is active.

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### zap_code_space *{Boolean}*

Zap free memory in code space with 0xCC while sweeping.

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


### debug_sim *{Boolean}*

Enable debugging the simulator

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

At this point this is only used inside the arm64 simulator.

#### Resources

[v8 arm64/simulator-arm64.cc](https://github.com/v8/v8/blob/3.26.33/src/arm64/simulator-arm64.cc#L113-L114)

**Note**: not available below **node:** `0.11` - **v8:** `3.25`

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


### sim_stack_size *{Integer}*

Stack size of the ARM64 simulator in kBytes (default is 2 MB)

- **default:** `2048`
- **type:** `Integer`
- **readonly:** `false`


### log_regs_modified *{Boolean}*

When logging register values, only print modified registers.

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### log_colour *{Boolean}*

When logging, try to use coloured output.

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### ignore_asm_unimplemented_break *{Boolean}*

Don't break for ASM_UNIMPLEMENTED_BREAK macros.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_sim_messages *{Boolean}*

Trace simulator debug messages. Implied by --trace-sim.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### stack_trace_on_illegal *{Boolean}*

print stack trace when an illegal exception is thrown

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### abort_on_uncaught_exception *{Boolean}*

abort program (dump core) when an uncaught exception is thrown

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


### profile_deserialization *{Boolean}*

Print the time it takes to deserialize the snapshot.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### regexp_optimization *{Boolean}*

generate optimized regexp code

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### testing_serialization_file *{String}*

file in which to serialize heap

- **default:** `/tmp/serdes`
- **type:** `String`
- **readonly:** `false`


### profile_hydrogen_code_stub_compilation *{Boolean}*

Print the time it takes to lazily compile hydrogen code stubs.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### predictable *{Boolean}*

enable predictable mode

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Negative implications

- concurrent_recompilation
- concurrent_osr
- concurrent_sweeping
- parallel_sweeping


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


### trap_on_abort *{Boolean}*

replace aborts by breakpoints

- **default:** `false`
- **type:** `Boolean`
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


### logfile *{String}*

Specify the name of the log file.

- **default:** `v8.log`
- **type:** `String`
- **readonly:** `false`


### logfile_per_isolate *{Boolean}*

Separate log files for each isolate.

- **default:** `true`
- **type:** `Boolean`
- **readonly:** `false`


### ll_prof *{Boolean}*

Enable low-level linux profiler.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### perf_basic_prof *{Boolean}*

Enable perf linux profiler (basic support).

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### perf_jit_prof *{Boolean}*

Enable perf linux profiler (experimental annotate support).

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### gc_fake_mmap *{String}*

Specify the name of the file for fake gc mmap used in ll_prof

- **default:** `/tmp/__v8_gc__`
- **type:** `String`
- **readonly:** `false`


### log_internal_timer_events *{Boolean}*

Time internal events.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- prof


### log_timer_events *{Boolean}*

Time events including external callbacks.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`

#### Implications

- log_internal_timer_events


### log_instruction_stats *{Boolean}*

Log AArch64 instruction statistics.

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### log_instruction_file *{String}*

AArch64 instruction statistics log file.

- **default:** `arm64_inst.csv`
- **type:** `String`
- **readonly:** `false`


### log_instruction_period *{Integer}*

AArch64 instruction statistics logging period.

- **default:** `4194304`
- **type:** `Integer`
- **readonly:** `false`


### redirect_code_traces *{Boolean}*

output deopt information and disassembly into file code-<pid>-<isolate id>.asm

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### hydrogen_track_positions *{Boolean}*

track source code positions when building IR

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `false`


### trace_elements_transitions *{Boolean}*

trace elements transitions

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`


### trace_creation_allocation_sites *{Boolean}*

trace the creation of allocation sites

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


### enable_ool_constant_pool *{Boolean}*

enable use of out-of-line constant pools (ARM only)

- **default:** `false`
- **type:** `Boolean`
- **readonly:** `true`

