'use strict';

module.exports = {

  /**
   * enforce strict mode
   * Default: `false`
   * 
   * @name use_strict
   * @private
   * @returns {bool}
   */
  use_strict: {  
    type: 'bool',
    default: false,
    description: 'enforce strict mode' },

  /**
   * enable upcoming ES6+ features
   * Default: `false`
   * 
   * @name es_staging
   * @private
   * @returns {bool}
   */
  es_staging: {  
    type: 'bool',
    default: false,
    description: 'enable upcoming ES6+ features' },

  /**
   * enable harmony semantics for typeof
   * Default: `false`
   * 
   * @name harmony_typeof
   * @private
   * @returns {bool}
   */
  harmony_typeof: {  
    type: 'bool',
    default: false,
    description: 'enable harmony semantics for typeof' },

  /**
   * enable harmony block scoping
   * Default: `false`
   * 
   * @name harmony_scoping
   * @private
   * @returns {bool}
   */
  harmony_scoping: {  
    type: 'bool',
    default: false,
    description: 'enable harmony block scoping' },

  /**
   * enable harmony proxies
   * Default: `false`
   * 
   * @name harmony_proxies
   * @private
   * @returns {bool}
   */
  harmony_proxies: {  
    type: 'bool',
    default: false,
    description: 'enable harmony proxies' },

  /**
   * enable harmony generators
   * Default: `false`
   * 
   * @name harmony_generators
   * @private
   * @returns {bool}
   */
  harmony_generators: {  
    type: 'bool',
    default: false,
    description: 'enable harmony generators' },

  /**
   * enable harmony iteration (for-of)
   * Default: `false`
   * 
   * @name harmony_iteration
   * @private
   * @returns {bool}
   */
  harmony_iteration: {  
    type: 'bool',
    default: false,
    description: 'enable harmony iteration (for-of)' },

  /**
   * enable harmony string
   * Default: `false`
   * 
   * @name harmony_strings
   * @private
   * @returns {bool}
   */
  harmony_strings: {  
    type: 'bool',
    default: false,
    description: 'enable harmony string' },

  /**
   * enable harmony arrays
   * Default: `false`
   * 
   * @name harmony_arrays
   * @private
   * @returns {bool}
   */
  harmony_arrays: {  
    type: 'bool',
    default: false,
    description: 'enable harmony arrays' },

  /**
   * enable harmony math functions
   * Default: `false`
   * 
   * @name harmony_maths
   * @private
   * @returns {bool}
   */
  harmony_maths: {  
    type: 'bool',
    default: false,
    description: 'enable harmony math functions' },

  /**
   * (dummy flag, has no effect)
   * Default: `true`
   * 
   * @name harmony_promises
   * @private
   * @returns {bool}
   */
  harmony_promises: {  
    type: 'bool',
    default: true,
    description: '(dummy flag, has no effect)' },

  /**
   * enable all harmony features (except typeof)
   * Default: `false`
   * 
   * @name harmony
   * @private
   * @returns {bool}
   */
  harmony: {  
    type: 'bool',
    default: false,
    description: 'enable all harmony features (except typeof)' },

  /**
   * optimizes arrays that have no holes
   * Default: `true`
   * 
   * @name packed_arrays
   * @private
   * @returns {bool}
   */
  packed_arrays: {  
    type: 'bool',
    default: true,
    description: 'optimizes arrays that have no holes' },

  /**
   * tracks arrays with only smi values
   * Default: `true`
   * 
   * @name smi_only_arrays
   * @private
   * @returns {bool}
   */
  smi_only_arrays: {  
    type: 'bool',
    default: true,
    description: 'tracks arrays with only smi values' },

  /**
   * allocate objects in old space
   * Default: `true`
   * 
   * @name pretenuring
   * @private
   * @returns {bool}
   */
  pretenuring: {  
    type: 'bool',
    default: true,
    description: 'allocate objects in old space' },

  /**
   * pretenure call new
   * Default: `false`
   * 
   * @name pretenuring_call_new
   * @private
   * @returns {bool}
   */
  pretenuring_call_new: {  
    type: 'bool',
    default: false,
    description: 'pretenure call new' },

  /**
   * track fields with only smi values
   * Default: `true`
   * 
   * @name track_fields
   * @private
   * @returns {bool}
   */
  track_fields: {  
    type: 'bool',
    default: true,
    description: 'track fields with only smi values' },

  /**
   * track fields with double values
   * Default: `true`
   * 
   * @name track_double_fields
   * @private
   * @returns {bool}
   */
  track_double_fields: {  
    type: 'bool',
    default: true,
    description: 'track fields with double values' },

  /**
   * track fields with heap values
   * Default: `true`
   * 
   * @name track_heap_object_fields
   * @private
   * @returns {bool}
   */
  track_heap_object_fields: {  
    type: 'bool',
    default: true,
    description: 'track fields with heap values' },

  /**
   * track computed boilerplate fields
   * Default: `true`
   * 
   * @name track_computed_fields
   * @private
   * @returns {bool}
   */
  track_computed_fields: {  
    type: 'bool',
    default: true,
    description: 'track computed boilerplate fields' },

  /**
   * track field types
   * Default: `true`
   * 
   * @name track_field_types
   * @private
   * @returns {bool}
   */
  track_field_types: {  
    type: 'bool', default: true, description: 'track field types' },

  /**
   * support smi representation in binary operations
   * Default: `true`
   * 
   * @name smi_binop
   * @private
   * @returns {bool}
   */
  smi_binop: {  
    type: 'bool',
    default: true,
    description: 'support smi representation in binary operations' },

  /**
   * automatically unbox arrays of doubles
   * Default: `true`
   * 
   * @name unbox_double_arrays
   * @private
   * @returns {bool}
   */
  unbox_double_arrays: {  
    type: 'bool',
    default: true,
    description: 'automatically unbox arrays of doubles' },

  /**
   * use string slices
   * Default: `true`
   * 
   * @name string_slices
   * @private
   * @returns {bool}
   */
  string_slices: {  
    type: 'bool', default: true, description: 'use string slices' },

  /**
   * use crankshaft
   * Default: `true`
   * 
   * @name crankshaft
   * @private
   * @returns {bool}
   */
  crankshaft: {  
    type: 'bool', default: true, description: 'use crankshaft' },

  /**
   * optimization filter
   * Default: `*`
   * 
   * @name hydrogen_filter
   * @private
   * @returns {string}
   */
  hydrogen_filter: {  
    type: 'string',
    default: '*',
    description: 'optimization filter' },

  /**
   * use hydrogen global value numbering
   * Default: `true`
   * 
   * @name use_gvn
   * @private
   * @returns {bool}
   */
  use_gvn: {  
    type: 'bool',
    default: true,
    description: 'use hydrogen global value numbering' },

  /**
   * maximum number of GVN fix-point iterations
   * Default: `3`
   * 
   * @name gvn_iterations
   * @private
   * @returns {int}
   */
  gvn_iterations: {  
    type: 'int',
    default: 3,
    description: 'maximum number of GVN fix-point iterations' },

  /**
   * use hydrogen instruction canonicalizing
   * Default: `true`
   * 
   * @name use_canonicalizing
   * @private
   * @returns {bool}
   */
  use_canonicalizing: {  
    type: 'bool',
    default: true,
    description: 'use hydrogen instruction canonicalizing' },

  /**
   * use function inlining
   * Default: `true`
   * 
   * @name use_inlining
   * @private
   * @returns {bool}
   */
  use_inlining: {  
    type: 'bool',
    default: true,
    description: 'use function inlining' },

  /**
   * use hydrogen escape analysis
   * Default: `true`
   * 
   * @name use_escape_analysis
   * @private
   * @returns {bool}
   */
  use_escape_analysis: {  
    type: 'bool',
    default: true,
    description: 'use hydrogen escape analysis' },

  /**
   * use allocation folding
   * Default: `true`
   * 
   * @name use_allocation_folding
   * @private
   * @returns {bool}
   */
  use_allocation_folding: {  
    type: 'bool',
    default: true,
    description: 'use allocation folding' },

  /**
   * only fold in basic blocks
   * Default: `false`
   * 
   * @name use_local_allocation_folding
   * @private
   * @returns {bool}
   */
  use_local_allocation_folding: {  
    type: 'bool',
    default: false,
    description: 'only fold in basic blocks' },

  /**
   * maximum number of inlining levels
   * Default: `5`
   * 
   * @name max_inlining_levels
   * @private
   * @returns {int}
   */
  max_inlining_levels: {  
    type: 'int',
    default: 5,
    description: 'maximum number of inlining levels' },

  /**
   * loop invariant code motion
   * Default: `true`
   * 
   * @name loop_invariant_code_motion
   * @private
   * @returns {bool}
   */
  loop_invariant_code_motion: {  
    type: 'bool',
    default: true,
    description: 'loop invariant code motion' },

  /**
   * faster (but maybe less accurate) math functions
   * Default: `true`
   * 
   * @name fast_math
   * @private
   * @returns {bool}
   */
  fast_math: {  
    type: 'bool',
    default: true,
    description: 'faster (but maybe less accurate) math functions' },

  /**
   * print statistics for hydrogen
   * Default: `false`
   * 
   * @name hydrogen_stats
   * @private
   * @returns {bool}
   */
  hydrogen_stats: {  
    type: 'bool',
    default: false,
    description: 'print statistics for hydrogen' },

  /**
   * trace check elimination phase
   * Default: `false`
   * 
   * @name trace_check_elimination
   * @private
   * @returns {bool}
   */
  trace_check_elimination: {  
    type: 'bool',
    default: false,
    description: 'trace check elimination phase' },

  /**
   * trace generated hydrogen to file
   * Default: `false`
   * 
   * @name trace_hydrogen
   * @private
   * @returns {bool}
   */
  trace_hydrogen: {  
    type: 'bool',
    default: false,
    description: 'trace generated hydrogen to file' },

  /**
   * hydrogen tracing filter
   * Default: `*`
   * 
   * @name trace_hydrogen_filter
   * @private
   * @returns {string}
   */
  trace_hydrogen_filter: {  
    type: 'string',
    default: '*',
    description: 'hydrogen tracing filter' },

  /**
   * trace generated hydrogen for stubs
   * Default: `false`
   * 
   * @name trace_hydrogen_stubs
   * @private
   * @returns {bool}
   */
  trace_hydrogen_stubs: {  
    type: 'bool',
    default: false,
    description: 'trace generated hydrogen for stubs' },

  /**
   * trace hydrogen to given file name
   * Default: `null`
   * 
   * @name trace_hydrogen_file
   * @private
   * @returns {string}
   */
  trace_hydrogen_file: {  
    type: 'string',
    default: null,
    description: 'trace hydrogen to given file name' },

  /**
   * trace generated IR for specified phases
   * Default: `HLZ`
   * 
   * @name trace_phase
   * @private
   * @returns {string}
   */
  trace_phase: {  
    type: 'string',
    default: 'HLZ',
    description: 'trace generated IR for specified phases' },

  /**
   * trace inlining decisions
   * Default: `false`
   * 
   * @name trace_inlining
   * @private
   * @returns {bool}
   */
  trace_inlining: {  
    type: 'bool',
    default: false,
    description: 'trace inlining decisions' },

  /**
   * trace load elimination
   * Default: `false`
   * 
   * @name trace_load_elimination
   * @private
   * @returns {bool}
   */
  trace_load_elimination: {  
    type: 'bool',
    default: false,
    description: 'trace load elimination' },

  /**
   * trace store elimination
   * Default: `false`
   * 
   * @name trace_store_elimination
   * @private
   * @returns {bool}
   */
  trace_store_elimination: {  
    type: 'bool',
    default: false,
    description: 'trace store elimination' },

  /**
   * trace register allocator
   * Default: `false`
   * 
   * @name trace_alloc
   * @private
   * @returns {bool}
   */
  trace_alloc: {  
    type: 'bool',
    default: false,
    description: 'trace register allocator' },

  /**
   * trace all use positions
   * Default: `false`
   * 
   * @name trace_all_uses
   * @private
   * @returns {bool}
   */
  trace_all_uses: {  
    type: 'bool',
    default: false,
    description: 'trace all use positions' },

  /**
   * trace range analysis
   * Default: `false`
   * 
   * @name trace_range
   * @private
   * @returns {bool}
   */
  trace_range: {  
    type: 'bool',
    default: false,
    description: 'trace range analysis' },

  /**
   * trace global value numbering
   * Default: `false`
   * 
   * @name trace_gvn
   * @private
   * @returns {bool}
   */
  trace_gvn: {  
    type: 'bool',
    default: false,
    description: 'trace global value numbering' },

  /**
   * trace representation types
   * Default: `false`
   * 
   * @name trace_representation
   * @private
   * @returns {bool}
   */
  trace_representation: {  
    type: 'bool',
    default: false,
    description: 'trace representation types' },

  /**
   * trace hydrogen escape analysis
   * Default: `false`
   * 
   * @name trace_escape_analysis
   * @private
   * @returns {bool}
   */
  trace_escape_analysis: {  
    type: 'bool',
    default: false,
    description: 'trace hydrogen escape analysis' },

  /**
   * trace allocation folding
   * Default: `false`
   * 
   * @name trace_allocation_folding
   * @private
   * @returns {bool}
   */
  trace_allocation_folding: {  
    type: 'bool',
    default: false,
    description: 'trace allocation folding' },

  /**
   * trace object migration
   * Default: `false`
   * 
   * @name trace_migration
   * @private
   * @returns {bool}
   */
  trace_migration: {  
    type: 'bool',
    default: false,
    description: 'trace object migration' },

  /**
   * trace map generalization
   * Default: `false`
   * 
   * @name trace_generalization
   * @private
   * @returns {bool}
   */
  trace_generalization: {  
    type: 'bool',
    default: false,
    description: 'trace map generalization' },

  /**
   * pointer map for every instruction
   * Default: `false`
   * 
   * @name stress_pointer_maps
   * @private
   * @returns {bool}
   */
  stress_pointer_maps: {  
    type: 'bool',
    default: false,
    description: 'pointer map for every instruction' },

  /**
   * environment for every instruction
   * Default: `false`
   * 
   * @name stress_environments
   * @private
   * @returns {bool}
   */
  stress_environments: {  
    type: 'bool',
    default: false,
    description: 'environment for every instruction' },

  /**
   * print number of possible deopt points
   * Default: `false`
   * 
   * @name print_deopt_stress
   * @private
   * @returns {bool}
   */
  print_deopt_stress: {  
    type: 'bool',
    default: false,
    description: 'print number of possible deopt points' },

  /**
   * put a break point before deoptimizing
   * Default: `false`
   * 
   * @name trap_on_deopt
   * @private
   * @returns {bool}
   */
  trap_on_deopt: {  
    type: 'bool',
    default: false,
    description: 'put a break point before deoptimizing' },

  /**
   * deoptimize uncommon cases
   * Default: `true`
   * 
   * @name deoptimize_uncommon_cases
   * @private
   * @returns {bool}
   */
  deoptimize_uncommon_cases: {  
    type: 'bool',
    default: true,
    description: 'deoptimize uncommon cases' },

  /**
   * polymorphic inlining
   * Default: `true`
   * 
   * @name polymorphic_inlining
   * @private
   * @returns {bool}
   */
  polymorphic_inlining: {  
    type: 'bool',
    default: true,
    description: 'polymorphic inlining' },

  /**
   * use on-stack replacement
   * Default: `true`
   * 
   * @name use_osr
   * @private
   * @returns {bool}
   */
  use_osr: {  
    type: 'bool',
    default: true,
    description: 'use on-stack replacement' },

  /**
   * trace array bounds check elimination
   * Default: `false`
   * 
   * @name trace_bce
   * @private
   * @returns {bool}
   */
  trace_bce: {  
    type: 'bool',
    default: false,
    description: 'trace array bounds check elimination' },

  /**
   * use load elimination
   * Default: `true`
   * 
   * @name load_elimination
   * @private
   * @returns {bool}
   */
  load_elimination: {  
    type: 'bool',
    default: true,
    description: 'use load elimination' },

  /**
   * use check elimination
   * Default: `true`
   * 
   * @name check_elimination
   * @private
   * @returns {bool}
   */
  check_elimination: {  
    type: 'bool',
    default: true,
    description: 'use check elimination' },

  /**
   * use store elimination
   * Default: `false`
   * 
   * @name store_elimination
   * @private
   * @returns {bool}
   */
  store_elimination: {  
    type: 'bool',
    default: false,
    description: 'use store elimination' },

  /**
   * use dead code elimination
   * Default: `true`
   * 
   * @name dead_code_elimination
   * @private
   * @returns {bool}
   */
  dead_code_elimination: {  
    type: 'bool',
    default: true,
    description: 'use dead code elimination' },

  /**
   * use constant folding
   * Default: `true`
   * 
   * @name fold_constants
   * @private
   * @returns {bool}
   */
  fold_constants: {  
    type: 'bool',
    default: true,
    description: 'use constant folding' },

  /**
   * trace dead code elimination
   * Default: `false`
   * 
   * @name trace_dead_code_elimination
   * @private
   * @returns {bool}
   */
  trace_dead_code_elimination: {  
    type: 'bool',
    default: false,
    description: 'trace dead code elimination' },

  /**
   * eliminate unreachable code
   * Default: `true`
   * 
   * @name unreachable_code_elimination
   * @private
   * @returns {bool}
   */
  unreachable_code_elimination: {  
    type: 'bool',
    default: true,
    description: 'eliminate unreachable code' },

  /**
   * trace on-stack replacement
   * Default: `false`
   * 
   * @name trace_osr
   * @private
   * @returns {bool}
   */
  trace_osr: {  
    type: 'bool',
    default: false,
    description: 'trace on-stack replacement' },

  /**
   * number of stress runs
   * Default: `0`
   * 
   * @name stress_runs
   * @private
   * @returns {int}
   */
  stress_runs: {  
    type: 'int', default: 0, description: 'number of stress runs' },

  /**
   * optimize closures
   * Default: `true`
   * 
   * @name optimize_closures
   * @private
   * @returns {bool}
   */
  optimize_closures: {  
    type: 'bool', default: true, description: 'optimize closures' },

  /**
   * inline constructor calls
   * Default: `true`
   * 
   * @name inline_construct
   * @private
   * @returns {bool}
   */
  inline_construct: {  
    type: 'bool',
    default: true,
    description: 'inline constructor calls' },

  /**
   * inline functions with arguments object
   * Default: `true`
   * 
   * @name inline_arguments
   * @private
   * @returns {bool}
   */
  inline_arguments: {  
    type: 'bool',
    default: true,
    description: 'inline functions with arguments object' },

  /**
   * inline JavaScript accessors
   * Default: `true`
   * 
   * @name inline_accessors
   * @private
   * @returns {bool}
   */
  inline_accessors: {  
    type: 'bool',
    default: true,
    description: 'inline JavaScript accessors' },

  /**
   * number of stack frames inspected by the profiler
   * Default: `1`
   * 
   * @name frame_count
   * @private
   * @returns {int}
   */
  frame_count: {  
    type: 'int',
    default: 1,
    description: 'number of stack frames inspected by the profiler' },

  /**
   * call count before self-optimization
   * Default: `130`
   * 
   * @name self_opt_count
   * @private
   * @returns {int}
   */
  self_opt_count: {  
    type: 'int',
    default: 130,
    description: 'call count before self-optimization' },

  /**
   * extra verbose compilation tracing
   * Default: `false`
   * 
   * @name trace_opt_verbose
   * @private
   * @returns {bool}
   */
  trace_opt_verbose: {  
    type: 'bool',
    default: false,
    description: 'extra verbose compilation tracing' },

  /**
   * emit comments in code disassembly
   * Default: `false`
   * 
   * @name code_comments
   * @private
   * @returns {bool}
   */
  code_comments: {  
    type: 'bool',
    default: false,
    description: 'emit comments in code disassembly' },

  /**
   * expose natives in global object
   * Default: `null`
   * 
   * @name expose_natives_as
   * @private
   * @returns {string}
   */
  expose_natives_as: {  
    type: 'string',
    default: null,
    description: 'expose natives in global object' },

  /**
   * expose debug in global object
   * Default: `null`
   * 
   * @name expose_debug_as
   * @private
   * @returns {string}
   */
  expose_debug_as: {  
    type: 'string',
    default: null,
    description: 'expose debug in global object' },

  /**
   * expose freeBuffer extension
   * Default: `false`
   * 
   * @name expose_free_buffer
   * @private
   * @returns {bool}
   */
  expose_free_buffer: {  
    type: 'bool',
    default: false,
    description: 'expose freeBuffer extension' },

  /**
   * expose gc extension
   * Default: `false`
   * 
   * @name expose_gc
   * @private
   * @returns {bool}
   */
  expose_gc: {  
    type: 'bool',
    default: false,
    description: 'expose gc extension' },

  /**
   * expose trigger-failure extension
   * Default: `false`
   * 
   * @name expose_trigger_failure
   * @private
   * @returns {bool}
   */
  expose_trigger_failure: {  
    type: 'bool',
    default: false,
    description: 'expose trigger-failure extension' },

  /**
   * number of stack frames to capture
   * Default: `10`
   * 
   * @name stack_trace_limit
   * @private
   * @returns {int}
   */
  stack_trace_limit: {  
    type: 'int',
    default: 10,
    description: 'number of stack frames to capture' },

  /**
   * disable builtin natives files
   * Default: `false`
   * 
   * @name disable_native_files
   * @private
   * @returns {bool}
   */
  disable_native_files: {  
    type: 'bool',
    default: false,
    description: 'disable builtin natives files' },

  /**
   * use fast inline allocation
   * Default: `true`
   * 
   * @name inline_new
   * @private
   * @returns {bool}
   */
  inline_new: {  
    type: 'bool',
    default: true,
    description: 'use fast inline allocation' },

  /**
   * trace function calls
   * Default: `false`
   * 
   * @name trace
   * @private
   * @returns {bool}
   */
  trace: {  
    type: 'bool',
    default: false,
    description: 'trace function calls' },

  /**
   * use lazy compilation
   * Default: `true`
   * 
   * @name lazy
   * @private
   * @returns {bool}
   */
  lazy: {  
    type: 'bool',
    default: true,
    description: 'use lazy compilation' },

  /**
   * trace lazy optimization
   * Default: `false`
   * 
   * @name trace_opt
   * @private
   * @returns {bool}
   */
  trace_opt: {  
    type: 'bool',
    default: false,
    description: 'trace lazy optimization' },

  /**
   * trace lazy optimization statistics
   * Default: `false`
   * 
   * @name trace_opt_stats
   * @private
   * @returns {bool}
   */
  trace_opt_stats: {  
    type: 'bool',
    default: false,
    description: 'trace lazy optimization statistics' },

  /**
   * use adaptive optimizations
   * Default: `true`
   * 
   * @name opt
   * @private
   * @returns {bool}
   */
  opt: {  
    type: 'bool',
    default: true,
    description: 'use adaptive optimizations' },

  /**
   * always try to optimize functions
   * Default: `false`
   * 
   * @name always_opt
   * @private
   * @returns {bool}
   */
  always_opt: {  
    type: 'bool',
    default: false,
    description: 'always try to optimize functions' },

  /**
   * always try to OSR functions
   * Default: `false`
   * 
   * @name always_osr
   * @private
   * @returns {bool}
   */
  always_osr: {  
    type: 'bool',
    default: false,
    description: 'always try to OSR functions' },

  /**
   * prepare for turning on always opt
   * Default: `false`
   * 
   * @name prepare_always_opt
   * @private
   * @returns {bool}
   */
  prepare_always_opt: {  
    type: 'bool',
    default: false,
    description: 'prepare for turning on always opt' },

  /**
   * trace optimize function deoptimization
   * Default: `false`
   * 
   * @name trace_deopt
   * @private
   * @returns {bool}
   */
  trace_deopt: {  
    type: 'bool',
    default: false,
    description: 'trace optimize function deoptimization' },

  /**
   * enable compilation cache
   * Default: `true`
   * 
   * @name compilation_cache
   * @private
   * @returns {bool}
   */
  compilation_cache: {  
    type: 'bool',
    default: true,
    description: 'enable compilation cache' },

  /**
   * cache prototype transitions
   * Default: `true`
   * 
   * @name cache_prototype_transitions
   * @private
   * @returns {bool}
   */
  cache_prototype_transitions: {  
    type: 'bool',
    default: true,
    description: 'cache prototype transitions' },

  /**
   * trace debugging JSON request/response
   * Default: `false`
   * 
   * @name trace_debug_json
   * @private
   * @returns {bool}
   */
  trace_debug_json: {  
    type: 'bool',
    default: false,
    description: 'trace debugging JSON request/response' },

  /**
   * enable liveedit experimental feature
   * Default: `true`
   * 
   * @name enable_liveedit
   * @private
   * @returns {bool}
   */
  enable_liveedit: {  
    type: 'bool',
    default: true,
    description: 'enable liveedit experimental feature' },

  /**
   * abort by crashing
   * Default: `true`
   * 
   * @name hard_abort
   * @private
   * @returns {bool}
   */
  hard_abort: {  
    type: 'bool', default: true, description: 'abort by crashing' },

  /**
   * max size of the old space (in Mbytes)
   * Default: `0`
   * 
   * @name max_old_space_size
   * @private
   * @returns {int}
   */
  max_old_space_size: {  
    type: 'int',
    default: 0,
    description: 'max size of the old space (in Mbytes)' },

  /**
   * max size of executable memory (in Mbytes)
   * Default: `0`
   * 
   * @name max_executable_size
   * @private
   * @returns {int}
   */
  max_executable_size: {  
    type: 'int',
    default: 0,
    description: 'max size of executable memory (in Mbytes)' },

  /**
   * always perform global GCs
   * Default: `false`
   * 
   * @name gc_global
   * @private
   * @returns {bool}
   */
  gc_global: {  
    type: 'bool',
    default: false,
    description: 'always perform global GCs' },

  /**
   * garbage collect after <n> allocations
   * Default: `-1`
   * 
   * @name gc_interval
   * @private
   * @returns {int}
   */
  gc_interval: {  
    type: 'int',
    default: -1,
    description: 'garbage collect after <n> allocations' },

  /**
   * trace code flushing progress
   * Default: `false`
   * 
   * @name trace_code_flushing
   * @private
   * @returns {bool}
   */
  trace_code_flushing: {  
    type: 'bool',
    default: false,
    description: 'trace code flushing progress' },

  /**
   * use incremental marking
   * Default: `true`
   * 
   * @name incremental_marking
   * @private
   * @returns {bool}
   */
  incremental_marking: {  
    type: 'bool',
    default: true,
    description: 'use incremental marking' },

  /**
   * do incremental marking steps
   * Default: `true`
   * 
   * @name incremental_marking_steps
   * @private
   * @returns {bool}
   */
  incremental_marking_steps: {  
    type: 'bool',
    default: true,
    description: 'do incremental marking steps' },

  /**
   * enable parallel sweeping
   * Default: `false`
   * 
   * @name parallel_sweeping
   * @private
   * @returns {bool}
   */
  parallel_sweeping: {  
    type: 'bool',
    default: false,
    description: 'enable parallel sweeping' },

  /**
   * enable concurrent sweeping
   * Default: `true`
   * 
   * @name concurrent_sweeping
   * @private
   * @returns {bool}
   */
  concurrent_sweeping: {  
    type: 'bool',
    default: true,
    description: 'enable concurrent sweeping' },

  /**
   * enable job based sweeping
   * Default: `false`
   * 
   * @name job_based_sweeping
   * @private
   * @returns {bool}
   */
  job_based_sweeping: {  
    type: 'bool',
    default: false,
    description: 'enable job based sweeping' },

  /**
   * verify heap pointers before and after GC
   * Default: `false`
   * 
   * @name verify_heap
   * @private
   * @returns {bool}
   */
  verify_heap: {  
    type: 'bool',
    default: false,
    description: 'verify heap pointers before and after GC' },

  /**
   * use inline caching
   * Default: `true`
   * 
   * @name use_ic
   * @private
   * @returns {bool}
   */
  use_ic: {  
    type: 'bool',
    default: true,
    description: 'use inline caching' },

  /**
   * Perform compaction on every full GC
   * Default: `false`
   * 
   * @name always_compact
   * @private
   * @returns {bool}
   */
  always_compact: {  
    type: 'bool',
    default: false,
    description: 'Perform compaction on every full GC' },

  /**
   * allows verbose printing
   * Default: `true`
   * 
   * @name use_verbose_printer
   * @private
   * @returns {bool}
   */
  use_verbose_printer: {  
    type: 'bool',
    default: true,
    description: 'allows verbose printing' },

  /**
   * allow natives syntax
   * Default: `false`
   * 
   * @name allow_natives_syntax
   * @private
   * @returns {bool}
   */
  allow_natives_syntax: {  
    type: 'bool',
    default: false,
    description: 'allow natives syntax' },

  /**
   * trace parsing and preparsing
   * Default: `false`
   * 
   * @name trace_parse
   * @private
   * @returns {bool}
   */
  trace_parse: {  
    type: 'bool',
    default: false,
    description: 'trace parsing and preparsing' },

  /**
   * Trace simulator execution
   * Default: `false`
   * 
   * @name trace_sim
   * @private
   * @returns {bool}
   */
  trace_sim: {  
    type: 'bool',
    default: false,
    description: 'Trace simulator execution' },

  /**
   * Enable debugging the simulator
   * Default: `false`
   * 
   * @name debug_sim
   * @private
   * @returns {bool}
   */
  debug_sim: {  
    type: 'bool',
    default: false,
    description: 'Enable debugging the simulator' },

  /**
   * Simulator stop after x number of instructions
   * Default: `0`
   * 
   * @name stop_sim_at
   * @private
   * @returns {int}
   */
  stop_sim_at: {  
    type: 'int',
    default: 0,
    description: 'Simulator stop after x number of instructions' },

  /**
   * generate optimized regexp code
   * Default: `true`
   * 
   * @name regexp_optimization
   * @private
   * @returns {bool}
   */
  regexp_optimization: {  
    type: 'bool',
    default: true,
    description: 'generate optimized regexp code' },

  /**
   * testing_bool_flag
   * Default: `true`
   * 
   * @name testing_bool_flag
   * @private
   * @returns {bool}
   */
  testing_bool_flag: {  
    type: 'bool', default: true, description: 'testing_bool_flag' },

  /**
   * testing_int_flag
   * Default: `13`
   * 
   * @name testing_int_flag
   * @private
   * @returns {int}
   */
  testing_int_flag: {  
    type: 'int', default: 13, description: 'testing_int_flag' },

  /**
   * float-flag
   * Default: `.`
   * 
   * @name testing_float_flag
   * @private
   * @returns {float}
   */
  testing_float_flag: {  
    type: 'float', default: '.', description: 'float-flag' },

  /**
   * Seed used for threading test randomness
   * Default: `42`
   * 
   * @name testing_prng_seed
   * @private
   * @returns {int}
   */
  testing_prng_seed: {  
    type: 'int',
    default: 42,
    description: 'Seed used for threading test randomness' },

  /**
   * enable predictable mode
   * Default: `false`
   * 
   * @name predictable
   * @private
   * @returns {bool}
   */
  predictable: {  
    type: 'bool',
    default: false,
    description: 'enable predictable mode' },

  /**
   * Print usage message, including flags, on console
   * Default: `false`
   * 
   * @name help
   * @private
   * @returns {bool}
   */
  help: {  
    type: 'bool',
    default: false,
    description: 'Print usage message, including flags, on console' },

  /**
   * Dump counters on exit
   * Default: `false`
   * 
   * @name dump_counters
   * @private
   * @returns {bool}
   */
  dump_counters: {  
    type: 'bool',
    default: false,
    description: 'Dump counters on exit' },

  /**
   * Enable JavaScript debugger
   * Default: `false`
   * 
   * @name debugger
   * @private
   * @returns {bool}
   */
  debugger: {  
    type: 'bool',
    default: false,
    description: 'Enable JavaScript debugger' },

  /**
   * Enable debugger agent
   * Default: `false`
   * 
   * @name debugger_agent
   * @private
   * @returns {bool}
   */
  debugger_agent: {  
    type: 'bool',
    default: false,
    description: 'Enable debugger agent' },

  /**
   * Port to use for remote debugging
   * Default: `5858`
   * 
   * @name debugger_port
   * @private
   * @returns {int}
   */
  debugger_port: {  
    type: 'int',
    default: 5858,
    description: 'Port to use for remote debugging' },

  /**
   * Map counters to a file
   * Default: ``
   * 
   * @name map_counters
   * @private
   * @returns {string}
   */
  map_counters: {  
    type: 'string',
    default: '',
    description: 'Map counters to a file' },

  /**
   * Enable debugger compile events
   * Default: `true`
   * 
   * @name debug_compile_events
   * @private
   * @returns {bool}
   */
  debug_compile_events: {  
    type: 'bool',
    default: true,
    description: 'Enable debugger compile events' },

  /**
   * enable GDBJIT interface (disables compacting GC)
   * Default: `false`
   * 
   * @name gdbjit
   * @private
   * @returns {bool}
   */
  gdbjit: {  
    type: 'bool',
    default: false,
    description: 'enable GDBJIT interface (disables compacting GC)' },

  /**
   * enable GDBJIT interface for all code objects
   * Default: `false`
   * 
   * @name gdbjit_full
   * @private
   * @returns {bool}
   */
  gdbjit_full: {  
    type: 'bool',
    default: false,
    description: 'enable GDBJIT interface for all code objects' },

  /**
   * dump elf objects with debug info to disk
   * Default: `false`
   * 
   * @name gdbjit_dump
   * @private
   * @returns {bool}
   */
  gdbjit_dump: {  
    type: 'bool',
    default: false,
    description: 'dump elf objects with debug info to disk' },

  /**
   * pretty print source code
   * Default: `false`
   * 
   * @name print_source
   * @private
   * @returns {bool}
   */
  print_source: {  
    type: 'bool',
    default: false,
    description: 'pretty print source code' },

  /**
   * print source AST
   * Default: `false`
   * 
   * @name print_ast
   * @private
   * @returns {bool}
   */
  print_ast: {  
    type: 'bool', default: false, description: 'print source AST' },

  /**
   * print source AST for builtins
   * Default: `false`
   * 
   * @name print_builtin_ast
   * @private
   * @returns {bool}
   */
  print_builtin_ast: {  
    type: 'bool',
    default: false,
    description: 'print source AST for builtins' },

  /**
   * function name where to insert a breakpoint
   * Default: ``
   * 
   * @name stop_at
   * @private
   * @returns {string}
   */
  stop_at: {  
    type: 'string',
    default: '',
    description: 'function name where to insert a breakpoint' },

  /**
   * replace aborts by breakpoints
   * Default: `false`
   * 
   * @name trap_on_abort
   * @private
   * @returns {bool}
   */
  trap_on_abort: {  
    type: 'bool',
    default: false,
    description: 'replace aborts by breakpoints' },

  /**
   * print scopes for builtins
   * Default: `false`
   * 
   * @name print_builtin_scopes
   * @private
   * @returns {bool}
   */
  print_builtin_scopes: {  
    type: 'bool',
    default: false,
    description: 'print scopes for builtins' },

  /**
   * print scopes
   * Default: `false`
   * 
   * @name print_scopes
   * @private
   * @returns {bool}
   */
  print_scopes: {  
    type: 'bool', default: false, description: 'print scopes' },

  /**
   * trace contexts operations
   * Default: `false`
   * 
   * @name trace_contexts
   * @private
   * @returns {bool}
   */
  trace_contexts: {  
    type: 'bool',
    default: false,
    description: 'trace contexts operations' },

  /**
   * print stuff during garbage collection
   * Default: `false`
   * 
   * @name gc_verbose
   * @private
   * @returns {bool}
   */
  gc_verbose: {  
    type: 'bool',
    default: false,
    description: 'print stuff during garbage collection' },

  /**
   * report heap statistics before and after GC
   * Default: `false`
   * 
   * @name heap_stats
   * @private
   * @returns {bool}
   */
  heap_stats: {  
    type: 'bool',
    default: false,
    description: 'report heap statistics before and after GC' },

  /**
   * report code statistics after GC
   * Default: `false`
   * 
   * @name code_stats
   * @private
   * @returns {bool}
   */
  code_stats: {  
    type: 'bool',
    default: false,
    description: 'report code statistics after GC' },

  /**
   * report handles after GC
   * Default: `false`
   * 
   * @name print_handles
   * @private
   * @returns {bool}
   */
  print_handles: {  
    type: 'bool',
    default: false,
    description: 'report handles after GC' },

  /**
   * report global handles after GC
   * Default: `false`
   * 
   * @name print_global_handles
   * @private
   * @returns {bool}
   */
  print_global_handles: {  
    type: 'bool',
    default: false,
    description: 'report global handles after GC' },

  /**
   * trace inline cache state transitions
   * Default: `false`
   * 
   * @name trace_ic
   * @private
   * @returns {bool}
   */
  trace_ic: {  
    type: 'bool',
    default: false,
    description: 'trace inline cache state transitions' },

  /**
   * print interfaces
   * Default: `false`
   * 
   * @name print_interfaces
   * @private
   * @returns {bool}
   */
  print_interfaces: {  
    type: 'bool', default: false, description: 'print interfaces' },

  /**
   * print interface inference details
   * Default: `false`
   * 
   * @name print_interface_details
   * @private
   * @returns {bool}
   */
  print_interface_details: {  
    type: 'bool',
    default: false,
    description: 'print interface inference details' },

  /**
   * depth for printing interfaces
   * Default: `5`
   * 
   * @name print_interface_depth
   * @private
   * @returns {int}
   */
  print_interface_depth: {  
    type: 'int',
    default: 5,
    description: 'depth for printing interfaces' },

  /**
   * trace lazy compilation
   * Default: `false`
   * 
   * @name trace_lazy
   * @private
   * @returns {bool}
   */
  trace_lazy: {  
    type: 'bool',
    default: false,
    description: 'trace lazy compilation' },

  /**
   * trace isolate state changes
   * Default: `false`
   * 
   * @name trace_isolates
   * @private
   * @returns {bool}
   */
  trace_isolates: {  
    type: 'bool',
    default: false,
    description: 'trace isolate state changes' },

  /**
   * trace regexp bytecode execution
   * Default: `false`
   * 
   * @name trace_regexp_bytecodes
   * @private
   * @returns {bool}
   */
  trace_regexp_bytecodes: {  
    type: 'bool',
    default: false,
    description: 'trace regexp bytecode execution' },

  /**
   * Log all events to the log file.
   * Default: `false`
   * 
   * @name log_all
   * @private
   * @returns {bool}
   */
  log_all: {  
    type: 'bool',
    default: false,
    description: 'Log all events to the log file.' },

  /**
   * Log API events to the log file.
   * Default: `false`
   * 
   * @name log_api
   * @private
   * @returns {bool}
   */
  log_api: {  
    type: 'bool',
    default: false,
    description: 'Log API events to the log file.' },

  /**
   * Log global handle events.
   * Default: `false`
   * 
   * @name log_handles
   * @private
   * @returns {bool}
   */
  log_handles: {  
    type: 'bool',
    default: false,
    description: 'Log global handle events.' },

  /**
   * Log suspect operations.
   * Default: `false`
   * 
   * @name log_suspect
   * @private
   * @returns {bool}
   */
  log_suspect: {  
    type: 'bool',
    default: false,
    description: 'Log suspect operations.' },

  /**
   * Log regular expression execution.
   * Default: `false`
   * 
   * @name log_regexp
   * @private
   * @returns {bool}
   */
  log_regexp: {  
    type: 'bool',
    default: false,
    description: 'Log regular expression execution.' },

  /**
   * Specify the name of the log file.
   * Default: `v8.log`
   * 
   * @name logfile
   * @private
   * @returns {string}
   */
  logfile: {  
    type: 'string',
    default: 'v8.log',
    description: 'Specify the name of the log file.' },

  /**
   * Separate log files for each isolate.
   * Default: `true`
   * 
   * @name logfile_per_isolate
   * @private
   * @returns {bool}
   */
  logfile_per_isolate: {  
    type: 'bool',
    default: true,
    description: 'Separate log files for each isolate.' },

  /**
   * Enable low-level linux profiler.
   * Default: `false`
   * 
   * @name ll_prof
   * @private
   * @returns {bool}
   */
  ll_prof: {  
    type: 'bool',
    default: false,
    description: 'Enable low-level linux profiler.' },

  /**
   * Time internal events.
   * Default: `false`
   * 
   * @name log_internal_timer_events
   * @private
   * @returns {bool}
   */
  log_internal_timer_events: {  
    type: 'bool',
    default: false,
    description: 'Time internal events.' },

  /**
   * Log AArch64 instruction statistics.
   * Default: `false`
   * 
   * @name log_instruction_stats
   * @private
   * @returns {bool}
   */
  log_instruction_stats: {  
    type: 'bool',
    default: false,
    description: 'Log AArch64 instruction statistics.' },

}