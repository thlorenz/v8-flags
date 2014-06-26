'use strict';

module.exports = {

  /**
   * enforce strict mode
   * Default: `true`
   * 
   * @name use_strict
   * @returns {bool}
   */
  use_strict: {  
    type: 'bool',
    default: true,
    description: 'enforce strict mode' },

  /**
   * enable upcoming ES6+ features
   * Default: `true`
   * 
   * @name es_staging
   * @returns {bool}
   */
  es_staging: {  
    type: 'bool',
    default: true,
    description: 'enable upcoming ES6+ features' },

  /**
   * enable harmony semantics for typeof
   * Default: `true`
   * 
   * @name harmony_typeof
   * @returns {bool}
   */
  harmony_typeof: {  
    type: 'bool',
    default: true,
    description: 'enable harmony semantics for typeof' },

  /**
   * enable harmony block scoping
   * Default: `true`
   * 
   * @name harmony_scoping
   * @returns {bool}
   */
  harmony_scoping: {  
    type: 'bool',
    default: true,
    description: 'enable harmony block scoping' },

  /**
   * enable harmony proxies
   * Default: `true`
   * 
   * @name harmony_proxies
   * @returns {bool}
   */
  harmony_proxies: {  
    type: 'bool',
    default: true,
    description: 'enable harmony proxies' },

  /**
   * enable harmony generators
   * Default: `true`
   * 
   * @name harmony_generators
   * @returns {bool}
   */
  harmony_generators: {  
    type: 'bool',
    default: true,
    description: 'enable harmony generators' },

  /**
   * enable harmony iteration (for-of)
   * Default: `true`
   * 
   * @name harmony_iteration
   * @returns {bool}
   */
  harmony_iteration: {  
    type: 'bool',
    default: true,
    description: 'enable harmony iteration (for-of)' },

  /**
   * enable harmony string
   * Default: `true`
   * 
   * @name harmony_strings
   * @returns {bool}
   */
  harmony_strings: {  
    type: 'bool',
    default: true,
    description: 'enable harmony string' },

  /**
   * enable harmony arrays
   * Default: `true`
   * 
   * @name harmony_arrays
   * @returns {bool}
   */
  harmony_arrays: {  
    type: 'bool',
    default: true,
    description: 'enable harmony arrays' },

  /**
   * enable harmony math functions
   * Default: `true`
   * 
   * @name harmony_maths
   * @returns {bool}
   */
  harmony_maths: {  
    type: 'bool',
    default: true,
    description: 'enable harmony math functions' },

  /**
   * (dummy flag, has no effect)
   * Default: `true`
   * 
   * @name harmony_promises
   * @returns {bool}
   */
  harmony_promises: {  
    type: 'bool',
    default: true,
    description: '(dummy flag, has no effect)' },

  /**
   * enable all harmony features (except typeof)
   * Default: `true`
   * 
   * @name harmony
   * @returns {bool}
   */
  harmony: {  
    type: 'bool',
    default: true,
    description: 'enable all harmony features (except typeof)' },

  /**
   * optimizes arrays that have no holes
   * Default: `true`
   * 
   * @name packed_arrays
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
   * @returns {bool}
   */
  pretenuring: {  
    type: 'bool',
    default: true,
    description: 'allocate objects in old space' },

  /**
   * pretenure call new
   * Default: `true`
   * 
   * @name pretenuring_call_new
   * @returns {bool}
   */
  pretenuring_call_new: {  
    type: 'bool',
    default: true,
    description: 'pretenure call new' },

  /**
   * track fields with only smi values
   * Default: `true`
   * 
   * @name track_fields
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
   * @returns {bool}
   */
  track_field_types: {  
    type: 'bool', default: true, description: 'track field types' },

  /**
   * support smi representation in binary operations
   * Default: `true`
   * 
   * @name smi_binop
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
   * @returns {bool}
   */
  string_slices: {  
    type: 'bool', default: true, description: 'use string slices' },

  /**
   * use crankshaft
   * Default: `true`
   * 
   * @name crankshaft
   * @returns {bool}
   */
  crankshaft: {  
    type: 'bool', default: true, description: 'use crankshaft' },

  /**
   * optimization filter
   * Default: `*`
   * 
   * @name hydrogen_filter
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
   * @returns {bool}
   */
  use_allocation_folding: {  
    type: 'bool',
    default: true,
    description: 'use allocation folding' },

  /**
   * only fold in basic blocks
   * Default: `true`
   * 
   * @name use_local_allocation_folding
   * @returns {bool}
   */
  use_local_allocation_folding: {  
    type: 'bool',
    default: true,
    description: 'only fold in basic blocks' },

  /**
   * maximum number of inlining levels
   * Default: `5`
   * 
   * @name max_inlining_levels
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
   * @returns {bool}
   */
  fast_math: {  
    type: 'bool',
    default: true,
    description: 'faster (but maybe less accurate) math functions' },

  /**
   * print statistics for hydrogen
   * Default: `true`
   * 
   * @name hydrogen_stats
   * @returns {bool}
   */
  hydrogen_stats: {  
    type: 'bool',
    default: true,
    description: 'print statistics for hydrogen' },

  /**
   * trace check elimination phase
   * Default: `true`
   * 
   * @name trace_check_elimination
   * @returns {bool}
   */
  trace_check_elimination: {  
    type: 'bool',
    default: true,
    description: 'trace check elimination phase' },

  /**
   * trace generated hydrogen to file
   * Default: `true`
   * 
   * @name trace_hydrogen
   * @returns {bool}
   */
  trace_hydrogen: {  
    type: 'bool',
    default: true,
    description: 'trace generated hydrogen to file' },

  /**
   * hydrogen tracing filter
   * Default: `*`
   * 
   * @name trace_hydrogen_filter
   * @returns {string}
   */
  trace_hydrogen_filter: {  
    type: 'string',
    default: '*',
    description: 'hydrogen tracing filter' },

  /**
   * trace generated hydrogen for stubs
   * Default: `true`
   * 
   * @name trace_hydrogen_stubs
   * @returns {bool}
   */
  trace_hydrogen_stubs: {  
    type: 'bool',
    default: true,
    description: 'trace generated hydrogen for stubs' },

  /**
   * trace hydrogen to given file name
   * Default: `null`
   * 
   * @name trace_hydrogen_file
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
   * @returns {string}
   */
  trace_phase: {  
    type: 'string',
    default: 'HLZ',
    description: 'trace generated IR for specified phases' },

  /**
   * trace inlining decisions
   * Default: `true`
   * 
   * @name trace_inlining
   * @returns {bool}
   */
  trace_inlining: {  
    type: 'bool',
    default: true,
    description: 'trace inlining decisions' },

  /**
   * trace load elimination
   * Default: `true`
   * 
   * @name trace_load_elimination
   * @returns {bool}
   */
  trace_load_elimination: {  
    type: 'bool',
    default: true,
    description: 'trace load elimination' },

  /**
   * trace store elimination
   * Default: `true`
   * 
   * @name trace_store_elimination
   * @returns {bool}
   */
  trace_store_elimination: {  
    type: 'bool',
    default: true,
    description: 'trace store elimination' },

  /**
   * trace register allocator
   * Default: `true`
   * 
   * @name trace_alloc
   * @returns {bool}
   */
  trace_alloc: {  
    type: 'bool',
    default: true,
    description: 'trace register allocator' },

  /**
   * trace all use positions
   * Default: `true`
   * 
   * @name trace_all_uses
   * @returns {bool}
   */
  trace_all_uses: {  
    type: 'bool',
    default: true,
    description: 'trace all use positions' },

  /**
   * trace range analysis
   * Default: `true`
   * 
   * @name trace_range
   * @returns {bool}
   */
  trace_range: {  
    type: 'bool',
    default: true,
    description: 'trace range analysis' },

  /**
   * trace global value numbering
   * Default: `true`
   * 
   * @name trace_gvn
   * @returns {bool}
   */
  trace_gvn: {  
    type: 'bool',
    default: true,
    description: 'trace global value numbering' },

  /**
   * trace representation types
   * Default: `true`
   * 
   * @name trace_representation
   * @returns {bool}
   */
  trace_representation: {  
    type: 'bool',
    default: true,
    description: 'trace representation types' },

  /**
   * trace hydrogen escape analysis
   * Default: `true`
   * 
   * @name trace_escape_analysis
   * @returns {bool}
   */
  trace_escape_analysis: {  
    type: 'bool',
    default: true,
    description: 'trace hydrogen escape analysis' },

  /**
   * trace allocation folding
   * Default: `true`
   * 
   * @name trace_allocation_folding
   * @returns {bool}
   */
  trace_allocation_folding: {  
    type: 'bool',
    default: true,
    description: 'trace allocation folding' },

  /**
   * trace object migration
   * Default: `true`
   * 
   * @name trace_migration
   * @returns {bool}
   */
  trace_migration: {  
    type: 'bool',
    default: true,
    description: 'trace object migration' },

  /**
   * trace map generalization
   * Default: `true`
   * 
   * @name trace_generalization
   * @returns {bool}
   */
  trace_generalization: {  
    type: 'bool',
    default: true,
    description: 'trace map generalization' },

  /**
   * pointer map for every instruction
   * Default: `true`
   * 
   * @name stress_pointer_maps
   * @returns {bool}
   */
  stress_pointer_maps: {  
    type: 'bool',
    default: true,
    description: 'pointer map for every instruction' },

  /**
   * environment for every instruction
   * Default: `true`
   * 
   * @name stress_environments
   * @returns {bool}
   */
  stress_environments: {  
    type: 'bool',
    default: true,
    description: 'environment for every instruction' },

  /**
   * print number of possible deopt points
   * Default: `true`
   * 
   * @name print_deopt_stress
   * @returns {bool}
   */
  print_deopt_stress: {  
    type: 'bool',
    default: true,
    description: 'print number of possible deopt points' },

  /**
   * put a break point before deoptimizing
   * Default: `true`
   * 
   * @name trap_on_deopt
   * @returns {bool}
   */
  trap_on_deopt: {  
    type: 'bool',
    default: true,
    description: 'put a break point before deoptimizing' },

  /**
   * deoptimize uncommon cases
   * Default: `true`
   * 
   * @name deoptimize_uncommon_cases
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
   * @returns {bool}
   */
  use_osr: {  
    type: 'bool',
    default: true,
    description: 'use on-stack replacement' },

  /**
   * trace array bounds check elimination
   * Default: `true`
   * 
   * @name trace_bce
   * @returns {bool}
   */
  trace_bce: {  
    type: 'bool',
    default: true,
    description: 'trace array bounds check elimination' },

  /**
   * use load elimination
   * Default: `true`
   * 
   * @name load_elimination
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
   * @returns {bool}
   */
  check_elimination: {  
    type: 'bool',
    default: true,
    description: 'use check elimination' },

  /**
   * use store elimination
   * Default: `true`
   * 
   * @name store_elimination
   * @returns {bool}
   */
  store_elimination: {  
    type: 'bool',
    default: true,
    description: 'use store elimination' },

  /**
   * use dead code elimination
   * Default: `true`
   * 
   * @name dead_code_elimination
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
   * @returns {bool}
   */
  fold_constants: {  
    type: 'bool',
    default: true,
    description: 'use constant folding' },

  /**
   * trace dead code elimination
   * Default: `true`
   * 
   * @name trace_dead_code_elimination
   * @returns {bool}
   */
  trace_dead_code_elimination: {  
    type: 'bool',
    default: true,
    description: 'trace dead code elimination' },

  /**
   * eliminate unreachable code
   * Default: `true`
   * 
   * @name unreachable_code_elimination
   * @returns {bool}
   */
  unreachable_code_elimination: {  
    type: 'bool',
    default: true,
    description: 'eliminate unreachable code' },

  /**
   * trace on-stack replacement
   * Default: `true`
   * 
   * @name trace_osr
   * @returns {bool}
   */
  trace_osr: {  
    type: 'bool',
    default: true,
    description: 'trace on-stack replacement' },

  /**
   * number of stress runs
   * Default: `0`
   * 
   * @name stress_runs
   * @returns {int}
   */
  stress_runs: {  
    type: 'int', default: 0, description: 'number of stress runs' },

  /**
   * optimize closures
   * Default: `true`
   * 
   * @name optimize_closures
   * @returns {bool}
   */
  optimize_closures: {  
    type: 'bool', default: true, description: 'optimize closures' },

  /**
   * inline constructor calls
   * Default: `true`
   * 
   * @name inline_construct
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
   * @returns {int}
   */
  self_opt_count: {  
    type: 'int',
    default: 130,
    description: 'call count before self-optimization' },

  /**
   * extra verbose compilation tracing
   * Default: `true`
   * 
   * @name trace_opt_verbose
   * @returns {bool}
   */
  trace_opt_verbose: {  
    type: 'bool',
    default: true,
    description: 'extra verbose compilation tracing' },

  /**
   * emit comments in code disassembly
   * Default: `true`
   * 
   * @name code_comments
   * @returns {bool}
   */
  code_comments: {  
    type: 'bool',
    default: true,
    description: 'emit comments in code disassembly' },

  /**
   * expose natives in global object
   * Default: `null`
   * 
   * @name expose_natives_as
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
   * @returns {string}
   */
  expose_debug_as: {  
    type: 'string',
    default: null,
    description: 'expose debug in global object' },

  /**
   * expose freeBuffer extension
   * Default: `true`
   * 
   * @name expose_free_buffer
   * @returns {bool}
   */
  expose_free_buffer: {  
    type: 'bool',
    default: true,
    description: 'expose freeBuffer extension' },

  /**
   * expose gc extension
   * Default: `true`
   * 
   * @name expose_gc
   * @returns {bool}
   */
  expose_gc: {  
    type: 'bool',
    default: true,
    description: 'expose gc extension' },

  /**
   * expose trigger-failure extension
   * Default: `true`
   * 
   * @name expose_trigger_failure
   * @returns {bool}
   */
  expose_trigger_failure: {  
    type: 'bool',
    default: true,
    description: 'expose trigger-failure extension' },

  /**
   * number of stack frames to capture
   * Default: `10`
   * 
   * @name stack_trace_limit
   * @returns {int}
   */
  stack_trace_limit: {  
    type: 'int',
    default: 10,
    description: 'number of stack frames to capture' },

  /**
   * disable builtin natives files
   * Default: `true`
   * 
   * @name disable_native_files
   * @returns {bool}
   */
  disable_native_files: {  
    type: 'bool',
    default: true,
    description: 'disable builtin natives files' },

  /**
   * use fast inline allocation
   * Default: `true`
   * 
   * @name inline_new
   * @returns {bool}
   */
  inline_new: {  
    type: 'bool',
    default: true,
    description: 'use fast inline allocation' },

  /**
   * trace function calls
   * Default: `true`
   * 
   * @name trace
   * @returns {bool}
   */
  trace: {  
    type: 'bool',
    default: true,
    description: 'trace function calls' },

  /**
   * use lazy compilation
   * Default: `true`
   * 
   * @name lazy
   * @returns {bool}
   */
  lazy: {  
    type: 'bool',
    default: true,
    description: 'use lazy compilation' },

  /**
   * trace lazy optimization
   * Default: `true`
   * 
   * @name trace_opt
   * @returns {bool}
   */
  trace_opt: {  
    type: 'bool',
    default: true,
    description: 'trace lazy optimization' },

  /**
   * trace lazy optimization statistics
   * Default: `true`
   * 
   * @name trace_opt_stats
   * @returns {bool}
   */
  trace_opt_stats: {  
    type: 'bool',
    default: true,
    description: 'trace lazy optimization statistics' },

  /**
   * use adaptive optimizations
   * Default: `true`
   * 
   * @name opt
   * @returns {bool}
   */
  opt: {  
    type: 'bool',
    default: true,
    description: 'use adaptive optimizations' },

  /**
   * always try to optimize functions
   * Default: `true`
   * 
   * @name always_opt
   * @returns {bool}
   */
  always_opt: {  
    type: 'bool',
    default: true,
    description: 'always try to optimize functions' },

  /**
   * always try to OSR functions
   * Default: `true`
   * 
   * @name always_osr
   * @returns {bool}
   */
  always_osr: {  
    type: 'bool',
    default: true,
    description: 'always try to OSR functions' },

  /**
   * prepare for turning on always opt
   * Default: `true`
   * 
   * @name prepare_always_opt
   * @returns {bool}
   */
  prepare_always_opt: {  
    type: 'bool',
    default: true,
    description: 'prepare for turning on always opt' },

  /**
   * trace optimize function deoptimization
   * Default: `true`
   * 
   * @name trace_deopt
   * @returns {bool}
   */
  trace_deopt: {  
    type: 'bool',
    default: true,
    description: 'trace optimize function deoptimization' },

  /**
   * enable compilation cache
   * Default: `true`
   * 
   * @name compilation_cache
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
   * @returns {bool}
   */
  cache_prototype_transitions: {  
    type: 'bool',
    default: true,
    description: 'cache prototype transitions' },

  /**
   * trace debugging JSON request/response
   * Default: `true`
   * 
   * @name trace_debug_json
   * @returns {bool}
   */
  trace_debug_json: {  
    type: 'bool',
    default: true,
    description: 'trace debugging JSON request/response' },

  /**
   * enable liveedit experimental feature
   * Default: `true`
   * 
   * @name enable_liveedit
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
   * @returns {bool}
   */
  hard_abort: {  
    type: 'bool', default: true, description: 'abort by crashing' },

  /**
   * max size of the old space (in Mbytes)
   * Default: `0`
   * 
   * @name max_old_space_size
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
   * @returns {int}
   */
  max_executable_size: {  
    type: 'int',
    default: 0,
    description: 'max size of executable memory (in Mbytes)' },

  /**
   * always perform global GCs
   * Default: `true`
   * 
   * @name gc_global
   * @returns {bool}
   */
  gc_global: {  
    type: 'bool',
    default: true,
    description: 'always perform global GCs' },

  /**
   * garbage collect after <n> allocations
   * Default: `-1`
   * 
   * @name gc_interval
   * @returns {int}
   */
  gc_interval: {  
    type: 'int',
    default: -1,
    description: 'garbage collect after <n> allocations' },

  /**
   * trace code flushing progress
   * Default: `true`
   * 
   * @name trace_code_flushing
   * @returns {bool}
   */
  trace_code_flushing: {  
    type: 'bool',
    default: true,
    description: 'trace code flushing progress' },

  /**
   * use incremental marking
   * Default: `true`
   * 
   * @name incremental_marking
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
   * @returns {bool}
   */
  incremental_marking_steps: {  
    type: 'bool',
    default: true,
    description: 'do incremental marking steps' },

  /**
   * enable parallel sweeping
   * Default: `true`
   * 
   * @name parallel_sweeping
   * @returns {bool}
   */
  parallel_sweeping: {  
    type: 'bool',
    default: true,
    description: 'enable parallel sweeping' },

  /**
   * enable concurrent sweeping
   * Default: `true`
   * 
   * @name concurrent_sweeping
   * @returns {bool}
   */
  concurrent_sweeping: {  
    type: 'bool',
    default: true,
    description: 'enable concurrent sweeping' },

  /**
   * enable job based sweeping
   * Default: `true`
   * 
   * @name job_based_sweeping
   * @returns {bool}
   */
  job_based_sweeping: {  
    type: 'bool',
    default: true,
    description: 'enable job based sweeping' },

  /**
   * verify heap pointers before and after GC
   * Default: `true`
   * 
   * @name verify_heap
   * @returns {bool}
   */
  verify_heap: {  
    type: 'bool',
    default: true,
    description: 'verify heap pointers before and after GC' },

  /**
   * use inline caching
   * Default: `true`
   * 
   * @name use_ic
   * @returns {bool}
   */
  use_ic: {  
    type: 'bool',
    default: true,
    description: 'use inline caching' },

  /**
   * Perform compaction on every full GC
   * Default: `true`
   * 
   * @name always_compact
   * @returns {bool}
   */
  always_compact: {  
    type: 'bool',
    default: true,
    description: 'Perform compaction on every full GC' },

  /**
   * allows verbose printing
   * Default: `true`
   * 
   * @name use_verbose_printer
   * @returns {bool}
   */
  use_verbose_printer: {  
    type: 'bool',
    default: true,
    description: 'allows verbose printing' },

  /**
   * allow natives syntax
   * Default: `true`
   * 
   * @name allow_natives_syntax
   * @returns {bool}
   */
  allow_natives_syntax: {  
    type: 'bool',
    default: true,
    description: 'allow natives syntax' },

  /**
   * trace parsing and preparsing
   * Default: `true`
   * 
   * @name trace_parse
   * @returns {bool}
   */
  trace_parse: {  
    type: 'bool',
    default: true,
    description: 'trace parsing and preparsing' },

  /**
   * Trace simulator execution
   * Default: `true`
   * 
   * @name trace_sim
   * @returns {bool}
   */
  trace_sim: {  
    type: 'bool',
    default: true,
    description: 'Trace simulator execution' },

  /**
   * Enable debugging the simulator
   * Default: `true`
   * 
   * @name debug_sim
   * @returns {bool}
   */
  debug_sim: {  
    type: 'bool',
    default: true,
    description: 'Enable debugging the simulator' },

  /**
   * Simulator stop after x number of instructions
   * Default: `0`
   * 
   * @name stop_sim_at
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
   * @returns {bool}
   */
  testing_bool_flag: {  
    type: 'bool', default: true, description: 'testing_bool_flag' },

  /**
   * testing_int_flag
   * Default: `13`
   * 
   * @name testing_int_flag
   * @returns {int}
   */
  testing_int_flag: {  
    type: 'int', default: 13, description: 'testing_int_flag' },

  /**
   * float-flag
   * Default: `.`
   * 
   * @name testing_float_flag
   * @returns {float}
   */
  testing_float_flag: {  
    type: 'float', default: '.', description: 'float-flag' },

  /**
   * Seed used for threading test randomness
   * Default: `42`
   * 
   * @name testing_prng_seed
   * @returns {int}
   */
  testing_prng_seed: {  
    type: 'int',
    default: 42,
    description: 'Seed used for threading test randomness' },

  /**
   * enable predictable mode
   * Default: `true`
   * 
   * @name predictable
   * @returns {bool}
   */
  predictable: {  
    type: 'bool',
    default: true,
    description: 'enable predictable mode' },

  /**
   * Print usage message, including flags, on console
   * Default: `true`
   * 
   * @name help
   * @returns {bool}
   */
  help: {  
    type: 'bool',
    default: true,
    description: 'Print usage message, including flags, on console' },

  /**
   * Dump counters on exit
   * Default: `true`
   * 
   * @name dump_counters
   * @returns {bool}
   */
  dump_counters: {  
    type: 'bool',
    default: true,
    description: 'Dump counters on exit' },

  /**
   * Enable JavaScript debugger
   * Default: `true`
   * 
   * @name debugger
   * @returns {bool}
   */
  debugger: {  
    type: 'bool',
    default: true,
    description: 'Enable JavaScript debugger' },

  /**
   * Enable debugger agent
   * Default: `true`
   * 
   * @name debugger_agent
   * @returns {bool}
   */
  debugger_agent: {  
    type: 'bool',
    default: true,
    description: 'Enable debugger agent' },

  /**
   * Port to use for remote debugging
   * Default: `5858`
   * 
   * @name debugger_port
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
   * @returns {bool}
   */
  debug_compile_events: {  
    type: 'bool',
    default: true,
    description: 'Enable debugger compile events' },

  /**
   * enable GDBJIT interface (disables compacting GC)
   * Default: `true`
   * 
   * @name gdbjit
   * @returns {bool}
   */
  gdbjit: {  
    type: 'bool',
    default: true,
    description: 'enable GDBJIT interface (disables compacting GC)' },

  /**
   * enable GDBJIT interface for all code objects
   * Default: `true`
   * 
   * @name gdbjit_full
   * @returns {bool}
   */
  gdbjit_full: {  
    type: 'bool',
    default: true,
    description: 'enable GDBJIT interface for all code objects' },

  /**
   * dump elf objects with debug info to disk
   * Default: `true`
   * 
   * @name gdbjit_dump
   * @returns {bool}
   */
  gdbjit_dump: {  
    type: 'bool',
    default: true,
    description: 'dump elf objects with debug info to disk' },

  /**
   * pretty print source code
   * Default: `true`
   * 
   * @name print_source
   * @returns {bool}
   */
  print_source: {  
    type: 'bool',
    default: true,
    description: 'pretty print source code' },

  /**
   * print source AST
   * Default: `true`
   * 
   * @name print_ast
   * @returns {bool}
   */
  print_ast: {  
    type: 'bool', default: true, description: 'print source AST' },

  /**
   * print source AST for builtins
   * Default: `true`
   * 
   * @name print_builtin_ast
   * @returns {bool}
   */
  print_builtin_ast: {  
    type: 'bool',
    default: true,
    description: 'print source AST for builtins' },

  /**
   * function name where to insert a breakpoint
   * Default: ``
   * 
   * @name stop_at
   * @returns {string}
   */
  stop_at: {  
    type: 'string',
    default: '',
    description: 'function name where to insert a breakpoint' },

  /**
   * replace aborts by breakpoints
   * Default: `true`
   * 
   * @name trap_on_abort
   * @returns {bool}
   */
  trap_on_abort: {  
    type: 'bool',
    default: true,
    description: 'replace aborts by breakpoints' },

  /**
   * print scopes for builtins
   * Default: `true`
   * 
   * @name print_builtin_scopes
   * @returns {bool}
   */
  print_builtin_scopes: {  
    type: 'bool',
    default: true,
    description: 'print scopes for builtins' },

  /**
   * print scopes
   * Default: `true`
   * 
   * @name print_scopes
   * @returns {bool}
   */
  print_scopes: {  
    type: 'bool', default: true, description: 'print scopes' },

  /**
   * trace contexts operations
   * Default: `true`
   * 
   * @name trace_contexts
   * @returns {bool}
   */
  trace_contexts: {  
    type: 'bool',
    default: true,
    description: 'trace contexts operations' },

  /**
   * print stuff during garbage collection
   * Default: `true`
   * 
   * @name gc_verbose
   * @returns {bool}
   */
  gc_verbose: {  
    type: 'bool',
    default: true,
    description: 'print stuff during garbage collection' },

  /**
   * report heap statistics before and after GC
   * Default: `true`
   * 
   * @name heap_stats
   * @returns {bool}
   */
  heap_stats: {  
    type: 'bool',
    default: true,
    description: 'report heap statistics before and after GC' },

  /**
   * report code statistics after GC
   * Default: `true`
   * 
   * @name code_stats
   * @returns {bool}
   */
  code_stats: {  
    type: 'bool',
    default: true,
    description: 'report code statistics after GC' },

  /**
   * report handles after GC
   * Default: `true`
   * 
   * @name print_handles
   * @returns {bool}
   */
  print_handles: {  
    type: 'bool',
    default: true,
    description: 'report handles after GC' },

  /**
   * report global handles after GC
   * Default: `true`
   * 
   * @name print_global_handles
   * @returns {bool}
   */
  print_global_handles: {  
    type: 'bool',
    default: true,
    description: 'report global handles after GC' },

  /**
   * trace inline cache state transitions
   * Default: `true`
   * 
   * @name trace_ic
   * @returns {bool}
   */
  trace_ic: {  
    type: 'bool',
    default: true,
    description: 'trace inline cache state transitions' },

  /**
   * print interfaces
   * Default: `true`
   * 
   * @name print_interfaces
   * @returns {bool}
   */
  print_interfaces: {  
    type: 'bool', default: true, description: 'print interfaces' },

  /**
   * print interface inference details
   * Default: `true`
   * 
   * @name print_interface_details
   * @returns {bool}
   */
  print_interface_details: {  
    type: 'bool',
    default: true,
    description: 'print interface inference details' },

  /**
   * depth for printing interfaces
   * Default: `5`
   * 
   * @name print_interface_depth
   * @returns {int}
   */
  print_interface_depth: {  
    type: 'int',
    default: 5,
    description: 'depth for printing interfaces' },

  /**
   * trace lazy compilation
   * Default: `true`
   * 
   * @name trace_lazy
   * @returns {bool}
   */
  trace_lazy: {  
    type: 'bool',
    default: true,
    description: 'trace lazy compilation' },

  /**
   * trace isolate state changes
   * Default: `true`
   * 
   * @name trace_isolates
   * @returns {bool}
   */
  trace_isolates: {  
    type: 'bool',
    default: true,
    description: 'trace isolate state changes' },

  /**
   * trace regexp bytecode execution
   * Default: `true`
   * 
   * @name trace_regexp_bytecodes
   * @returns {bool}
   */
  trace_regexp_bytecodes: {  
    type: 'bool',
    default: true,
    description: 'trace regexp bytecode execution' },

  /**
   * Log all events to the log file.
   * Default: `true`
   * 
   * @name log_all
   * @returns {bool}
   */
  log_all: {  
    type: 'bool',
    default: true,
    description: 'Log all events to the log file.' },

  /**
   * Log API events to the log file.
   * Default: `true`
   * 
   * @name log_api
   * @returns {bool}
   */
  log_api: {  
    type: 'bool',
    default: true,
    description: 'Log API events to the log file.' },

  /**
   * Log global handle events.
   * Default: `true`
   * 
   * @name log_handles
   * @returns {bool}
   */
  log_handles: {  
    type: 'bool',
    default: true,
    description: 'Log global handle events.' },

  /**
   * Log suspect operations.
   * Default: `true`
   * 
   * @name log_suspect
   * @returns {bool}
   */
  log_suspect: {  
    type: 'bool',
    default: true,
    description: 'Log suspect operations.' },

  /**
   * Log regular expression execution.
   * Default: `true`
   * 
   * @name log_regexp
   * @returns {bool}
   */
  log_regexp: {  
    type: 'bool',
    default: true,
    description: 'Log regular expression execution.' },

  /**
   * Specify the name of the log file.
   * Default: `v8.log`
   * 
   * @name logfile
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
   * @returns {bool}
   */
  logfile_per_isolate: {  
    type: 'bool',
    default: true,
    description: 'Separate log files for each isolate.' },

  /**
   * Enable low-level linux profiler.
   * Default: `true`
   * 
   * @name ll_prof
   * @returns {bool}
   */
  ll_prof: {  
    type: 'bool',
    default: true,
    description: 'Enable low-level linux profiler.' },

  /**
   * Time internal events.
   * Default: `true`
   * 
   * @name log_internal_timer_events
   * @returns {bool}
   */
  log_internal_timer_events: {  
    type: 'bool',
    default: true,
    description: 'Time internal events.' },

  /**
   * Log AArch64 instruction statistics.
   * Default: `true`
   * 
   * @name log_instruction_stats
   * @returns {bool}
   */
  log_instruction_stats: {  
    type: 'bool',
    default: true,
    description: 'Log AArch64 instruction statistics.' },

}