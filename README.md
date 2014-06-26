# v8-flags [![build status](https://secure.travis-ci.org/thlorenz/v8-flags.png)](http://travis-ci.org/thlorenz/v8-flags)

Configures v8 flags at runtime.

```js
// TODO
```

## Status

**Mad Science!**

## Installation

    npm install v8-flags

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [API](#api)
    - [allow_natives_syntax(allow_natives_syntax) → {bool}](#allow_natives_syntaxallow_natives_syntax--bool)
    - [always_compact(always_compact) → {bool}](#always_compactalways_compact--bool)
    - [always_opt(always_opt) → {bool}](#always_optalways_opt--bool)
    - [always_osr(always_osr) → {bool}](#always_osralways_osr--bool)
    - [cache_prototype_transitions(cache_prototype_transitions) → {bool}](#cache_prototype_transitionscache_prototype_transitions--bool)
    - [check_elimination(check_elimination) → {bool}](#check_eliminationcheck_elimination--bool)
    - [code_comments(code_comments) → {bool}](#code_commentscode_comments--bool)
    - [code_stats(code_stats) → {bool}](#code_statscode_stats--bool)
    - [compilation_cache(compilation_cache) → {bool}](#compilation_cachecompilation_cache--bool)
    - [concurrent_sweeping(concurrent_sweeping) → {bool}](#concurrent_sweepingconcurrent_sweeping--bool)
    - [crankshaft(crankshaft) → {bool}](#crankshaftcrankshaft--bool)
    - [dead_code_elimination(dead_code_elimination) → {bool}](#dead_code_eliminationdead_code_elimination--bool)
    - [debug_compile_events(debug_compile_events) → {bool}](#debug_compile_eventsdebug_compile_events--bool)
    - [debug_sim(debug_sim) → {bool}](#debug_simdebug_sim--bool)
    - [debugger(debugger) → {bool}](#debuggerdebugger--bool)
    - [debugger_agent(debugger_agent) → {bool}](#debugger_agentdebugger_agent--bool)
    - [debugger_port(debugger_port) → {int}](#debugger_portdebugger_port--int)
    - [deoptimize_uncommon_cases(deoptimize_uncommon_cases) → {bool}](#deoptimize_uncommon_casesdeoptimize_uncommon_cases--bool)
    - [disable_native_files(disable_native_files) → {bool}](#disable_native_filesdisable_native_files--bool)
    - [dump_counters(dump_counters) → {bool}](#dump_countersdump_counters--bool)
    - [enable_liveedit(enable_liveedit) → {bool}](#enable_liveeditenable_liveedit--bool)
    - [es_staging(es_staging) → {bool}](#es_staginges_staging--bool)
    - [expose_debug_as(expose_debug_as) → {string}](#expose_debug_asexpose_debug_as--string)
    - [expose_free_buffer(expose_free_buffer) → {bool}](#expose_free_bufferexpose_free_buffer--bool)
    - [expose_gc(expose_gc) → {bool}](#expose_gcexpose_gc--bool)
    - [expose_natives_as(expose_natives_as) → {string}](#expose_natives_asexpose_natives_as--string)
    - [expose_trigger_failure(expose_trigger_failure) → {bool}](#expose_trigger_failureexpose_trigger_failure--bool)
    - [fast_math(fast_math) → {bool}](#fast_mathfast_math--bool)
    - [fold_constants(fold_constants) → {bool}](#fold_constantsfold_constants--bool)
    - [frame_count(frame_count) → {int}](#frame_countframe_count--int)
    - [gc_global(gc_global) → {bool}](#gc_globalgc_global--bool)
    - [gc_interval(gc_interval) → {int}](#gc_intervalgc_interval--int)
    - [gc_verbose(gc_verbose) → {bool}](#gc_verbosegc_verbose--bool)
    - [gdbjit(gdbjit) → {bool}](#gdbjitgdbjit--bool)
    - [gdbjit_dump(gdbjit_dump) → {bool}](#gdbjit_dumpgdbjit_dump--bool)
    - [gdbjit_full(gdbjit_full) → {bool}](#gdbjit_fullgdbjit_full--bool)
    - [gvn_iterations(gvn_iterations) → {int}](#gvn_iterationsgvn_iterations--int)
    - [hard_abort(hard_abort) → {bool}](#hard_aborthard_abort--bool)
    - [harmony(harmony) → {bool}](#harmonyharmony--bool)
    - [harmony_arrays(harmony_arrays) → {bool}](#harmony_arraysharmony_arrays--bool)
    - [harmony_generators(harmony_generators) → {bool}](#harmony_generatorsharmony_generators--bool)
    - [harmony_iteration(harmony_iteration) → {bool}](#harmony_iterationharmony_iteration--bool)
    - [harmony_maths(harmony_maths) → {bool}](#harmony_mathsharmony_maths--bool)
    - [harmony_promises(harmony_promises) → {bool}](#harmony_promisesharmony_promises--bool)
    - [harmony_proxies(harmony_proxies) → {bool}](#harmony_proxiesharmony_proxies--bool)
    - [harmony_scoping(harmony_scoping) → {bool}](#harmony_scopingharmony_scoping--bool)
    - [harmony_strings(harmony_strings) → {bool}](#harmony_stringsharmony_strings--bool)
    - [harmony_typeof(harmony_typeof) → {bool}](#harmony_typeofharmony_typeof--bool)
    - [heap_stats(heap_stats) → {bool}](#heap_statsheap_stats--bool)
    - [help(help) → {bool}](#helphelp--bool)
    - [hydrogen_filter(hydrogen_filter) → {string}](#hydrogen_filterhydrogen_filter--string)
    - [hydrogen_stats(hydrogen_stats) → {bool}](#hydrogen_statshydrogen_stats--bool)
    - [incremental_marking(incremental_marking) → {bool}](#incremental_markingincremental_marking--bool)
    - [incremental_marking_steps(incremental_marking_steps) → {bool}](#incremental_marking_stepsincremental_marking_steps--bool)
    - [inline_accessors(inline_accessors) → {bool}](#inline_accessorsinline_accessors--bool)
    - [inline_arguments(inline_arguments) → {bool}](#inline_argumentsinline_arguments--bool)
    - [inline_construct(inline_construct) → {bool}](#inline_constructinline_construct--bool)
    - [inline_new(inline_new) → {bool}](#inline_newinline_new--bool)
    - [job_based_sweeping(job_based_sweeping) → {bool}](#job_based_sweepingjob_based_sweeping--bool)
    - [lazy(lazy) → {bool}](#lazylazy--bool)
    - [ll_prof(ll_prof) → {bool}](#ll_profll_prof--bool)
    - [load_elimination(load_elimination) → {bool}](#load_eliminationload_elimination--bool)
    - [log_all(log_all) → {bool}](#log_alllog_all--bool)
    - [log_api(log_api) → {bool}](#log_apilog_api--bool)
    - [log_handles(log_handles) → {bool}](#log_handleslog_handles--bool)
    - [log_instruction_stats(log_instruction_stats) → {bool}](#log_instruction_statslog_instruction_stats--bool)
    - [log_internal_timer_events(log_internal_timer_events) → {bool}](#log_internal_timer_eventslog_internal_timer_events--bool)
    - [log_regexp(log_regexp) → {bool}](#log_regexplog_regexp--bool)
    - [log_suspect(log_suspect) → {bool}](#log_suspectlog_suspect--bool)
    - [logfile(logfile) → {string}](#logfilelogfile--string)
    - [logfile_per_isolate(logfile_per_isolate) → {bool}](#logfile_per_isolatelogfile_per_isolate--bool)
    - [loop_invariant_code_motion(loop_invariant_code_motion) → {bool}](#loop_invariant_code_motionloop_invariant_code_motion--bool)
    - [map_counters(map_counters) → {string}](#map_countersmap_counters--string)
    - [max_executable_size(max_executable_size) → {int}](#max_executable_sizemax_executable_size--int)
    - [max_inlining_levels(max_inlining_levels) → {int}](#max_inlining_levelsmax_inlining_levels--int)
    - [max_old_space_size(max_old_space_size) → {int}](#max_old_space_sizemax_old_space_size--int)
    - [opt(opt) → {bool}](#optopt--bool)
    - [optimize_closures(optimize_closures) → {bool}](#optimize_closuresoptimize_closures--bool)
    - [packed_arrays(packed_arrays) → {bool}](#packed_arrayspacked_arrays--bool)
    - [parallel_sweeping(parallel_sweeping) → {bool}](#parallel_sweepingparallel_sweeping--bool)
    - [polymorphic_inlining(polymorphic_inlining) → {bool}](#polymorphic_inliningpolymorphic_inlining--bool)
    - [predictable(predictable) → {bool}](#predictablepredictable--bool)
    - [prepare_always_opt(prepare_always_opt) → {bool}](#prepare_always_optprepare_always_opt--bool)
    - [pretenuring(pretenuring) → {bool}](#pretenuringpretenuring--bool)
    - [pretenuring_call_new(pretenuring_call_new) → {bool}](#pretenuring_call_newpretenuring_call_new--bool)
    - [print_ast(print_ast) → {bool}](#print_astprint_ast--bool)
    - [print_builtin_ast(print_builtin_ast) → {bool}](#print_builtin_astprint_builtin_ast--bool)
    - [print_builtin_scopes(print_builtin_scopes) → {bool}](#print_builtin_scopesprint_builtin_scopes--bool)
    - [print_deopt_stress(print_deopt_stress) → {bool}](#print_deopt_stressprint_deopt_stress--bool)
    - [print_global_handles(print_global_handles) → {bool}](#print_global_handlesprint_global_handles--bool)
    - [print_handles(print_handles) → {bool}](#print_handlesprint_handles--bool)
    - [print_interface_depth(print_interface_depth) → {int}](#print_interface_depthprint_interface_depth--int)
    - [print_interface_details(print_interface_details) → {bool}](#print_interface_detailsprint_interface_details--bool)
    - [print_interfaces(print_interfaces) → {bool}](#print_interfacesprint_interfaces--bool)
    - [print_scopes(print_scopes) → {bool}](#print_scopesprint_scopes--bool)
    - [print_source(print_source) → {bool}](#print_sourceprint_source--bool)
    - [regexp_optimization(regexp_optimization) → {bool}](#regexp_optimizationregexp_optimization--bool)
    - [self_opt_count(self_opt_count) → {int}](#self_opt_countself_opt_count--int)
    - [smi_binop(smi_binop) → {bool}](#smi_binopsmi_binop--bool)
    - [smi_only_arrays(smi_only_arrays) → {bool}](#smi_only_arrayssmi_only_arrays--bool)
    - [stack_trace_limit(stack_trace_limit) → {int}](#stack_trace_limitstack_trace_limit--int)
    - [stop_at(stop_at) → {string}](#stop_atstop_at--string)
    - [stop_sim_at(stop_sim_at) → {int}](#stop_sim_atstop_sim_at--int)
    - [store_elimination(store_elimination) → {bool}](#store_eliminationstore_elimination--bool)
    - [stress_environments(stress_environments) → {bool}](#stress_environmentsstress_environments--bool)
    - [stress_pointer_maps(stress_pointer_maps) → {bool}](#stress_pointer_mapsstress_pointer_maps--bool)
    - [stress_runs(stress_runs) → {int}](#stress_runsstress_runs--int)
    - [string_slices(string_slices) → {bool}](#string_slicesstring_slices--bool)
    - [testing_bool_flag(testing_bool_flag) → {bool}](#testing_bool_flagtesting_bool_flag--bool)
    - [testing_float_flag(testing_float_flag) → {float}](#testing_float_flagtesting_float_flag--float)
    - [testing_int_flag(testing_int_flag) → {int}](#testing_int_flagtesting_int_flag--int)
    - [testing_prng_seed(testing_prng_seed) → {int}](#testing_prng_seedtesting_prng_seed--int)
    - [trace(trace) → {bool}](#tracetrace--bool)
    - [trace_all_uses(trace_all_uses) → {bool}](#trace_all_usestrace_all_uses--bool)
    - [trace_alloc(trace_alloc) → {bool}](#trace_alloctrace_alloc--bool)
    - [trace_allocation_folding(trace_allocation_folding) → {bool}](#trace_allocation_foldingtrace_allocation_folding--bool)
    - [trace_bce(trace_bce) → {bool}](#trace_bcetrace_bce--bool)
    - [trace_check_elimination(trace_check_elimination) → {bool}](#trace_check_eliminationtrace_check_elimination--bool)
    - [trace_code_flushing(trace_code_flushing) → {bool}](#trace_code_flushingtrace_code_flushing--bool)
    - [trace_contexts(trace_contexts) → {bool}](#trace_contextstrace_contexts--bool)
    - [trace_dead_code_elimination(trace_dead_code_elimination) → {bool}](#trace_dead_code_eliminationtrace_dead_code_elimination--bool)
    - [trace_debug_json(trace_debug_json) → {bool}](#trace_debug_jsontrace_debug_json--bool)
    - [trace_deopt(trace_deopt) → {bool}](#trace_deopttrace_deopt--bool)
    - [trace_escape_analysis(trace_escape_analysis) → {bool}](#trace_escape_analysistrace_escape_analysis--bool)
    - [trace_generalization(trace_generalization) → {bool}](#trace_generalizationtrace_generalization--bool)
    - [trace_gvn(trace_gvn) → {bool}](#trace_gvntrace_gvn--bool)
    - [trace_hydrogen(trace_hydrogen) → {bool}](#trace_hydrogentrace_hydrogen--bool)
    - [trace_hydrogen_file(trace_hydrogen_file) → {string}](#trace_hydrogen_filetrace_hydrogen_file--string)
    - [trace_hydrogen_filter(trace_hydrogen_filter) → {string}](#trace_hydrogen_filtertrace_hydrogen_filter--string)
    - [trace_hydrogen_stubs(trace_hydrogen_stubs) → {bool}](#trace_hydrogen_stubstrace_hydrogen_stubs--bool)
    - [trace_ic(trace_ic) → {bool}](#trace_ictrace_ic--bool)
    - [trace_inlining(trace_inlining) → {bool}](#trace_inliningtrace_inlining--bool)
    - [trace_isolates(trace_isolates) → {bool}](#trace_isolatestrace_isolates--bool)
    - [trace_lazy(trace_lazy) → {bool}](#trace_lazytrace_lazy--bool)
    - [trace_load_elimination(trace_load_elimination) → {bool}](#trace_load_eliminationtrace_load_elimination--bool)
    - [trace_migration(trace_migration) → {bool}](#trace_migrationtrace_migration--bool)
    - [trace_opt(trace_opt) → {bool}](#trace_opttrace_opt--bool)
    - [trace_opt_stats(trace_opt_stats) → {bool}](#trace_opt_statstrace_opt_stats--bool)
    - [trace_opt_verbose(trace_opt_verbose) → {bool}](#trace_opt_verbosetrace_opt_verbose--bool)
    - [trace_osr(trace_osr) → {bool}](#trace_osrtrace_osr--bool)
    - [trace_parse(trace_parse) → {bool}](#trace_parsetrace_parse--bool)
    - [trace_phase(trace_phase) → {string}](#trace_phasetrace_phase--string)
    - [trace_range(trace_range) → {bool}](#trace_rangetrace_range--bool)
    - [trace_regexp_bytecodes(trace_regexp_bytecodes) → {bool}](#trace_regexp_bytecodestrace_regexp_bytecodes--bool)
    - [trace_representation(trace_representation) → {bool}](#trace_representationtrace_representation--bool)
    - [trace_sim(trace_sim) → {bool}](#trace_simtrace_sim--bool)
    - [trace_store_elimination(trace_store_elimination) → {bool}](#trace_store_eliminationtrace_store_elimination--bool)
    - [track_computed_fields(track_computed_fields) → {bool}](#track_computed_fieldstrack_computed_fields--bool)
    - [track_double_fields(track_double_fields) → {bool}](#track_double_fieldstrack_double_fields--bool)
    - [track_field_types(track_field_types) → {bool}](#track_field_typestrack_field_types--bool)
    - [track_fields(track_fields) → {bool}](#track_fieldstrack_fields--bool)
    - [track_heap_object_fields(track_heap_object_fields) → {bool}](#track_heap_object_fieldstrack_heap_object_fields--bool)
    - [trap_on_abort(trap_on_abort) → {bool}](#trap_on_aborttrap_on_abort--bool)
    - [trap_on_deopt(trap_on_deopt) → {bool}](#trap_on_deopttrap_on_deopt--bool)
    - [unbox_double_arrays(unbox_double_arrays) → {bool}](#unbox_double_arraysunbox_double_arrays--bool)
    - [unreachable_code_elimination(unreachable_code_elimination) → {bool}](#unreachable_code_eliminationunreachable_code_elimination--bool)
    - [use_allocation_folding(use_allocation_folding) → {bool}](#use_allocation_foldinguse_allocation_folding--bool)
    - [use_canonicalizing(use_canonicalizing) → {bool}](#use_canonicalizinguse_canonicalizing--bool)
    - [use_escape_analysis(use_escape_analysis) → {bool}](#use_escape_analysisuse_escape_analysis--bool)
    - [use_gvn(use_gvn) → {bool}](#use_gvnuse_gvn--bool)
    - [use_ic(use_ic) → {bool}](#use_icuse_ic--bool)
    - [use_inlining(use_inlining) → {bool}](#use_inlininguse_inlining--bool)
    - [use_local_allocation_folding(use_local_allocation_folding) → {bool}](#use_local_allocation_foldinguse_local_allocation_folding--bool)
    - [use_osr(use_osr) → {bool}](#use_osruse_osr--bool)
    - [use_strict(use_strict) → {bool}](#use_strictuse_strict--bool)
    - [use_verbose_printer(use_verbose_printer) → {bool}](#use_verbose_printeruse_verbose_printer--bool)
    - [verify_heap(verify_heap) → {bool}](#verify_heapverify_heap--bool)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## API


<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="allow_natives_syntax"><span class="type-signature"></span>allow_natives_syntax<span class="signature">(<span class="optional">allow_natives_syntax</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>allow natives syntax</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>allow_natives_syntax</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets allow_natives_syntax</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2104">lineno 2104</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of allow_natives_syntax</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="always_compact"><span class="type-signature"></span>always_compact<span class="signature">(<span class="optional">always_compact</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Perform compaction on every full GC</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>always_compact</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets always_compact</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2068">lineno 2068</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of always_compact</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="always_opt"><span class="type-signature"></span>always_opt<span class="signature">(<span class="optional">always_opt</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>always try to optimize functions</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>always_opt</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets always_opt</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1690">lineno 1690</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of always_opt</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="always_osr"><span class="type-signature"></span>always_osr<span class="signature">(<span class="optional">always_osr</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>always try to OSR functions</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>always_osr</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets always_osr</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1708">lineno 1708</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of always_osr</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="cache_prototype_transitions"><span class="type-signature"></span>cache_prototype_transitions<span class="signature">(<span class="optional">cache_prototype_transitions</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>cache prototype transitions</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>cache_prototype_transitions</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets cache_prototype_transitions</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1780">lineno 1780</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of cache_prototype_transitions</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="check_elimination"><span class="type-signature"></span>check_elimination<span class="signature">(<span class="optional">check_elimination</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use check elimination</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>check_elimination</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets check_elimination</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1168">lineno 1168</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of check_elimination</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="code_comments"><span class="type-signature"></span>code_comments<span class="signature">(<span class="optional">code_comments</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>emit comments in code disassembly</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>code_comments</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets code_comments</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1438">lineno 1438</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of code_comments</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="code_stats"><span class="type-signature"></span>code_stats<span class="signature">(<span class="optional">code_stats</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>report code statistics after GC</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>code_stats</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets code_stats</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2662">lineno 2662</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of code_stats</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="compilation_cache"><span class="type-signature"></span>compilation_cache<span class="signature">(<span class="optional">compilation_cache</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable compilation cache</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>compilation_cache</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets compilation_cache</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1762">lineno 1762</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of compilation_cache</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="concurrent_sweeping"><span class="type-signature"></span>concurrent_sweeping<span class="signature">(<span class="optional">concurrent_sweeping</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable concurrent sweeping</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>concurrent_sweeping</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets concurrent_sweeping</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1996">lineno 1996</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of concurrent_sweeping</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="crankshaft"><span class="type-signature"></span>crankshaft<span class="signature">(<span class="optional">crankshaft</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use crankshaft</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>crankshaft</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets crankshaft</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L448">lineno 448</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of crankshaft</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="dead_code_elimination"><span class="type-signature"></span>dead_code_elimination<span class="signature">(<span class="optional">dead_code_elimination</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use dead code elimination</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>dead_code_elimination</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets dead_code_elimination</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1204">lineno 1204</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of dead_code_elimination</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="debug_compile_events"><span class="type-signature"></span>debug_compile_events<span class="signature">(<span class="optional">debug_compile_events</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Enable debugger compile events</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>debug_compile_events</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets debug_compile_events</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2410">lineno 2410</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of debug_compile_events</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="debug_sim"><span class="type-signature"></span>debug_sim<span class="signature">(<span class="optional">debug_sim</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Enable debugging the simulator</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>debug_sim</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets debug_sim</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2158">lineno 2158</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of debug_sim</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="debugger"><span class="type-signature"></span>debugger<span class="signature">(<span class="optional">debugger</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Enable JavaScript debugger</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>debugger</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets debugger</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2338">lineno 2338</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of debugger</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="debugger_agent"><span class="type-signature"></span>debugger_agent<span class="signature">(<span class="optional">debugger_agent</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Enable debugger agent</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>debugger_agent</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets debugger_agent</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2356">lineno 2356</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of debugger_agent</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="debugger_port"><span class="type-signature"></span>debugger_port<span class="signature">(<span class="optional">debugger_port</span>)</span><span class="type-signature"> &rarr; {int}</span></h4>
</dt>
<dd>
<div class="description">
<p>Port to use for remote debugging</p>
<p><em>default</em>: <code>5858</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>debugger_port</code></td>
<td class="type">
<span class="param-type">int</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets debugger_port</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2374">lineno 2374</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of debugger_port</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">int</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="deoptimize_uncommon_cases"><span class="type-signature"></span>deoptimize_uncommon_cases<span class="signature">(<span class="optional">deoptimize_uncommon_cases</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>deoptimize uncommon cases</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>deoptimize_uncommon_cases</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets deoptimize_uncommon_cases</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1078">lineno 1078</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of deoptimize_uncommon_cases</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="disable_native_files"><span class="type-signature"></span>disable_native_files<span class="signature">(<span class="optional">disable_native_files</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>disable builtin natives files</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>disable_native_files</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets disable_native_files</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1564">lineno 1564</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of disable_native_files</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="dump_counters"><span class="type-signature"></span>dump_counters<span class="signature">(<span class="optional">dump_counters</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Dump counters on exit</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>dump_counters</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets dump_counters</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2320">lineno 2320</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of dump_counters</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="enable_liveedit"><span class="type-signature"></span>enable_liveedit<span class="signature">(<span class="optional">enable_liveedit</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable liveedit experimental feature</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>enable_liveedit</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets enable_liveedit</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1816">lineno 1816</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of enable_liveedit</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="es_staging"><span class="type-signature"></span>es_staging<span class="signature">(<span class="optional">es_staging</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable upcoming ES6+ features</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>es_staging</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets es_staging</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L34">lineno 34</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of es_staging</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="expose_debug_as"><span class="type-signature"></span>expose_debug_as<span class="signature">(<span class="optional">expose_debug_as</span>)</span><span class="type-signature"> &rarr; {string}</span></h4>
</dt>
<dd>
<div class="description">
<p>expose debug in global object</p>
<p><em>default</em>: <code>null</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>expose_debug_as</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets expose_debug_as</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1474">lineno 1474</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of expose_debug_as</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">string</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="expose_free_buffer"><span class="type-signature"></span>expose_free_buffer<span class="signature">(<span class="optional">expose_free_buffer</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>expose freeBuffer extension</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>expose_free_buffer</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets expose_free_buffer</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1492">lineno 1492</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of expose_free_buffer</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="expose_gc"><span class="type-signature"></span>expose_gc<span class="signature">(<span class="optional">expose_gc</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>expose gc extension</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>expose_gc</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets expose_gc</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1510">lineno 1510</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of expose_gc</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="expose_natives_as"><span class="type-signature"></span>expose_natives_as<span class="signature">(<span class="optional">expose_natives_as</span>)</span><span class="type-signature"> &rarr; {string}</span></h4>
</dt>
<dd>
<div class="description">
<p>expose natives in global object</p>
<p><em>default</em>: <code>null</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>expose_natives_as</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets expose_natives_as</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1456">lineno 1456</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of expose_natives_as</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">string</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="expose_trigger_failure"><span class="type-signature"></span>expose_trigger_failure<span class="signature">(<span class="optional">expose_trigger_failure</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>expose trigger-failure extension</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>expose_trigger_failure</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets expose_trigger_failure</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1528">lineno 1528</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of expose_trigger_failure</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="fast_math"><span class="type-signature"></span>fast_math<span class="signature">(<span class="optional">fast_math</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>faster (but maybe less accurate) math functions</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>fast_math</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets fast_math</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L646">lineno 646</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of fast_math</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="fold_constants"><span class="type-signature"></span>fold_constants<span class="signature">(<span class="optional">fold_constants</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use constant folding</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>fold_constants</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets fold_constants</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1222">lineno 1222</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of fold_constants</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="frame_count"><span class="type-signature"></span>frame_count<span class="signature">(<span class="optional">frame_count</span>)</span><span class="type-signature"> &rarr; {int}</span></h4>
</dt>
<dd>
<div class="description">
<p>number of stack frames inspected by the profiler</p>
<p><em>default</em>: <code>1</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>frame_count</code></td>
<td class="type">
<span class="param-type">int</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets frame_count</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1384">lineno 1384</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of frame_count</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">int</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="gc_global"><span class="type-signature"></span>gc_global<span class="signature">(<span class="optional">gc_global</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>always perform global GCs</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>gc_global</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets gc_global</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1888">lineno 1888</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of gc_global</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="gc_interval"><span class="type-signature"></span>gc_interval<span class="signature">(<span class="optional">gc_interval</span>)</span><span class="type-signature"> &rarr; {int}</span></h4>
</dt>
<dd>
<div class="description">
<p>garbage collect after <n> allocations</n></p>
<p><em>default</em>: <code>-1</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>gc_interval</code></td>
<td class="type">
<span class="param-type">int</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets gc_interval</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1906">lineno 1906</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of gc_interval</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">int</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="gc_verbose"><span class="type-signature"></span>gc_verbose<span class="signature">(<span class="optional">gc_verbose</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>print stuff during garbage collection</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>gc_verbose</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets gc_verbose</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2626">lineno 2626</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of gc_verbose</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="gdbjit"><span class="type-signature"></span>gdbjit<span class="signature">(<span class="optional">gdbjit</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable GDBJIT interface (disables compacting GC)</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>gdbjit</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets gdbjit</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2428">lineno 2428</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of gdbjit</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="gdbjit_dump"><span class="type-signature"></span>gdbjit_dump<span class="signature">(<span class="optional">gdbjit_dump</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>dump elf objects with debug info to disk</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>gdbjit_dump</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets gdbjit_dump</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2464">lineno 2464</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of gdbjit_dump</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="gdbjit_full"><span class="type-signature"></span>gdbjit_full<span class="signature">(<span class="optional">gdbjit_full</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable GDBJIT interface for all code objects</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>gdbjit_full</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets gdbjit_full</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2446">lineno 2446</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of gdbjit_full</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="gvn_iterations"><span class="type-signature"></span>gvn_iterations<span class="signature">(<span class="optional">gvn_iterations</span>)</span><span class="type-signature"> &rarr; {int}</span></h4>
</dt>
<dd>
<div class="description">
<p>maximum number of GVN fix-point iterations</p>
<p><em>default</em>: <code>3</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>gvn_iterations</code></td>
<td class="type">
<span class="param-type">int</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets gvn_iterations</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L502">lineno 502</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of gvn_iterations</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">int</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="hard_abort"><span class="type-signature"></span>hard_abort<span class="signature">(<span class="optional">hard_abort</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>abort by crashing</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>hard_abort</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets hard_abort</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1834">lineno 1834</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of hard_abort</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony"><span class="type-signature"></span>harmony<span class="signature">(<span class="optional">harmony</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable all harmony features (except typeof)</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>harmony</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets harmony</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L214">lineno 214</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of harmony</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_arrays"><span class="type-signature"></span>harmony_arrays<span class="signature">(<span class="optional">harmony_arrays</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony arrays</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>harmony_arrays</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets harmony_arrays</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L160">lineno 160</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of harmony_arrays</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_generators"><span class="type-signature"></span>harmony_generators<span class="signature">(<span class="optional">harmony_generators</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony generators</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>harmony_generators</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets harmony_generators</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L106">lineno 106</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of harmony_generators</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_iteration"><span class="type-signature"></span>harmony_iteration<span class="signature">(<span class="optional">harmony_iteration</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony iteration (for-of)</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>harmony_iteration</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets harmony_iteration</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L124">lineno 124</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of harmony_iteration</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_maths"><span class="type-signature"></span>harmony_maths<span class="signature">(<span class="optional">harmony_maths</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony math functions</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>harmony_maths</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets harmony_maths</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L178">lineno 178</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of harmony_maths</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_promises"><span class="type-signature"></span>harmony_promises<span class="signature">(<span class="optional">harmony_promises</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>(dummy flag, has no effect)</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>harmony_promises</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets harmony_promises</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L196">lineno 196</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of harmony_promises</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_proxies"><span class="type-signature"></span>harmony_proxies<span class="signature">(<span class="optional">harmony_proxies</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony proxies</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>harmony_proxies</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets harmony_proxies</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L88">lineno 88</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of harmony_proxies</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_scoping"><span class="type-signature"></span>harmony_scoping<span class="signature">(<span class="optional">harmony_scoping</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony block scoping</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>harmony_scoping</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets harmony_scoping</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L70">lineno 70</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of harmony_scoping</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_strings"><span class="type-signature"></span>harmony_strings<span class="signature">(<span class="optional">harmony_strings</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony string</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>harmony_strings</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets harmony_strings</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L142">lineno 142</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of harmony_strings</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_typeof"><span class="type-signature"></span>harmony_typeof<span class="signature">(<span class="optional">harmony_typeof</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony semantics for typeof</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>harmony_typeof</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets harmony_typeof</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L52">lineno 52</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of harmony_typeof</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="heap_stats"><span class="type-signature"></span>heap_stats<span class="signature">(<span class="optional">heap_stats</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>report heap statistics before and after GC</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>heap_stats</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets heap_stats</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2644">lineno 2644</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of heap_stats</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="help"><span class="type-signature"></span>help<span class="signature">(<span class="optional">help</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Print usage message, including flags, on console</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>help</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets help</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2302">lineno 2302</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of help</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="hydrogen_filter"><span class="type-signature"></span>hydrogen_filter<span class="signature">(<span class="optional">hydrogen_filter</span>)</span><span class="type-signature"> &rarr; {string}</span></h4>
</dt>
<dd>
<div class="description">
<p>optimization filter</p>
<p><em>default</em>: <code>*</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>hydrogen_filter</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets hydrogen_filter</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L466">lineno 466</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of hydrogen_filter</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">string</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="hydrogen_stats"><span class="type-signature"></span>hydrogen_stats<span class="signature">(<span class="optional">hydrogen_stats</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>print statistics for hydrogen</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>hydrogen_stats</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets hydrogen_stats</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L664">lineno 664</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of hydrogen_stats</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="incremental_marking"><span class="type-signature"></span>incremental_marking<span class="signature">(<span class="optional">incremental_marking</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use incremental marking</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>incremental_marking</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets incremental_marking</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1942">lineno 1942</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of incremental_marking</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="incremental_marking_steps"><span class="type-signature"></span>incremental_marking_steps<span class="signature">(<span class="optional">incremental_marking_steps</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>do incremental marking steps</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>incremental_marking_steps</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets incremental_marking_steps</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1960">lineno 1960</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of incremental_marking_steps</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="inline_accessors"><span class="type-signature"></span>inline_accessors<span class="signature">(<span class="optional">inline_accessors</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>inline JavaScript accessors</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>inline_accessors</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets inline_accessors</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1366">lineno 1366</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of inline_accessors</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="inline_arguments"><span class="type-signature"></span>inline_arguments<span class="signature">(<span class="optional">inline_arguments</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>inline functions with arguments object</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>inline_arguments</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets inline_arguments</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1348">lineno 1348</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of inline_arguments</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="inline_construct"><span class="type-signature"></span>inline_construct<span class="signature">(<span class="optional">inline_construct</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>inline constructor calls</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>inline_construct</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets inline_construct</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1330">lineno 1330</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of inline_construct</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="inline_new"><span class="type-signature"></span>inline_new<span class="signature">(<span class="optional">inline_new</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use fast inline allocation</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>inline_new</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets inline_new</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1582">lineno 1582</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of inline_new</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="job_based_sweeping"><span class="type-signature"></span>job_based_sweeping<span class="signature">(<span class="optional">job_based_sweeping</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable job based sweeping</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>job_based_sweeping</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets job_based_sweeping</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2014">lineno 2014</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of job_based_sweeping</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="lazy"><span class="type-signature"></span>lazy<span class="signature">(<span class="optional">lazy</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use lazy compilation</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>lazy</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets lazy</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1618">lineno 1618</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of lazy</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="ll_prof"><span class="type-signature"></span>ll_prof<span class="signature">(<span class="optional">ll_prof</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Enable low-level linux profiler.</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>ll_prof</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets ll_prof</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2968">lineno 2968</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of ll_prof</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="load_elimination"><span class="type-signature"></span>load_elimination<span class="signature">(<span class="optional">load_elimination</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use load elimination</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>load_elimination</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets load_elimination</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1150">lineno 1150</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of load_elimination</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="log_all"><span class="type-signature"></span>log_all<span class="signature">(<span class="optional">log_all</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Log all events to the log file.</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>log_all</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets log_all</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2842">lineno 2842</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of log_all</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="log_api"><span class="type-signature"></span>log_api<span class="signature">(<span class="optional">log_api</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Log API events to the log file.</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>log_api</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets log_api</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2860">lineno 2860</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of log_api</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="log_handles"><span class="type-signature"></span>log_handles<span class="signature">(<span class="optional">log_handles</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Log global handle events.</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>log_handles</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets log_handles</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2878">lineno 2878</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of log_handles</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="log_instruction_stats"><span class="type-signature"></span>log_instruction_stats<span class="signature">(<span class="optional">log_instruction_stats</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Log AArch64 instruction statistics.</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>log_instruction_stats</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets log_instruction_stats</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L3004">lineno 3004</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of log_instruction_stats</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="log_internal_timer_events"><span class="type-signature"></span>log_internal_timer_events<span class="signature">(<span class="optional">log_internal_timer_events</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Time internal events.</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>log_internal_timer_events</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets log_internal_timer_events</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2986">lineno 2986</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of log_internal_timer_events</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="log_regexp"><span class="type-signature"></span>log_regexp<span class="signature">(<span class="optional">log_regexp</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Log regular expression execution.</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>log_regexp</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets log_regexp</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2914">lineno 2914</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of log_regexp</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="log_suspect"><span class="type-signature"></span>log_suspect<span class="signature">(<span class="optional">log_suspect</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Log suspect operations.</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>log_suspect</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets log_suspect</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2896">lineno 2896</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of log_suspect</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="logfile"><span class="type-signature"></span>logfile<span class="signature">(<span class="optional">logfile</span>)</span><span class="type-signature"> &rarr; {string}</span></h4>
</dt>
<dd>
<div class="description">
<p>Specify the name of the log file.</p>
<p><em>default</em>: <code>v8.log</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>logfile</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets logfile</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2932">lineno 2932</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of logfile</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">string</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="logfile_per_isolate"><span class="type-signature"></span>logfile_per_isolate<span class="signature">(<span class="optional">logfile_per_isolate</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Separate log files for each isolate.</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>logfile_per_isolate</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets logfile_per_isolate</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2950">lineno 2950</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of logfile_per_isolate</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="loop_invariant_code_motion"><span class="type-signature"></span>loop_invariant_code_motion<span class="signature">(<span class="optional">loop_invariant_code_motion</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>loop invariant code motion</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>loop_invariant_code_motion</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets loop_invariant_code_motion</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L628">lineno 628</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of loop_invariant_code_motion</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="map_counters"><span class="type-signature"></span>map_counters<span class="signature">(<span class="optional">map_counters</span>)</span><span class="type-signature"> &rarr; {string}</span></h4>
</dt>
<dd>
<div class="description">
<p>Map counters to a file</p>
<p><em>default</em>: ``</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>map_counters</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets map_counters</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2392">lineno 2392</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of map_counters</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">string</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="max_executable_size"><span class="type-signature"></span>max_executable_size<span class="signature">(<span class="optional">max_executable_size</span>)</span><span class="type-signature"> &rarr; {int}</span></h4>
</dt>
<dd>
<div class="description">
<p>max size of executable memory (in Mbytes)</p>
<p><em>default</em>: <code>0</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>max_executable_size</code></td>
<td class="type">
<span class="param-type">int</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets max_executable_size</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1870">lineno 1870</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of max_executable_size</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">int</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="max_inlining_levels"><span class="type-signature"></span>max_inlining_levels<span class="signature">(<span class="optional">max_inlining_levels</span>)</span><span class="type-signature"> &rarr; {int}</span></h4>
</dt>
<dd>
<div class="description">
<p>maximum number of inlining levels</p>
<p><em>default</em>: <code>5</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>max_inlining_levels</code></td>
<td class="type">
<span class="param-type">int</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets max_inlining_levels</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L610">lineno 610</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of max_inlining_levels</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">int</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="max_old_space_size"><span class="type-signature"></span>max_old_space_size<span class="signature">(<span class="optional">max_old_space_size</span>)</span><span class="type-signature"> &rarr; {int}</span></h4>
</dt>
<dd>
<div class="description">
<p>max size of the old space (in Mbytes)</p>
<p><em>default</em>: <code>0</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>max_old_space_size</code></td>
<td class="type">
<span class="param-type">int</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets max_old_space_size</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1852">lineno 1852</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of max_old_space_size</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">int</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="opt"><span class="type-signature"></span>opt<span class="signature">(<span class="optional">opt</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use adaptive optimizations</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>opt</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets opt</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1672">lineno 1672</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of opt</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="optimize_closures"><span class="type-signature"></span>optimize_closures<span class="signature">(<span class="optional">optimize_closures</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>optimize closures</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>optimize_closures</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets optimize_closures</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1312">lineno 1312</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of optimize_closures</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="packed_arrays"><span class="type-signature"></span>packed_arrays<span class="signature">(<span class="optional">packed_arrays</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>optimizes arrays that have no holes</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>packed_arrays</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets packed_arrays</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L232">lineno 232</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of packed_arrays</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="parallel_sweeping"><span class="type-signature"></span>parallel_sweeping<span class="signature">(<span class="optional">parallel_sweeping</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable parallel sweeping</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>parallel_sweeping</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets parallel_sweeping</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1978">lineno 1978</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of parallel_sweeping</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="polymorphic_inlining"><span class="type-signature"></span>polymorphic_inlining<span class="signature">(<span class="optional">polymorphic_inlining</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>polymorphic inlining</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>polymorphic_inlining</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets polymorphic_inlining</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1096">lineno 1096</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of polymorphic_inlining</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="predictable"><span class="type-signature"></span>predictable<span class="signature">(<span class="optional">predictable</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enable predictable mode</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>predictable</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets predictable</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2284">lineno 2284</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of predictable</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="prepare_always_opt"><span class="type-signature"></span>prepare_always_opt<span class="signature">(<span class="optional">prepare_always_opt</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>prepare for turning on always opt</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>prepare_always_opt</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets prepare_always_opt</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1726">lineno 1726</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of prepare_always_opt</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="pretenuring"><span class="type-signature"></span>pretenuring<span class="signature">(<span class="optional">pretenuring</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>allocate objects in old space</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>pretenuring</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets pretenuring</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L268">lineno 268</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of pretenuring</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="pretenuring_call_new"><span class="type-signature"></span>pretenuring_call_new<span class="signature">(<span class="optional">pretenuring_call_new</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>pretenure call new</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>pretenuring_call_new</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets pretenuring_call_new</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L286">lineno 286</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of pretenuring_call_new</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_ast"><span class="type-signature"></span>print_ast<span class="signature">(<span class="optional">print_ast</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>print source AST</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>print_ast</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets print_ast</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2500">lineno 2500</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of print_ast</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_builtin_ast"><span class="type-signature"></span>print_builtin_ast<span class="signature">(<span class="optional">print_builtin_ast</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>print source AST for builtins</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>print_builtin_ast</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets print_builtin_ast</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2518">lineno 2518</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of print_builtin_ast</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_builtin_scopes"><span class="type-signature"></span>print_builtin_scopes<span class="signature">(<span class="optional">print_builtin_scopes</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>print scopes for builtins</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>print_builtin_scopes</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets print_builtin_scopes</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2572">lineno 2572</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of print_builtin_scopes</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_deopt_stress"><span class="type-signature"></span>print_deopt_stress<span class="signature">(<span class="optional">print_deopt_stress</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>print number of possible deopt points</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>print_deopt_stress</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets print_deopt_stress</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1042">lineno 1042</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of print_deopt_stress</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_global_handles"><span class="type-signature"></span>print_global_handles<span class="signature">(<span class="optional">print_global_handles</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>report global handles after GC</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>print_global_handles</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets print_global_handles</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2698">lineno 2698</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of print_global_handles</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_handles"><span class="type-signature"></span>print_handles<span class="signature">(<span class="optional">print_handles</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>report handles after GC</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>print_handles</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets print_handles</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2680">lineno 2680</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of print_handles</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_interface_depth"><span class="type-signature"></span>print_interface_depth<span class="signature">(<span class="optional">print_interface_depth</span>)</span><span class="type-signature"> &rarr; {int}</span></h4>
</dt>
<dd>
<div class="description">
<p>depth for printing interfaces</p>
<p><em>default</em>: <code>5</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>print_interface_depth</code></td>
<td class="type">
<span class="param-type">int</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets print_interface_depth</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2770">lineno 2770</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of print_interface_depth</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">int</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_interface_details"><span class="type-signature"></span>print_interface_details<span class="signature">(<span class="optional">print_interface_details</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>print interface inference details</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>print_interface_details</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets print_interface_details</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2752">lineno 2752</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of print_interface_details</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_interfaces"><span class="type-signature"></span>print_interfaces<span class="signature">(<span class="optional">print_interfaces</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>print interfaces</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>print_interfaces</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets print_interfaces</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2734">lineno 2734</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of print_interfaces</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_scopes"><span class="type-signature"></span>print_scopes<span class="signature">(<span class="optional">print_scopes</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>print scopes</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>print_scopes</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets print_scopes</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2590">lineno 2590</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of print_scopes</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_source"><span class="type-signature"></span>print_source<span class="signature">(<span class="optional">print_source</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>pretty print source code</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>print_source</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets print_source</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2482">lineno 2482</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of print_source</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="regexp_optimization"><span class="type-signature"></span>regexp_optimization<span class="signature">(<span class="optional">regexp_optimization</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>generate optimized regexp code</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>regexp_optimization</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets regexp_optimization</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2194">lineno 2194</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of regexp_optimization</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="self_opt_count"><span class="type-signature"></span>self_opt_count<span class="signature">(<span class="optional">self_opt_count</span>)</span><span class="type-signature"> &rarr; {int}</span></h4>
</dt>
<dd>
<div class="description">
<p>call count before self-optimization</p>
<p><em>default</em>: <code>130</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>self_opt_count</code></td>
<td class="type">
<span class="param-type">int</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets self_opt_count</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1402">lineno 1402</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of self_opt_count</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">int</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="smi_binop"><span class="type-signature"></span>smi_binop<span class="signature">(<span class="optional">smi_binop</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>support smi representation in binary operations</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>smi_binop</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets smi_binop</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L394">lineno 394</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of smi_binop</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="smi_only_arrays"><span class="type-signature"></span>smi_only_arrays<span class="signature">(<span class="optional">smi_only_arrays</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>tracks arrays with only smi values</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>smi_only_arrays</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets smi_only_arrays</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L250">lineno 250</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of smi_only_arrays</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="stack_trace_limit"><span class="type-signature"></span>stack_trace_limit<span class="signature">(<span class="optional">stack_trace_limit</span>)</span><span class="type-signature"> &rarr; {int}</span></h4>
</dt>
<dd>
<div class="description">
<p>number of stack frames to capture</p>
<p><em>default</em>: <code>10</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>stack_trace_limit</code></td>
<td class="type">
<span class="param-type">int</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets stack_trace_limit</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1546">lineno 1546</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of stack_trace_limit</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">int</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="stop_at"><span class="type-signature"></span>stop_at<span class="signature">(<span class="optional">stop_at</span>)</span><span class="type-signature"> &rarr; {string}</span></h4>
</dt>
<dd>
<div class="description">
<p>function name where to insert a breakpoint</p>
<p><em>default</em>: ``</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>stop_at</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets stop_at</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2536">lineno 2536</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of stop_at</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">string</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="stop_sim_at"><span class="type-signature"></span>stop_sim_at<span class="signature">(<span class="optional">stop_sim_at</span>)</span><span class="type-signature"> &rarr; {int}</span></h4>
</dt>
<dd>
<div class="description">
<p>Simulator stop after x number of instructions</p>
<p><em>default</em>: <code>0</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>stop_sim_at</code></td>
<td class="type">
<span class="param-type">int</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets stop_sim_at</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2176">lineno 2176</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of stop_sim_at</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">int</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="store_elimination"><span class="type-signature"></span>store_elimination<span class="signature">(<span class="optional">store_elimination</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use store elimination</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>store_elimination</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets store_elimination</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1186">lineno 1186</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of store_elimination</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="stress_environments"><span class="type-signature"></span>stress_environments<span class="signature">(<span class="optional">stress_environments</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>environment for every instruction</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>stress_environments</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets stress_environments</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1024">lineno 1024</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of stress_environments</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="stress_pointer_maps"><span class="type-signature"></span>stress_pointer_maps<span class="signature">(<span class="optional">stress_pointer_maps</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>pointer map for every instruction</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>stress_pointer_maps</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets stress_pointer_maps</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1006">lineno 1006</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of stress_pointer_maps</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="stress_runs"><span class="type-signature"></span>stress_runs<span class="signature">(<span class="optional">stress_runs</span>)</span><span class="type-signature"> &rarr; {int}</span></h4>
</dt>
<dd>
<div class="description">
<p>number of stress runs</p>
<p><em>default</em>: <code>0</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>stress_runs</code></td>
<td class="type">
<span class="param-type">int</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets stress_runs</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1294">lineno 1294</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of stress_runs</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">int</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="string_slices"><span class="type-signature"></span>string_slices<span class="signature">(<span class="optional">string_slices</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use string slices</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>string_slices</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets string_slices</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L430">lineno 430</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of string_slices</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="testing_bool_flag"><span class="type-signature"></span>testing_bool_flag<span class="signature">(<span class="optional">testing_bool_flag</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>testing_bool_flag</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>testing_bool_flag</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets testing_bool_flag</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2212">lineno 2212</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of testing_bool_flag</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="testing_float_flag"><span class="type-signature"></span>testing_float_flag<span class="signature">(<span class="optional">testing_float_flag</span>)</span><span class="type-signature"> &rarr; {float}</span></h4>
</dt>
<dd>
<div class="description">
<p>float-flag</p>
<p><em>default</em>: <code>.</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>testing_float_flag</code></td>
<td class="type">
<span class="param-type">float</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets testing_float_flag</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2248">lineno 2248</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of testing_float_flag</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">float</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="testing_int_flag"><span class="type-signature"></span>testing_int_flag<span class="signature">(<span class="optional">testing_int_flag</span>)</span><span class="type-signature"> &rarr; {int}</span></h4>
</dt>
<dd>
<div class="description">
<p>testing_int_flag</p>
<p><em>default</em>: <code>13</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>testing_int_flag</code></td>
<td class="type">
<span class="param-type">int</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets testing_int_flag</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2230">lineno 2230</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of testing_int_flag</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">int</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="testing_prng_seed"><span class="type-signature"></span>testing_prng_seed<span class="signature">(<span class="optional">testing_prng_seed</span>)</span><span class="type-signature"> &rarr; {int}</span></h4>
</dt>
<dd>
<div class="description">
<p>Seed used for threading test randomness</p>
<p><em>default</em>: <code>42</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>testing_prng_seed</code></td>
<td class="type">
<span class="param-type">int</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets testing_prng_seed</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2266">lineno 2266</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of testing_prng_seed</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">int</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace"><span class="type-signature"></span>trace<span class="signature">(<span class="optional">trace</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace function calls</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1600">lineno 1600</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_all_uses"><span class="type-signature"></span>trace_all_uses<span class="signature">(<span class="optional">trace_all_uses</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace all use positions</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_all_uses</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_all_uses</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L862">lineno 862</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_all_uses</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_alloc"><span class="type-signature"></span>trace_alloc<span class="signature">(<span class="optional">trace_alloc</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace register allocator</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_alloc</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_alloc</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L844">lineno 844</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_alloc</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_allocation_folding"><span class="type-signature"></span>trace_allocation_folding<span class="signature">(<span class="optional">trace_allocation_folding</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace allocation folding</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_allocation_folding</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_allocation_folding</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L952">lineno 952</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_allocation_folding</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_bce"><span class="type-signature"></span>trace_bce<span class="signature">(<span class="optional">trace_bce</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace array bounds check elimination</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_bce</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_bce</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1132">lineno 1132</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_bce</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_check_elimination"><span class="type-signature"></span>trace_check_elimination<span class="signature">(<span class="optional">trace_check_elimination</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace check elimination phase</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_check_elimination</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_check_elimination</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L682">lineno 682</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_check_elimination</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_code_flushing"><span class="type-signature"></span>trace_code_flushing<span class="signature">(<span class="optional">trace_code_flushing</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace code flushing progress</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_code_flushing</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_code_flushing</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1924">lineno 1924</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_code_flushing</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_contexts"><span class="type-signature"></span>trace_contexts<span class="signature">(<span class="optional">trace_contexts</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace contexts operations</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_contexts</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_contexts</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2608">lineno 2608</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_contexts</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_dead_code_elimination"><span class="type-signature"></span>trace_dead_code_elimination<span class="signature">(<span class="optional">trace_dead_code_elimination</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace dead code elimination</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_dead_code_elimination</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_dead_code_elimination</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1240">lineno 1240</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_dead_code_elimination</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_debug_json"><span class="type-signature"></span>trace_debug_json<span class="signature">(<span class="optional">trace_debug_json</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace debugging JSON request/response</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_debug_json</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_debug_json</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1798">lineno 1798</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_debug_json</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_deopt"><span class="type-signature"></span>trace_deopt<span class="signature">(<span class="optional">trace_deopt</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace optimize function deoptimization</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_deopt</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_deopt</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1744">lineno 1744</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_deopt</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_escape_analysis"><span class="type-signature"></span>trace_escape_analysis<span class="signature">(<span class="optional">trace_escape_analysis</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace hydrogen escape analysis</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_escape_analysis</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_escape_analysis</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L934">lineno 934</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_escape_analysis</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_generalization"><span class="type-signature"></span>trace_generalization<span class="signature">(<span class="optional">trace_generalization</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace map generalization</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_generalization</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_generalization</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L988">lineno 988</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_generalization</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_gvn"><span class="type-signature"></span>trace_gvn<span class="signature">(<span class="optional">trace_gvn</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace global value numbering</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_gvn</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_gvn</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L898">lineno 898</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_gvn</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_hydrogen"><span class="type-signature"></span>trace_hydrogen<span class="signature">(<span class="optional">trace_hydrogen</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace generated hydrogen to file</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_hydrogen</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_hydrogen</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L700">lineno 700</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_hydrogen</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_hydrogen_file"><span class="type-signature"></span>trace_hydrogen_file<span class="signature">(<span class="optional">trace_hydrogen_file</span>)</span><span class="type-signature"> &rarr; {string}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace hydrogen to given file name</p>
<p><em>default</em>: <code>null</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_hydrogen_file</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_hydrogen_file</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L754">lineno 754</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_hydrogen_file</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">string</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_hydrogen_filter"><span class="type-signature"></span>trace_hydrogen_filter<span class="signature">(<span class="optional">trace_hydrogen_filter</span>)</span><span class="type-signature"> &rarr; {string}</span></h4>
</dt>
<dd>
<div class="description">
<p>hydrogen tracing filter</p>
<p><em>default</em>: <code>*</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_hydrogen_filter</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_hydrogen_filter</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L718">lineno 718</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_hydrogen_filter</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">string</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_hydrogen_stubs"><span class="type-signature"></span>trace_hydrogen_stubs<span class="signature">(<span class="optional">trace_hydrogen_stubs</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace generated hydrogen for stubs</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_hydrogen_stubs</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_hydrogen_stubs</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L736">lineno 736</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_hydrogen_stubs</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_ic"><span class="type-signature"></span>trace_ic<span class="signature">(<span class="optional">trace_ic</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace inline cache state transitions</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_ic</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_ic</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2716">lineno 2716</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_ic</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_inlining"><span class="type-signature"></span>trace_inlining<span class="signature">(<span class="optional">trace_inlining</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace inlining decisions</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_inlining</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_inlining</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L790">lineno 790</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_inlining</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_isolates"><span class="type-signature"></span>trace_isolates<span class="signature">(<span class="optional">trace_isolates</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace isolate state changes</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_isolates</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_isolates</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2806">lineno 2806</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_isolates</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_lazy"><span class="type-signature"></span>trace_lazy<span class="signature">(<span class="optional">trace_lazy</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace lazy compilation</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_lazy</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_lazy</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2788">lineno 2788</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_lazy</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_load_elimination"><span class="type-signature"></span>trace_load_elimination<span class="signature">(<span class="optional">trace_load_elimination</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace load elimination</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_load_elimination</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_load_elimination</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L808">lineno 808</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_load_elimination</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_migration"><span class="type-signature"></span>trace_migration<span class="signature">(<span class="optional">trace_migration</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace object migration</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_migration</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_migration</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L970">lineno 970</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_migration</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_opt"><span class="type-signature"></span>trace_opt<span class="signature">(<span class="optional">trace_opt</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace lazy optimization</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_opt</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_opt</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1636">lineno 1636</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_opt</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_opt_stats"><span class="type-signature"></span>trace_opt_stats<span class="signature">(<span class="optional">trace_opt_stats</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace lazy optimization statistics</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_opt_stats</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_opt_stats</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1654">lineno 1654</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_opt_stats</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_opt_verbose"><span class="type-signature"></span>trace_opt_verbose<span class="signature">(<span class="optional">trace_opt_verbose</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>extra verbose compilation tracing</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_opt_verbose</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_opt_verbose</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1420">lineno 1420</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_opt_verbose</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_osr"><span class="type-signature"></span>trace_osr<span class="signature">(<span class="optional">trace_osr</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace on-stack replacement</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_osr</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_osr</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1276">lineno 1276</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_osr</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_parse"><span class="type-signature"></span>trace_parse<span class="signature">(<span class="optional">trace_parse</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace parsing and preparsing</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_parse</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_parse</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2122">lineno 2122</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_parse</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_phase"><span class="type-signature"></span>trace_phase<span class="signature">(<span class="optional">trace_phase</span>)</span><span class="type-signature"> &rarr; {string}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace generated IR for specified phases</p>
<p><em>default</em>: <code>HLZ</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_phase</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_phase</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L772">lineno 772</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_phase</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">string</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_range"><span class="type-signature"></span>trace_range<span class="signature">(<span class="optional">trace_range</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace range analysis</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_range</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_range</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L880">lineno 880</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_range</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_regexp_bytecodes"><span class="type-signature"></span>trace_regexp_bytecodes<span class="signature">(<span class="optional">trace_regexp_bytecodes</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace regexp bytecode execution</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_regexp_bytecodes</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_regexp_bytecodes</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2824">lineno 2824</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_regexp_bytecodes</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_representation"><span class="type-signature"></span>trace_representation<span class="signature">(<span class="optional">trace_representation</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace representation types</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_representation</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_representation</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L916">lineno 916</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_representation</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_sim"><span class="type-signature"></span>trace_sim<span class="signature">(<span class="optional">trace_sim</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>Trace simulator execution</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_sim</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_sim</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2140">lineno 2140</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_sim</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_store_elimination"><span class="type-signature"></span>trace_store_elimination<span class="signature">(<span class="optional">trace_store_elimination</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>trace store elimination</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trace_store_elimination</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trace_store_elimination</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L826">lineno 826</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trace_store_elimination</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="track_computed_fields"><span class="type-signature"></span>track_computed_fields<span class="signature">(<span class="optional">track_computed_fields</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>track computed boilerplate fields</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>track_computed_fields</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets track_computed_fields</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L358">lineno 358</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of track_computed_fields</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="track_double_fields"><span class="type-signature"></span>track_double_fields<span class="signature">(<span class="optional">track_double_fields</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>track fields with double values</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>track_double_fields</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets track_double_fields</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L322">lineno 322</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of track_double_fields</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="track_field_types"><span class="type-signature"></span>track_field_types<span class="signature">(<span class="optional">track_field_types</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>track field types</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>track_field_types</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets track_field_types</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L376">lineno 376</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of track_field_types</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="track_fields"><span class="type-signature"></span>track_fields<span class="signature">(<span class="optional">track_fields</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>track fields with only smi values</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>track_fields</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets track_fields</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L304">lineno 304</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of track_fields</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="track_heap_object_fields"><span class="type-signature"></span>track_heap_object_fields<span class="signature">(<span class="optional">track_heap_object_fields</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>track fields with heap values</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>track_heap_object_fields</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets track_heap_object_fields</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L340">lineno 340</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of track_heap_object_fields</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trap_on_abort"><span class="type-signature"></span>trap_on_abort<span class="signature">(<span class="optional">trap_on_abort</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>replace aborts by breakpoints</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trap_on_abort</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trap_on_abort</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2554">lineno 2554</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trap_on_abort</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trap_on_deopt"><span class="type-signature"></span>trap_on_deopt<span class="signature">(<span class="optional">trap_on_deopt</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>put a break point before deoptimizing</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trap_on_deopt</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets trap_on_deopt</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1060">lineno 1060</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of trap_on_deopt</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="unbox_double_arrays"><span class="type-signature"></span>unbox_double_arrays<span class="signature">(<span class="optional">unbox_double_arrays</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>automatically unbox arrays of doubles</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>unbox_double_arrays</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets unbox_double_arrays</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L412">lineno 412</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of unbox_double_arrays</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="unreachable_code_elimination"><span class="type-signature"></span>unreachable_code_elimination<span class="signature">(<span class="optional">unreachable_code_elimination</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>eliminate unreachable code</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>unreachable_code_elimination</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets unreachable_code_elimination</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1258">lineno 1258</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of unreachable_code_elimination</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_allocation_folding"><span class="type-signature"></span>use_allocation_folding<span class="signature">(<span class="optional">use_allocation_folding</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use allocation folding</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>use_allocation_folding</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets use_allocation_folding</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L574">lineno 574</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of use_allocation_folding</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_canonicalizing"><span class="type-signature"></span>use_canonicalizing<span class="signature">(<span class="optional">use_canonicalizing</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use hydrogen instruction canonicalizing</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>use_canonicalizing</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets use_canonicalizing</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L520">lineno 520</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of use_canonicalizing</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_escape_analysis"><span class="type-signature"></span>use_escape_analysis<span class="signature">(<span class="optional">use_escape_analysis</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use hydrogen escape analysis</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>use_escape_analysis</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets use_escape_analysis</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L556">lineno 556</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of use_escape_analysis</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_gvn"><span class="type-signature"></span>use_gvn<span class="signature">(<span class="optional">use_gvn</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use hydrogen global value numbering</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>use_gvn</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets use_gvn</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L484">lineno 484</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of use_gvn</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_ic"><span class="type-signature"></span>use_ic<span class="signature">(<span class="optional">use_ic</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use inline caching</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>use_ic</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets use_ic</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2050">lineno 2050</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of use_ic</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_inlining"><span class="type-signature"></span>use_inlining<span class="signature">(<span class="optional">use_inlining</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use function inlining</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>use_inlining</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets use_inlining</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L538">lineno 538</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of use_inlining</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_local_allocation_folding"><span class="type-signature"></span>use_local_allocation_folding<span class="signature">(<span class="optional">use_local_allocation_folding</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>only fold in basic blocks</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>use_local_allocation_folding</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets use_local_allocation_folding</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L592">lineno 592</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of use_local_allocation_folding</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_osr"><span class="type-signature"></span>use_osr<span class="signature">(<span class="optional">use_osr</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>use on-stack replacement</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>use_osr</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets use_osr</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L1114">lineno 1114</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of use_osr</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_strict"><span class="type-signature"></span>use_strict<span class="signature">(<span class="optional">use_strict</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>enforce strict mode</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>use_strict</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets use_strict</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L16">lineno 16</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of use_strict</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_verbose_printer"><span class="type-signature"></span>use_verbose_printer<span class="signature">(<span class="optional">use_verbose_printer</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>allows verbose printing</p>
<p><em>default</em>: <code>true</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>use_verbose_printer</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets use_verbose_printer</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2086">lineno 2086</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of use_verbose_printer</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="verify_heap"><span class="type-signature"></span>verify_heap<span class="signature">(<span class="optional">verify_heap</span>)</span><span class="type-signature"> &rarr; {bool}</span></h4>
</dt>
<dd>
<div class="description">
<p>verify heap pointers before and after GC</p>
<p><em>default</em>: <code>false</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>verify_heap</code></td>
<td class="type">
<span class="param-type">bool</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>when supplied it sets verify_heap</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/index.js#L2032">lineno 2032</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the current value of verify_heap</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">bool</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT
