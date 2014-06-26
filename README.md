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
    - [allow_natives_syntax](#allow_natives_syntax)
    - [always_compact](#always_compact)
    - [always_opt](#always_opt)
    - [always_osr](#always_osr)
    - [cache_prototype_transitions](#cache_prototype_transitions)
    - [check_elimination](#check_elimination)
    - [code_comments](#code_comments)
    - [code_stats](#code_stats)
    - [compilation_cache](#compilation_cache)
    - [concurrent_sweeping](#concurrent_sweeping)
    - [crankshaft](#crankshaft)
    - [dead_code_elimination](#dead_code_elimination)
    - [debug_compile_events](#debug_compile_events)
    - [debug_sim](#debug_sim)
    - [debugger](#debugger)
    - [debugger_agent](#debugger_agent)
    - [debugger_port](#debugger_port)
    - [deoptimize_uncommon_cases](#deoptimize_uncommon_cases)
    - [disable_native_files](#disable_native_files)
    - [dump_counters](#dump_counters)
    - [enable_liveedit](#enable_liveedit)
    - [es_staging](#es_staging)
    - [expose_debug_as](#expose_debug_as)
    - [expose_free_buffer](#expose_free_buffer)
    - [expose_gc](#expose_gc)
    - [expose_natives_as](#expose_natives_as)
    - [expose_trigger_failure](#expose_trigger_failure)
    - [fast_math](#fast_math)
    - [fold_constants](#fold_constants)
    - [frame_count](#frame_count)
    - [gc_global](#gc_global)
    - [gc_interval](#gc_interval)
    - [gc_verbose](#gc_verbose)
    - [gdbjit](#gdbjit)
    - [gdbjit_dump](#gdbjit_dump)
    - [gdbjit_full](#gdbjit_full)
    - [gvn_iterations](#gvn_iterations)
    - [hard_abort](#hard_abort)
    - [harmony](#harmony)
    - [harmony_arrays](#harmony_arrays)
    - [harmony_generators](#harmony_generators)
    - [harmony_iteration](#harmony_iteration)
    - [harmony_maths](#harmony_maths)
    - [harmony_promises](#harmony_promises)
    - [harmony_proxies](#harmony_proxies)
    - [harmony_scoping](#harmony_scoping)
    - [harmony_strings](#harmony_strings)
    - [harmony_typeof](#harmony_typeof)
    - [heap_stats](#heap_stats)
    - [help](#help)
    - [hydrogen_filter](#hydrogen_filter)
    - [hydrogen_stats](#hydrogen_stats)
    - [incremental_marking](#incremental_marking)
    - [incremental_marking_steps](#incremental_marking_steps)
    - [inline_accessors](#inline_accessors)
    - [inline_arguments](#inline_arguments)
    - [inline_construct](#inline_construct)
    - [inline_new](#inline_new)
    - [job_based_sweeping](#job_based_sweeping)
    - [lazy](#lazy)
    - [ll_prof](#ll_prof)
    - [load_elimination](#load_elimination)
    - [log_all](#log_all)
    - [log_api](#log_api)
    - [log_handles](#log_handles)
    - [log_instruction_stats](#log_instruction_stats)
    - [log_internal_timer_events](#log_internal_timer_events)
    - [log_regexp](#log_regexp)
    - [log_suspect](#log_suspect)
    - [logfile](#logfile)
    - [logfile_per_isolate](#logfile_per_isolate)
    - [loop_invariant_code_motion](#loop_invariant_code_motion)
    - [map_counters](#map_counters)
    - [max_executable_size](#max_executable_size)
    - [max_inlining_levels](#max_inlining_levels)
    - [max_old_space_size](#max_old_space_size)
    - [opt](#opt)
    - [optimize_closures](#optimize_closures)
    - [packed_arrays](#packed_arrays)
    - [parallel_sweeping](#parallel_sweeping)
    - [polymorphic_inlining](#polymorphic_inlining)
    - [predictable](#predictable)
    - [prepare_always_opt](#prepare_always_opt)
    - [pretenuring](#pretenuring)
    - [pretenuring_call_new](#pretenuring_call_new)
    - [print_ast](#print_ast)
    - [print_builtin_ast](#print_builtin_ast)
    - [print_builtin_scopes](#print_builtin_scopes)
    - [print_deopt_stress](#print_deopt_stress)
    - [print_global_handles](#print_global_handles)
    - [print_handles](#print_handles)
    - [print_interface_depth](#print_interface_depth)
    - [print_interface_details](#print_interface_details)
    - [print_interfaces](#print_interfaces)
    - [print_scopes](#print_scopes)
    - [print_source](#print_source)
    - [regexp_optimization](#regexp_optimization)
    - [self_opt_count](#self_opt_count)
    - [smi_binop](#smi_binop)
    - [smi_only_arrays](#smi_only_arrays)
    - [stack_trace_limit](#stack_trace_limit)
    - [stop_at](#stop_at)
    - [stop_sim_at](#stop_sim_at)
    - [store_elimination](#store_elimination)
    - [stress_environments](#stress_environments)
    - [stress_pointer_maps](#stress_pointer_maps)
    - [stress_runs](#stress_runs)
    - [string_slices](#string_slices)
    - [testing_bool_flag](#testing_bool_flag)
    - [testing_float_flag](#testing_float_flag)
    - [testing_int_flag](#testing_int_flag)
    - [testing_prng_seed](#testing_prng_seed)
    - [trace](#trace)
    - [trace_all_uses](#trace_all_uses)
    - [trace_alloc](#trace_alloc)
    - [trace_allocation_folding](#trace_allocation_folding)
    - [trace_bce](#trace_bce)
    - [trace_check_elimination](#trace_check_elimination)
    - [trace_code_flushing](#trace_code_flushing)
    - [trace_contexts](#trace_contexts)
    - [trace_dead_code_elimination](#trace_dead_code_elimination)
    - [trace_debug_json](#trace_debug_json)
    - [trace_deopt](#trace_deopt)
    - [trace_escape_analysis](#trace_escape_analysis)
    - [trace_generalization](#trace_generalization)
    - [trace_gvn](#trace_gvn)
    - [trace_hydrogen](#trace_hydrogen)
    - [trace_hydrogen_file](#trace_hydrogen_file)
    - [trace_hydrogen_filter](#trace_hydrogen_filter)
    - [trace_hydrogen_stubs](#trace_hydrogen_stubs)
    - [trace_ic](#trace_ic)
    - [trace_inlining](#trace_inlining)
    - [trace_isolates](#trace_isolates)
    - [trace_lazy](#trace_lazy)
    - [trace_load_elimination](#trace_load_elimination)
    - [trace_migration](#trace_migration)
    - [trace_opt](#trace_opt)
    - [trace_opt_stats](#trace_opt_stats)
    - [trace_opt_verbose](#trace_opt_verbose)
    - [trace_osr](#trace_osr)
    - [trace_parse](#trace_parse)
    - [trace_phase](#trace_phase)
    - [trace_range](#trace_range)
    - [trace_regexp_bytecodes](#trace_regexp_bytecodes)
    - [trace_representation](#trace_representation)
    - [trace_sim](#trace_sim)
    - [trace_store_elimination](#trace_store_elimination)
    - [track_computed_fields](#track_computed_fields)
    - [track_double_fields](#track_double_fields)
    - [track_field_types](#track_field_types)
    - [track_fields](#track_fields)
    - [track_heap_object_fields](#track_heap_object_fields)
    - [trap_on_abort](#trap_on_abort)
    - [trap_on_deopt](#trap_on_deopt)
    - [unbox_double_arrays](#unbox_double_arrays)
    - [unreachable_code_elimination](#unreachable_code_elimination)
    - [use_allocation_folding](#use_allocation_folding)
    - [use_canonicalizing](#use_canonicalizing)
    - [use_escape_analysis](#use_escape_analysis)
    - [use_gvn](#use_gvn)
    - [use_ic](#use_ic)
    - [use_inlining](#use_inlining)
    - [use_local_allocation_folding](#use_local_allocation_folding)
    - [use_osr](#use_osr)
    - [use_strict](#use_strict)
    - [use_verbose_printer](#use_verbose_printer)
    - [verify_heap](#verify_heap)
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
<h4 class="name" id="allow_natives_syntax"><span class="type-signature"></span>allow_natives_syntax<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>allow natives syntax
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1385">lineno 1385</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="always_compact"><span class="type-signature"></span>always_compact<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Perform compaction on every full GC
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1361">lineno 1361</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="always_opt"><span class="type-signature"></span>always_opt<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>always try to optimize functions
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1111">lineno 1111</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="always_osr"><span class="type-signature"></span>always_osr<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>always try to OSR functions
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1123">lineno 1123</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="cache_prototype_transitions"><span class="type-signature"></span>cache_prototype_transitions<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>cache prototype transitions
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1171">lineno 1171</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="check_elimination"><span class="type-signature"></span>check_elimination<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use check elimination
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L767">lineno 767</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="code_comments"><span class="type-signature"></span>code_comments<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>emit comments in code disassembly
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L943">lineno 943</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="code_stats"><span class="type-signature"></span>code_stats<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>report code statistics after GC
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1747">lineno 1747</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="compilation_cache"><span class="type-signature"></span>compilation_cache<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable compilation cache
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1159">lineno 1159</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="concurrent_sweeping"><span class="type-signature"></span>concurrent_sweeping<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable concurrent sweeping
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1313">lineno 1313</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="crankshaft"><span class="type-signature"></span>crankshaft<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use crankshaft
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L289">lineno 289</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="dead_code_elimination"><span class="type-signature"></span>dead_code_elimination<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use dead code elimination
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L791">lineno 791</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="debug_compile_events"><span class="type-signature"></span>debug_compile_events<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Enable debugger compile events
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1583">lineno 1583</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="debug_sim"><span class="type-signature"></span>debug_sim<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Enable debugging the simulator
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1421">lineno 1421</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="debugger"><span class="type-signature"></span>debugger<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Enable JavaScript debugger
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1535">lineno 1535</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="debugger_agent"><span class="type-signature"></span>debugger_agent<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Enable debugger agent
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1547">lineno 1547</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="debugger_port"><span class="type-signature"></span>debugger_port<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Port to use for remote debugging
Default: <code>5858</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1559">lineno 1559</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="deoptimize_uncommon_cases"><span class="type-signature"></span>deoptimize_uncommon_cases<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>deoptimize uncommon cases
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L707">lineno 707</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="disable_native_files"><span class="type-signature"></span>disable_native_files<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>disable builtin natives files
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1027">lineno 1027</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="dump_counters"><span class="type-signature"></span>dump_counters<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Dump counters on exit
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1523">lineno 1523</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="enable_liveedit"><span class="type-signature"></span>enable_liveedit<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable liveedit experimental feature
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1195">lineno 1195</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="es_staging"><span class="type-signature"></span>es_staging<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable upcoming ES6+ features
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L17">lineno 17</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="expose_debug_as"><span class="type-signature"></span>expose_debug_as<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>expose debug in global object
Default: <code>null</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L967">lineno 967</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="expose_free_buffer"><span class="type-signature"></span>expose_free_buffer<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>expose freeBuffer extension
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L979">lineno 979</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="expose_gc"><span class="type-signature"></span>expose_gc<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>expose gc extension
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L991">lineno 991</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="expose_natives_as"><span class="type-signature"></span>expose_natives_as<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>expose natives in global object
Default: <code>null</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L955">lineno 955</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="expose_trigger_failure"><span class="type-signature"></span>expose_trigger_failure<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>expose trigger-failure extension
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1003">lineno 1003</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="fast_math"><span class="type-signature"></span>fast_math<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>faster (but maybe less accurate) math functions
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L419">lineno 419</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="fold_constants"><span class="type-signature"></span>fold_constants<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use constant folding
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L803">lineno 803</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="frame_count"><span class="type-signature"></span>frame_count<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>number of stack frames inspected by the profiler
Default: <code>1</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L907">lineno 907</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="gc_global"><span class="type-signature"></span>gc_global<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>always perform global GCs
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1241">lineno 1241</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="gc_interval"><span class="type-signature"></span>gc_interval<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>garbage collect after <n> allocations
Default: <code>-1</code></n></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1253">lineno 1253</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="gc_verbose"><span class="type-signature"></span>gc_verbose<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>print stuff during garbage collection
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1723">lineno 1723</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="gdbjit"><span class="type-signature"></span>gdbjit<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable GDBJIT interface (disables compacting GC)
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1595">lineno 1595</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="gdbjit_dump"><span class="type-signature"></span>gdbjit_dump<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>dump elf objects with debug info to disk
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1619">lineno 1619</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="gdbjit_full"><span class="type-signature"></span>gdbjit_full<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable GDBJIT interface for all code objects
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1607">lineno 1607</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="gvn_iterations"><span class="type-signature"></span>gvn_iterations<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>maximum number of GVN fix-point iterations
Default: <code>3</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L323">lineno 323</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="hard_abort"><span class="type-signature"></span>hard_abort<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>abort by crashing
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1207">lineno 1207</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony"><span class="type-signature"></span>harmony<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable all harmony features (except typeof)
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L137">lineno 137</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_arrays"><span class="type-signature"></span>harmony_arrays<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony arrays
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L101">lineno 101</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_generators"><span class="type-signature"></span>harmony_generators<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony generators
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L65">lineno 65</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_iteration"><span class="type-signature"></span>harmony_iteration<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony iteration (for-of)
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L77">lineno 77</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_maths"><span class="type-signature"></span>harmony_maths<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony math functions
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L113">lineno 113</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_promises"><span class="type-signature"></span>harmony_promises<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>(dummy flag, has no effect)
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L125">lineno 125</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_proxies"><span class="type-signature"></span>harmony_proxies<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony proxies
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L53">lineno 53</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_scoping"><span class="type-signature"></span>harmony_scoping<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony block scoping
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L41">lineno 41</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_strings"><span class="type-signature"></span>harmony_strings<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony string
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L89">lineno 89</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmony_typeof"><span class="type-signature"></span>harmony_typeof<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable harmony semantics for typeof
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L29">lineno 29</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="heap_stats"><span class="type-signature"></span>heap_stats<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>report heap statistics before and after GC
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1735">lineno 1735</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="help"><span class="type-signature"></span>help<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Print usage message, including flags, on console
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1511">lineno 1511</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="hydrogen_filter"><span class="type-signature"></span>hydrogen_filter<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>optimization filter
Default: <code>*</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L299">lineno 299</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="hydrogen_stats"><span class="type-signature"></span>hydrogen_stats<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>print statistics for hydrogen
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L431">lineno 431</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="incremental_marking"><span class="type-signature"></span>incremental_marking<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use incremental marking
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1277">lineno 1277</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="incremental_marking_steps"><span class="type-signature"></span>incremental_marking_steps<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>do incremental marking steps
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1289">lineno 1289</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="inline_accessors"><span class="type-signature"></span>inline_accessors<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>inline JavaScript accessors
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L895">lineno 895</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="inline_arguments"><span class="type-signature"></span>inline_arguments<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>inline functions with arguments object
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L883">lineno 883</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="inline_construct"><span class="type-signature"></span>inline_construct<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>inline constructor calls
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L871">lineno 871</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="inline_new"><span class="type-signature"></span>inline_new<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use fast inline allocation
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1039">lineno 1039</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="job_based_sweeping"><span class="type-signature"></span>job_based_sweeping<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable job based sweeping
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1325">lineno 1325</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="lazy"><span class="type-signature"></span>lazy<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use lazy compilation
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1063">lineno 1063</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="ll_prof"><span class="type-signature"></span>ll_prof<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Enable low-level linux profiler.
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1949">lineno 1949</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="load_elimination"><span class="type-signature"></span>load_elimination<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use load elimination
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L755">lineno 755</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="log_all"><span class="type-signature"></span>log_all<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Log all events to the log file.
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1865">lineno 1865</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="log_api"><span class="type-signature"></span>log_api<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Log API events to the log file.
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1877">lineno 1877</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="log_handles"><span class="type-signature"></span>log_handles<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Log global handle events.
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1889">lineno 1889</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="log_instruction_stats"><span class="type-signature"></span>log_instruction_stats<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Log AArch64 instruction statistics.
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1973">lineno 1973</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="log_internal_timer_events"><span class="type-signature"></span>log_internal_timer_events<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Time internal events.
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1961">lineno 1961</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="log_regexp"><span class="type-signature"></span>log_regexp<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Log regular expression execution.
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1913">lineno 1913</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="log_suspect"><span class="type-signature"></span>log_suspect<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Log suspect operations.
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1901">lineno 1901</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="logfile"><span class="type-signature"></span>logfile<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Specify the name of the log file.
Default: <code>v8.log</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1925">lineno 1925</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="logfile_per_isolate"><span class="type-signature"></span>logfile_per_isolate<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Separate log files for each isolate.
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1937">lineno 1937</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="loop_invariant_code_motion"><span class="type-signature"></span>loop_invariant_code_motion<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>loop invariant code motion
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L407">lineno 407</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="map_counters"><span class="type-signature"></span>map_counters<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Map counters to a file
Default: ``</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1571">lineno 1571</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="max_executable_size"><span class="type-signature"></span>max_executable_size<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>max size of executable memory (in Mbytes)
Default: <code>0</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1229">lineno 1229</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="max_inlining_levels"><span class="type-signature"></span>max_inlining_levels<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>maximum number of inlining levels
Default: <code>5</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L395">lineno 395</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="max_old_space_size"><span class="type-signature"></span>max_old_space_size<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>max size of the old space (in Mbytes)
Default: <code>0</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1217">lineno 1217</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="opt"><span class="type-signature"></span>opt<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use adaptive optimizations
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1099">lineno 1099</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="optimize_closures"><span class="type-signature"></span>optimize_closures<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>optimize closures
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L861">lineno 861</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="packed_arrays"><span class="type-signature"></span>packed_arrays<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>optimizes arrays that have no holes
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L149">lineno 149</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="parallel_sweeping"><span class="type-signature"></span>parallel_sweeping<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable parallel sweeping
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1301">lineno 1301</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="polymorphic_inlining"><span class="type-signature"></span>polymorphic_inlining<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>polymorphic inlining
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L719">lineno 719</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="predictable"><span class="type-signature"></span>predictable<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enable predictable mode
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1499">lineno 1499</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="prepare_always_opt"><span class="type-signature"></span>prepare_always_opt<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>prepare for turning on always opt
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1135">lineno 1135</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="pretenuring"><span class="type-signature"></span>pretenuring<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>allocate objects in old space
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L173">lineno 173</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="pretenuring_call_new"><span class="type-signature"></span>pretenuring_call_new<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>pretenure call new
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L185">lineno 185</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_ast"><span class="type-signature"></span>print_ast<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>print source AST
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1643">lineno 1643</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_builtin_ast"><span class="type-signature"></span>print_builtin_ast<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>print source AST for builtins
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1653">lineno 1653</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_builtin_scopes"><span class="type-signature"></span>print_builtin_scopes<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>print scopes for builtins
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1689">lineno 1689</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_deopt_stress"><span class="type-signature"></span>print_deopt_stress<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>print number of possible deopt points
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L683">lineno 683</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_global_handles"><span class="type-signature"></span>print_global_handles<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>report global handles after GC
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1771">lineno 1771</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_handles"><span class="type-signature"></span>print_handles<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>report handles after GC
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1759">lineno 1759</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_interface_depth"><span class="type-signature"></span>print_interface_depth<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>depth for printing interfaces
Default: <code>5</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1817">lineno 1817</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_interface_details"><span class="type-signature"></span>print_interface_details<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>print interface inference details
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1805">lineno 1805</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_interfaces"><span class="type-signature"></span>print_interfaces<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>print interfaces
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1795">lineno 1795</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_scopes"><span class="type-signature"></span>print_scopes<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>print scopes
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1701">lineno 1701</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="print_source"><span class="type-signature"></span>print_source<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>pretty print source code
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1631">lineno 1631</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="regexp_optimization"><span class="type-signature"></span>regexp_optimization<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>generate optimized regexp code
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1445">lineno 1445</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="self_opt_count"><span class="type-signature"></span>self_opt_count<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>call count before self-optimization
Default: <code>130</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L919">lineno 919</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="smi_binop"><span class="type-signature"></span>smi_binop<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>support smi representation in binary operations
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L255">lineno 255</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="smi_only_arrays"><span class="type-signature"></span>smi_only_arrays<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>tracks arrays with only smi values
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L161">lineno 161</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="stack_trace_limit"><span class="type-signature"></span>stack_trace_limit<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>number of stack frames to capture
Default: <code>10</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1015">lineno 1015</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="stop_at"><span class="type-signature"></span>stop_at<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>function name where to insert a breakpoint
Default: ``</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1665">lineno 1665</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="stop_sim_at"><span class="type-signature"></span>stop_sim_at<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Simulator stop after x number of instructions
Default: <code>0</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1433">lineno 1433</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="store_elimination"><span class="type-signature"></span>store_elimination<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use store elimination
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L779">lineno 779</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="stress_environments"><span class="type-signature"></span>stress_environments<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>environment for every instruction
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L671">lineno 671</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="stress_pointer_maps"><span class="type-signature"></span>stress_pointer_maps<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>pointer map for every instruction
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L659">lineno 659</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="stress_runs"><span class="type-signature"></span>stress_runs<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>number of stress runs
Default: <code>0</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L851">lineno 851</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="string_slices"><span class="type-signature"></span>string_slices<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use string slices
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L279">lineno 279</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="testing_bool_flag"><span class="type-signature"></span>testing_bool_flag<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>testing_bool_flag
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1457">lineno 1457</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="testing_float_flag"><span class="type-signature"></span>testing_float_flag<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>float-flag
Default: <code>.</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1477">lineno 1477</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="testing_int_flag"><span class="type-signature"></span>testing_int_flag<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>testing_int_flag
Default: <code>13</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1467">lineno 1467</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="testing_prng_seed"><span class="type-signature"></span>testing_prng_seed<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Seed used for threading test randomness
Default: <code>42</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1487">lineno 1487</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace"><span class="type-signature"></span>trace<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace function calls
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1051">lineno 1051</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_all_uses"><span class="type-signature"></span>trace_all_uses<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace all use positions
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L563">lineno 563</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_alloc"><span class="type-signature"></span>trace_alloc<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace register allocator
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L551">lineno 551</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_allocation_folding"><span class="type-signature"></span>trace_allocation_folding<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace allocation folding
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L623">lineno 623</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_bce"><span class="type-signature"></span>trace_bce<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace array bounds check elimination
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L743">lineno 743</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_check_elimination"><span class="type-signature"></span>trace_check_elimination<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace check elimination phase
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L443">lineno 443</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_code_flushing"><span class="type-signature"></span>trace_code_flushing<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace code flushing progress
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1265">lineno 1265</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_contexts"><span class="type-signature"></span>trace_contexts<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace contexts operations
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1711">lineno 1711</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_dead_code_elimination"><span class="type-signature"></span>trace_dead_code_elimination<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace dead code elimination
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L815">lineno 815</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_debug_json"><span class="type-signature"></span>trace_debug_json<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace debugging JSON request/response
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1183">lineno 1183</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_deopt"><span class="type-signature"></span>trace_deopt<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace optimize function deoptimization
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1147">lineno 1147</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_escape_analysis"><span class="type-signature"></span>trace_escape_analysis<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace hydrogen escape analysis
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L611">lineno 611</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_generalization"><span class="type-signature"></span>trace_generalization<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace map generalization
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L647">lineno 647</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_gvn"><span class="type-signature"></span>trace_gvn<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace global value numbering
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L587">lineno 587</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_hydrogen"><span class="type-signature"></span>trace_hydrogen<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace generated hydrogen to file
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L455">lineno 455</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_hydrogen_file"><span class="type-signature"></span>trace_hydrogen_file<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace hydrogen to given file name
Default: <code>null</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L491">lineno 491</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_hydrogen_filter"><span class="type-signature"></span>trace_hydrogen_filter<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>hydrogen tracing filter
Default: <code>*</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L467">lineno 467</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_hydrogen_stubs"><span class="type-signature"></span>trace_hydrogen_stubs<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace generated hydrogen for stubs
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L479">lineno 479</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_ic"><span class="type-signature"></span>trace_ic<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace inline cache state transitions
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1783">lineno 1783</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_inlining"><span class="type-signature"></span>trace_inlining<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace inlining decisions
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L515">lineno 515</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_isolates"><span class="type-signature"></span>trace_isolates<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace isolate state changes
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1841">lineno 1841</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_lazy"><span class="type-signature"></span>trace_lazy<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace lazy compilation
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1829">lineno 1829</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_load_elimination"><span class="type-signature"></span>trace_load_elimination<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace load elimination
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L527">lineno 527</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_migration"><span class="type-signature"></span>trace_migration<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace object migration
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L635">lineno 635</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_opt"><span class="type-signature"></span>trace_opt<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace lazy optimization
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1075">lineno 1075</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_opt_stats"><span class="type-signature"></span>trace_opt_stats<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace lazy optimization statistics
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1087">lineno 1087</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_opt_verbose"><span class="type-signature"></span>trace_opt_verbose<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>extra verbose compilation tracing
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L931">lineno 931</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_osr"><span class="type-signature"></span>trace_osr<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace on-stack replacement
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L839">lineno 839</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_parse"><span class="type-signature"></span>trace_parse<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace parsing and preparsing
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1397">lineno 1397</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_phase"><span class="type-signature"></span>trace_phase<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace generated IR for specified phases
Default: <code>HLZ</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L503">lineno 503</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_range"><span class="type-signature"></span>trace_range<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace range analysis
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L575">lineno 575</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_regexp_bytecodes"><span class="type-signature"></span>trace_regexp_bytecodes<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace regexp bytecode execution
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1853">lineno 1853</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_representation"><span class="type-signature"></span>trace_representation<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace representation types
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L599">lineno 599</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_sim"><span class="type-signature"></span>trace_sim<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Trace simulator execution
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1409">lineno 1409</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trace_store_elimination"><span class="type-signature"></span>trace_store_elimination<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>trace store elimination
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L539">lineno 539</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="track_computed_fields"><span class="type-signature"></span>track_computed_fields<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>track computed boilerplate fields
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L233">lineno 233</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="track_double_fields"><span class="type-signature"></span>track_double_fields<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>track fields with double values
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L209">lineno 209</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="track_field_types"><span class="type-signature"></span>track_field_types<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>track field types
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L245">lineno 245</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="track_fields"><span class="type-signature"></span>track_fields<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>track fields with only smi values
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L197">lineno 197</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="track_heap_object_fields"><span class="type-signature"></span>track_heap_object_fields<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>track fields with heap values
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L221">lineno 221</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trap_on_abort"><span class="type-signature"></span>trap_on_abort<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>replace aborts by breakpoints
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1677">lineno 1677</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="trap_on_deopt"><span class="type-signature"></span>trap_on_deopt<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>put a break point before deoptimizing
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L695">lineno 695</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="unbox_double_arrays"><span class="type-signature"></span>unbox_double_arrays<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>automatically unbox arrays of doubles
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L267">lineno 267</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="unreachable_code_elimination"><span class="type-signature"></span>unreachable_code_elimination<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>eliminate unreachable code
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L827">lineno 827</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_allocation_folding"><span class="type-signature"></span>use_allocation_folding<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use allocation folding
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L371">lineno 371</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_canonicalizing"><span class="type-signature"></span>use_canonicalizing<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use hydrogen instruction canonicalizing
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L335">lineno 335</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_escape_analysis"><span class="type-signature"></span>use_escape_analysis<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use hydrogen escape analysis
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L359">lineno 359</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_gvn"><span class="type-signature"></span>use_gvn<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use hydrogen global value numbering
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L311">lineno 311</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_ic"><span class="type-signature"></span>use_ic<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use inline caching
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1349">lineno 1349</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_inlining"><span class="type-signature"></span>use_inlining<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use function inlining
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L347">lineno 347</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_local_allocation_folding"><span class="type-signature"></span>use_local_allocation_folding<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>only fold in basic blocks
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L383">lineno 383</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_osr"><span class="type-signature"></span>use_osr<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>use on-stack replacement
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L731">lineno 731</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_strict"><span class="type-signature"></span>use_strict<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>enforce strict mode
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L5">lineno 5</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="use_verbose_printer"><span class="type-signature"></span>use_verbose_printer<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>allows verbose printing
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1373">lineno 1373</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="verify_heap"><span class="type-signature"></span>verify_heap<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>verify heap pointers before and after GC
Default: <code>true</code></p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js">flags.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/v8-flags/blob/master/flags.js#L1337">lineno 1337</a>
</li>
</ul></dd>
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
