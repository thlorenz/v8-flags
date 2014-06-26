'use strict';

var defaultFlags = require('./default-flags');

module.exports = Flags;

function Flags() {
  if (!(this instanceof Flags)) return new Flags();
  var self = this;
  Object.keys(defaultFlags).forEach(function (k) { this['_' + k] = defaultFlags[k] });
}

var proto = Flags.prototype;

/**
 * enforce strict mode
 * Default: `true`
 * 
 * @name use_strict
 * @param {bool=} use_strict when supplied it sets use_strict
 * @function
 * @returns {bool} the current value of use_strict
 */
proto.use_strict = function (use_strict) {  
  if (typeof use_strict !== 'undefined') self._use_strict = use_strict;
  return this._use_strict;
}

/**
 * enable upcoming ES6+ features
 * Default: `true`
 * 
 * @name es_staging
 * @param {bool=} es_staging when supplied it sets es_staging
 * @function
 * @returns {bool} the current value of es_staging
 */
proto.es_staging = function (es_staging) {  
  if (typeof es_staging !== 'undefined') self._es_staging = es_staging;
  return this._es_staging;
}

/**
 * enable harmony semantics for typeof
 * Default: `true`
 * 
 * @name harmony_typeof
 * @param {bool=} harmony_typeof when supplied it sets harmony_typeof
 * @function
 * @returns {bool} the current value of harmony_typeof
 */
proto.harmony_typeof = function (harmony_typeof) {  
  if (typeof harmony_typeof !== 'undefined') self._harmony_typeof = harmony_typeof;
  return this._harmony_typeof;
}

/**
 * enable harmony block scoping
 * Default: `true`
 * 
 * @name harmony_scoping
 * @param {bool=} harmony_scoping when supplied it sets harmony_scoping
 * @function
 * @returns {bool} the current value of harmony_scoping
 */
proto.harmony_scoping = function (harmony_scoping) {  
  if (typeof harmony_scoping !== 'undefined') self._harmony_scoping = harmony_scoping;
  return this._harmony_scoping;
}

/**
 * enable harmony proxies
 * Default: `true`
 * 
 * @name harmony_proxies
 * @param {bool=} harmony_proxies when supplied it sets harmony_proxies
 * @function
 * @returns {bool} the current value of harmony_proxies
 */
proto.harmony_proxies = function (harmony_proxies) {  
  if (typeof harmony_proxies !== 'undefined') self._harmony_proxies = harmony_proxies;
  return this._harmony_proxies;
}

/**
 * enable harmony generators
 * Default: `true`
 * 
 * @name harmony_generators
 * @param {bool=} harmony_generators when supplied it sets harmony_generators
 * @function
 * @returns {bool} the current value of harmony_generators
 */
proto.harmony_generators = function (harmony_generators) {  
  if (typeof harmony_generators !== 'undefined') self._harmony_generators = harmony_generators;
  return this._harmony_generators;
}

/**
 * enable harmony iteration (for-of)
 * Default: `true`
 * 
 * @name harmony_iteration
 * @param {bool=} harmony_iteration when supplied it sets harmony_iteration
 * @function
 * @returns {bool} the current value of harmony_iteration
 */
proto.harmony_iteration = function (harmony_iteration) {  
  if (typeof harmony_iteration !== 'undefined') self._harmony_iteration = harmony_iteration;
  return this._harmony_iteration;
}

/**
 * enable harmony string
 * Default: `true`
 * 
 * @name harmony_strings
 * @param {bool=} harmony_strings when supplied it sets harmony_strings
 * @function
 * @returns {bool} the current value of harmony_strings
 */
proto.harmony_strings = function (harmony_strings) {  
  if (typeof harmony_strings !== 'undefined') self._harmony_strings = harmony_strings;
  return this._harmony_strings;
}

/**
 * enable harmony arrays
 * Default: `true`
 * 
 * @name harmony_arrays
 * @param {bool=} harmony_arrays when supplied it sets harmony_arrays
 * @function
 * @returns {bool} the current value of harmony_arrays
 */
proto.harmony_arrays = function (harmony_arrays) {  
  if (typeof harmony_arrays !== 'undefined') self._harmony_arrays = harmony_arrays;
  return this._harmony_arrays;
}

/**
 * enable harmony math functions
 * Default: `true`
 * 
 * @name harmony_maths
 * @param {bool=} harmony_maths when supplied it sets harmony_maths
 * @function
 * @returns {bool} the current value of harmony_maths
 */
proto.harmony_maths = function (harmony_maths) {  
  if (typeof harmony_maths !== 'undefined') self._harmony_maths = harmony_maths;
  return this._harmony_maths;
}

/**
 * (dummy flag, has no effect)
 * Default: `true`
 * 
 * @name harmony_promises
 * @param {bool=} harmony_promises when supplied it sets harmony_promises
 * @function
 * @returns {bool} the current value of harmony_promises
 */
proto.harmony_promises = function (harmony_promises) {  
  if (typeof harmony_promises !== 'undefined') self._harmony_promises = harmony_promises;
  return this._harmony_promises;
}

/**
 * enable all harmony features (except typeof)
 * Default: `true`
 * 
 * @name harmony
 * @param {bool=} harmony when supplied it sets harmony
 * @function
 * @returns {bool} the current value of harmony
 */
proto.harmony = function (harmony) {  
  if (typeof harmony !== 'undefined') self._harmony = harmony;
  return this._harmony;
}

/**
 * optimizes arrays that have no holes
 * Default: `true`
 * 
 * @name packed_arrays
 * @param {bool=} packed_arrays when supplied it sets packed_arrays
 * @function
 * @returns {bool} the current value of packed_arrays
 */
proto.packed_arrays = function (packed_arrays) {  
  if (typeof packed_arrays !== 'undefined') self._packed_arrays = packed_arrays;
  return this._packed_arrays;
}

/**
 * tracks arrays with only smi values
 * Default: `true`
 * 
 * @name smi_only_arrays
 * @param {bool=} smi_only_arrays when supplied it sets smi_only_arrays
 * @function
 * @returns {bool} the current value of smi_only_arrays
 */
proto.smi_only_arrays = function (smi_only_arrays) {  
  if (typeof smi_only_arrays !== 'undefined') self._smi_only_arrays = smi_only_arrays;
  return this._smi_only_arrays;
}

/**
 * allocate objects in old space
 * Default: `true`
 * 
 * @name pretenuring
 * @param {bool=} pretenuring when supplied it sets pretenuring
 * @function
 * @returns {bool} the current value of pretenuring
 */
proto.pretenuring = function (pretenuring) {  
  if (typeof pretenuring !== 'undefined') self._pretenuring = pretenuring;
  return this._pretenuring;
}

/**
 * pretenure call new
 * Default: `true`
 * 
 * @name pretenuring_call_new
 * @param {bool=} pretenuring_call_new when supplied it sets pretenuring_call_new
 * @function
 * @returns {bool} the current value of pretenuring_call_new
 */
proto.pretenuring_call_new = function (pretenuring_call_new) {  
  if (typeof pretenuring_call_new !== 'undefined') self._pretenuring_call_new = pretenuring_call_new;
  return this._pretenuring_call_new;
}

/**
 * track fields with only smi values
 * Default: `true`
 * 
 * @name track_fields
 * @param {bool=} track_fields when supplied it sets track_fields
 * @function
 * @returns {bool} the current value of track_fields
 */
proto.track_fields = function (track_fields) {  
  if (typeof track_fields !== 'undefined') self._track_fields = track_fields;
  return this._track_fields;
}

/**
 * track fields with double values
 * Default: `true`
 * 
 * @name track_double_fields
 * @param {bool=} track_double_fields when supplied it sets track_double_fields
 * @function
 * @returns {bool} the current value of track_double_fields
 */
proto.track_double_fields = function (track_double_fields) {  
  if (typeof track_double_fields !== 'undefined') self._track_double_fields = track_double_fields;
  return this._track_double_fields;
}

/**
 * track fields with heap values
 * Default: `true`
 * 
 * @name track_heap_object_fields
 * @param {bool=} track_heap_object_fields when supplied it sets track_heap_object_fields
 * @function
 * @returns {bool} the current value of track_heap_object_fields
 */
proto.track_heap_object_fields = function (track_heap_object_fields) {  
  if (typeof track_heap_object_fields !== 'undefined') self._track_heap_object_fields = track_heap_object_fields;
  return this._track_heap_object_fields;
}

/**
 * track computed boilerplate fields
 * Default: `true`
 * 
 * @name track_computed_fields
 * @param {bool=} track_computed_fields when supplied it sets track_computed_fields
 * @function
 * @returns {bool} the current value of track_computed_fields
 */
proto.track_computed_fields = function (track_computed_fields) {  
  if (typeof track_computed_fields !== 'undefined') self._track_computed_fields = track_computed_fields;
  return this._track_computed_fields;
}

/**
 * track field types
 * Default: `true`
 * 
 * @name track_field_types
 * @param {bool=} track_field_types when supplied it sets track_field_types
 * @function
 * @returns {bool} the current value of track_field_types
 */
proto.track_field_types = function (track_field_types) {  
  if (typeof track_field_types !== 'undefined') self._track_field_types = track_field_types;
  return this._track_field_types;
}

/**
 * support smi representation in binary operations
 * Default: `true`
 * 
 * @name smi_binop
 * @param {bool=} smi_binop when supplied it sets smi_binop
 * @function
 * @returns {bool} the current value of smi_binop
 */
proto.smi_binop = function (smi_binop) {  
  if (typeof smi_binop !== 'undefined') self._smi_binop = smi_binop;
  return this._smi_binop;
}

/**
 * automatically unbox arrays of doubles
 * Default: `true`
 * 
 * @name unbox_double_arrays
 * @param {bool=} unbox_double_arrays when supplied it sets unbox_double_arrays
 * @function
 * @returns {bool} the current value of unbox_double_arrays
 */
proto.unbox_double_arrays = function (unbox_double_arrays) {  
  if (typeof unbox_double_arrays !== 'undefined') self._unbox_double_arrays = unbox_double_arrays;
  return this._unbox_double_arrays;
}

/**
 * use string slices
 * Default: `true`
 * 
 * @name string_slices
 * @param {bool=} string_slices when supplied it sets string_slices
 * @function
 * @returns {bool} the current value of string_slices
 */
proto.string_slices = function (string_slices) {  
  if (typeof string_slices !== 'undefined') self._string_slices = string_slices;
  return this._string_slices;
}

/**
 * use crankshaft
 * Default: `true`
 * 
 * @name crankshaft
 * @param {bool=} crankshaft when supplied it sets crankshaft
 * @function
 * @returns {bool} the current value of crankshaft
 */
proto.crankshaft = function (crankshaft) {  
  if (typeof crankshaft !== 'undefined') self._crankshaft = crankshaft;
  return this._crankshaft;
}

/**
 * optimization filter
 * Default: `*`
 * 
 * @name hydrogen_filter
 * @param {string=} hydrogen_filter when supplied it sets hydrogen_filter
 * @function
 * @returns {string} the current value of hydrogen_filter
 */
proto.hydrogen_filter = function (hydrogen_filter) {  
  if (typeof hydrogen_filter !== 'undefined') self._hydrogen_filter = hydrogen_filter;
  return this._hydrogen_filter;
}

/**
 * use hydrogen global value numbering
 * Default: `true`
 * 
 * @name use_gvn
 * @param {bool=} use_gvn when supplied it sets use_gvn
 * @function
 * @returns {bool} the current value of use_gvn
 */
proto.use_gvn = function (use_gvn) {  
  if (typeof use_gvn !== 'undefined') self._use_gvn = use_gvn;
  return this._use_gvn;
}

/**
 * maximum number of GVN fix-point iterations
 * Default: `3`
 * 
 * @name gvn_iterations
 * @param {int=} gvn_iterations when supplied it sets gvn_iterations
 * @function
 * @returns {int} the current value of gvn_iterations
 */
proto.gvn_iterations = function (gvn_iterations) {  
  if (typeof gvn_iterations !== 'undefined') self._gvn_iterations = gvn_iterations;
  return this._gvn_iterations;
}

/**
 * use hydrogen instruction canonicalizing
 * Default: `true`
 * 
 * @name use_canonicalizing
 * @param {bool=} use_canonicalizing when supplied it sets use_canonicalizing
 * @function
 * @returns {bool} the current value of use_canonicalizing
 */
proto.use_canonicalizing = function (use_canonicalizing) {  
  if (typeof use_canonicalizing !== 'undefined') self._use_canonicalizing = use_canonicalizing;
  return this._use_canonicalizing;
}

/**
 * use function inlining
 * Default: `true`
 * 
 * @name use_inlining
 * @param {bool=} use_inlining when supplied it sets use_inlining
 * @function
 * @returns {bool} the current value of use_inlining
 */
proto.use_inlining = function (use_inlining) {  
  if (typeof use_inlining !== 'undefined') self._use_inlining = use_inlining;
  return this._use_inlining;
}

/**
 * use hydrogen escape analysis
 * Default: `true`
 * 
 * @name use_escape_analysis
 * @param {bool=} use_escape_analysis when supplied it sets use_escape_analysis
 * @function
 * @returns {bool} the current value of use_escape_analysis
 */
proto.use_escape_analysis = function (use_escape_analysis) {  
  if (typeof use_escape_analysis !== 'undefined') self._use_escape_analysis = use_escape_analysis;
  return this._use_escape_analysis;
}

/**
 * use allocation folding
 * Default: `true`
 * 
 * @name use_allocation_folding
 * @param {bool=} use_allocation_folding when supplied it sets use_allocation_folding
 * @function
 * @returns {bool} the current value of use_allocation_folding
 */
proto.use_allocation_folding = function (use_allocation_folding) {  
  if (typeof use_allocation_folding !== 'undefined') self._use_allocation_folding = use_allocation_folding;
  return this._use_allocation_folding;
}

/**
 * only fold in basic blocks
 * Default: `true`
 * 
 * @name use_local_allocation_folding
 * @param {bool=} use_local_allocation_folding when supplied it sets use_local_allocation_folding
 * @function
 * @returns {bool} the current value of use_local_allocation_folding
 */
proto.use_local_allocation_folding = function (use_local_allocation_folding) {  
  if (typeof use_local_allocation_folding !== 'undefined') self._use_local_allocation_folding = use_local_allocation_folding;
  return this._use_local_allocation_folding;
}

/**
 * maximum number of inlining levels
 * Default: `5`
 * 
 * @name max_inlining_levels
 * @param {int=} max_inlining_levels when supplied it sets max_inlining_levels
 * @function
 * @returns {int} the current value of max_inlining_levels
 */
proto.max_inlining_levels = function (max_inlining_levels) {  
  if (typeof max_inlining_levels !== 'undefined') self._max_inlining_levels = max_inlining_levels;
  return this._max_inlining_levels;
}

/**
 * loop invariant code motion
 * Default: `true`
 * 
 * @name loop_invariant_code_motion
 * @param {bool=} loop_invariant_code_motion when supplied it sets loop_invariant_code_motion
 * @function
 * @returns {bool} the current value of loop_invariant_code_motion
 */
proto.loop_invariant_code_motion = function (loop_invariant_code_motion) {  
  if (typeof loop_invariant_code_motion !== 'undefined') self._loop_invariant_code_motion = loop_invariant_code_motion;
  return this._loop_invariant_code_motion;
}

/**
 * faster (but maybe less accurate) math functions
 * Default: `true`
 * 
 * @name fast_math
 * @param {bool=} fast_math when supplied it sets fast_math
 * @function
 * @returns {bool} the current value of fast_math
 */
proto.fast_math = function (fast_math) {  
  if (typeof fast_math !== 'undefined') self._fast_math = fast_math;
  return this._fast_math;
}

/**
 * print statistics for hydrogen
 * Default: `true`
 * 
 * @name hydrogen_stats
 * @param {bool=} hydrogen_stats when supplied it sets hydrogen_stats
 * @function
 * @returns {bool} the current value of hydrogen_stats
 */
proto.hydrogen_stats = function (hydrogen_stats) {  
  if (typeof hydrogen_stats !== 'undefined') self._hydrogen_stats = hydrogen_stats;
  return this._hydrogen_stats;
}

/**
 * trace check elimination phase
 * Default: `true`
 * 
 * @name trace_check_elimination
 * @param {bool=} trace_check_elimination when supplied it sets trace_check_elimination
 * @function
 * @returns {bool} the current value of trace_check_elimination
 */
proto.trace_check_elimination = function (trace_check_elimination) {  
  if (typeof trace_check_elimination !== 'undefined') self._trace_check_elimination = trace_check_elimination;
  return this._trace_check_elimination;
}

/**
 * trace generated hydrogen to file
 * Default: `true`
 * 
 * @name trace_hydrogen
 * @param {bool=} trace_hydrogen when supplied it sets trace_hydrogen
 * @function
 * @returns {bool} the current value of trace_hydrogen
 */
proto.trace_hydrogen = function (trace_hydrogen) {  
  if (typeof trace_hydrogen !== 'undefined') self._trace_hydrogen = trace_hydrogen;
  return this._trace_hydrogen;
}

/**
 * hydrogen tracing filter
 * Default: `*`
 * 
 * @name trace_hydrogen_filter
 * @param {string=} trace_hydrogen_filter when supplied it sets trace_hydrogen_filter
 * @function
 * @returns {string} the current value of trace_hydrogen_filter
 */
proto.trace_hydrogen_filter = function (trace_hydrogen_filter) {  
  if (typeof trace_hydrogen_filter !== 'undefined') self._trace_hydrogen_filter = trace_hydrogen_filter;
  return this._trace_hydrogen_filter;
}

/**
 * trace generated hydrogen for stubs
 * Default: `true`
 * 
 * @name trace_hydrogen_stubs
 * @param {bool=} trace_hydrogen_stubs when supplied it sets trace_hydrogen_stubs
 * @function
 * @returns {bool} the current value of trace_hydrogen_stubs
 */
proto.trace_hydrogen_stubs = function (trace_hydrogen_stubs) {  
  if (typeof trace_hydrogen_stubs !== 'undefined') self._trace_hydrogen_stubs = trace_hydrogen_stubs;
  return this._trace_hydrogen_stubs;
}

/**
 * trace hydrogen to given file name
 * Default: `null`
 * 
 * @name trace_hydrogen_file
 * @param {string=} trace_hydrogen_file when supplied it sets trace_hydrogen_file
 * @function
 * @returns {string} the current value of trace_hydrogen_file
 */
proto.trace_hydrogen_file = function (trace_hydrogen_file) {  
  if (typeof trace_hydrogen_file !== 'undefined') self._trace_hydrogen_file = trace_hydrogen_file;
  return this._trace_hydrogen_file;
}

/**
 * trace generated IR for specified phases
 * Default: `HLZ`
 * 
 * @name trace_phase
 * @param {string=} trace_phase when supplied it sets trace_phase
 * @function
 * @returns {string} the current value of trace_phase
 */
proto.trace_phase = function (trace_phase) {  
  if (typeof trace_phase !== 'undefined') self._trace_phase = trace_phase;
  return this._trace_phase;
}

/**
 * trace inlining decisions
 * Default: `true`
 * 
 * @name trace_inlining
 * @param {bool=} trace_inlining when supplied it sets trace_inlining
 * @function
 * @returns {bool} the current value of trace_inlining
 */
proto.trace_inlining = function (trace_inlining) {  
  if (typeof trace_inlining !== 'undefined') self._trace_inlining = trace_inlining;
  return this._trace_inlining;
}

/**
 * trace load elimination
 * Default: `true`
 * 
 * @name trace_load_elimination
 * @param {bool=} trace_load_elimination when supplied it sets trace_load_elimination
 * @function
 * @returns {bool} the current value of trace_load_elimination
 */
proto.trace_load_elimination = function (trace_load_elimination) {  
  if (typeof trace_load_elimination !== 'undefined') self._trace_load_elimination = trace_load_elimination;
  return this._trace_load_elimination;
}

/**
 * trace store elimination
 * Default: `true`
 * 
 * @name trace_store_elimination
 * @param {bool=} trace_store_elimination when supplied it sets trace_store_elimination
 * @function
 * @returns {bool} the current value of trace_store_elimination
 */
proto.trace_store_elimination = function (trace_store_elimination) {  
  if (typeof trace_store_elimination !== 'undefined') self._trace_store_elimination = trace_store_elimination;
  return this._trace_store_elimination;
}

/**
 * trace register allocator
 * Default: `true`
 * 
 * @name trace_alloc
 * @param {bool=} trace_alloc when supplied it sets trace_alloc
 * @function
 * @returns {bool} the current value of trace_alloc
 */
proto.trace_alloc = function (trace_alloc) {  
  if (typeof trace_alloc !== 'undefined') self._trace_alloc = trace_alloc;
  return this._trace_alloc;
}

/**
 * trace all use positions
 * Default: `true`
 * 
 * @name trace_all_uses
 * @param {bool=} trace_all_uses when supplied it sets trace_all_uses
 * @function
 * @returns {bool} the current value of trace_all_uses
 */
proto.trace_all_uses = function (trace_all_uses) {  
  if (typeof trace_all_uses !== 'undefined') self._trace_all_uses = trace_all_uses;
  return this._trace_all_uses;
}

/**
 * trace range analysis
 * Default: `true`
 * 
 * @name trace_range
 * @param {bool=} trace_range when supplied it sets trace_range
 * @function
 * @returns {bool} the current value of trace_range
 */
proto.trace_range = function (trace_range) {  
  if (typeof trace_range !== 'undefined') self._trace_range = trace_range;
  return this._trace_range;
}

/**
 * trace global value numbering
 * Default: `true`
 * 
 * @name trace_gvn
 * @param {bool=} trace_gvn when supplied it sets trace_gvn
 * @function
 * @returns {bool} the current value of trace_gvn
 */
proto.trace_gvn = function (trace_gvn) {  
  if (typeof trace_gvn !== 'undefined') self._trace_gvn = trace_gvn;
  return this._trace_gvn;
}

/**
 * trace representation types
 * Default: `true`
 * 
 * @name trace_representation
 * @param {bool=} trace_representation when supplied it sets trace_representation
 * @function
 * @returns {bool} the current value of trace_representation
 */
proto.trace_representation = function (trace_representation) {  
  if (typeof trace_representation !== 'undefined') self._trace_representation = trace_representation;
  return this._trace_representation;
}

/**
 * trace hydrogen escape analysis
 * Default: `true`
 * 
 * @name trace_escape_analysis
 * @param {bool=} trace_escape_analysis when supplied it sets trace_escape_analysis
 * @function
 * @returns {bool} the current value of trace_escape_analysis
 */
proto.trace_escape_analysis = function (trace_escape_analysis) {  
  if (typeof trace_escape_analysis !== 'undefined') self._trace_escape_analysis = trace_escape_analysis;
  return this._trace_escape_analysis;
}

/**
 * trace allocation folding
 * Default: `true`
 * 
 * @name trace_allocation_folding
 * @param {bool=} trace_allocation_folding when supplied it sets trace_allocation_folding
 * @function
 * @returns {bool} the current value of trace_allocation_folding
 */
proto.trace_allocation_folding = function (trace_allocation_folding) {  
  if (typeof trace_allocation_folding !== 'undefined') self._trace_allocation_folding = trace_allocation_folding;
  return this._trace_allocation_folding;
}

/**
 * trace object migration
 * Default: `true`
 * 
 * @name trace_migration
 * @param {bool=} trace_migration when supplied it sets trace_migration
 * @function
 * @returns {bool} the current value of trace_migration
 */
proto.trace_migration = function (trace_migration) {  
  if (typeof trace_migration !== 'undefined') self._trace_migration = trace_migration;
  return this._trace_migration;
}

/**
 * trace map generalization
 * Default: `true`
 * 
 * @name trace_generalization
 * @param {bool=} trace_generalization when supplied it sets trace_generalization
 * @function
 * @returns {bool} the current value of trace_generalization
 */
proto.trace_generalization = function (trace_generalization) {  
  if (typeof trace_generalization !== 'undefined') self._trace_generalization = trace_generalization;
  return this._trace_generalization;
}

/**
 * pointer map for every instruction
 * Default: `true`
 * 
 * @name stress_pointer_maps
 * @param {bool=} stress_pointer_maps when supplied it sets stress_pointer_maps
 * @function
 * @returns {bool} the current value of stress_pointer_maps
 */
proto.stress_pointer_maps = function (stress_pointer_maps) {  
  if (typeof stress_pointer_maps !== 'undefined') self._stress_pointer_maps = stress_pointer_maps;
  return this._stress_pointer_maps;
}

/**
 * environment for every instruction
 * Default: `true`
 * 
 * @name stress_environments
 * @param {bool=} stress_environments when supplied it sets stress_environments
 * @function
 * @returns {bool} the current value of stress_environments
 */
proto.stress_environments = function (stress_environments) {  
  if (typeof stress_environments !== 'undefined') self._stress_environments = stress_environments;
  return this._stress_environments;
}

/**
 * print number of possible deopt points
 * Default: `true`
 * 
 * @name print_deopt_stress
 * @param {bool=} print_deopt_stress when supplied it sets print_deopt_stress
 * @function
 * @returns {bool} the current value of print_deopt_stress
 */
proto.print_deopt_stress = function (print_deopt_stress) {  
  if (typeof print_deopt_stress !== 'undefined') self._print_deopt_stress = print_deopt_stress;
  return this._print_deopt_stress;
}

/**
 * put a break point before deoptimizing
 * Default: `true`
 * 
 * @name trap_on_deopt
 * @param {bool=} trap_on_deopt when supplied it sets trap_on_deopt
 * @function
 * @returns {bool} the current value of trap_on_deopt
 */
proto.trap_on_deopt = function (trap_on_deopt) {  
  if (typeof trap_on_deopt !== 'undefined') self._trap_on_deopt = trap_on_deopt;
  return this._trap_on_deopt;
}

/**
 * deoptimize uncommon cases
 * Default: `true`
 * 
 * @name deoptimize_uncommon_cases
 * @param {bool=} deoptimize_uncommon_cases when supplied it sets deoptimize_uncommon_cases
 * @function
 * @returns {bool} the current value of deoptimize_uncommon_cases
 */
proto.deoptimize_uncommon_cases = function (deoptimize_uncommon_cases) {  
  if (typeof deoptimize_uncommon_cases !== 'undefined') self._deoptimize_uncommon_cases = deoptimize_uncommon_cases;
  return this._deoptimize_uncommon_cases;
}

/**
 * polymorphic inlining
 * Default: `true`
 * 
 * @name polymorphic_inlining
 * @param {bool=} polymorphic_inlining when supplied it sets polymorphic_inlining
 * @function
 * @returns {bool} the current value of polymorphic_inlining
 */
proto.polymorphic_inlining = function (polymorphic_inlining) {  
  if (typeof polymorphic_inlining !== 'undefined') self._polymorphic_inlining = polymorphic_inlining;
  return this._polymorphic_inlining;
}

/**
 * use on-stack replacement
 * Default: `true`
 * 
 * @name use_osr
 * @param {bool=} use_osr when supplied it sets use_osr
 * @function
 * @returns {bool} the current value of use_osr
 */
proto.use_osr = function (use_osr) {  
  if (typeof use_osr !== 'undefined') self._use_osr = use_osr;
  return this._use_osr;
}

/**
 * trace array bounds check elimination
 * Default: `true`
 * 
 * @name trace_bce
 * @param {bool=} trace_bce when supplied it sets trace_bce
 * @function
 * @returns {bool} the current value of trace_bce
 */
proto.trace_bce = function (trace_bce) {  
  if (typeof trace_bce !== 'undefined') self._trace_bce = trace_bce;
  return this._trace_bce;
}

/**
 * use load elimination
 * Default: `true`
 * 
 * @name load_elimination
 * @param {bool=} load_elimination when supplied it sets load_elimination
 * @function
 * @returns {bool} the current value of load_elimination
 */
proto.load_elimination = function (load_elimination) {  
  if (typeof load_elimination !== 'undefined') self._load_elimination = load_elimination;
  return this._load_elimination;
}

/**
 * use check elimination
 * Default: `true`
 * 
 * @name check_elimination
 * @param {bool=} check_elimination when supplied it sets check_elimination
 * @function
 * @returns {bool} the current value of check_elimination
 */
proto.check_elimination = function (check_elimination) {  
  if (typeof check_elimination !== 'undefined') self._check_elimination = check_elimination;
  return this._check_elimination;
}

/**
 * use store elimination
 * Default: `true`
 * 
 * @name store_elimination
 * @param {bool=} store_elimination when supplied it sets store_elimination
 * @function
 * @returns {bool} the current value of store_elimination
 */
proto.store_elimination = function (store_elimination) {  
  if (typeof store_elimination !== 'undefined') self._store_elimination = store_elimination;
  return this._store_elimination;
}

/**
 * use dead code elimination
 * Default: `true`
 * 
 * @name dead_code_elimination
 * @param {bool=} dead_code_elimination when supplied it sets dead_code_elimination
 * @function
 * @returns {bool} the current value of dead_code_elimination
 */
proto.dead_code_elimination = function (dead_code_elimination) {  
  if (typeof dead_code_elimination !== 'undefined') self._dead_code_elimination = dead_code_elimination;
  return this._dead_code_elimination;
}

/**
 * use constant folding
 * Default: `true`
 * 
 * @name fold_constants
 * @param {bool=} fold_constants when supplied it sets fold_constants
 * @function
 * @returns {bool} the current value of fold_constants
 */
proto.fold_constants = function (fold_constants) {  
  if (typeof fold_constants !== 'undefined') self._fold_constants = fold_constants;
  return this._fold_constants;
}

/**
 * trace dead code elimination
 * Default: `true`
 * 
 * @name trace_dead_code_elimination
 * @param {bool=} trace_dead_code_elimination when supplied it sets trace_dead_code_elimination
 * @function
 * @returns {bool} the current value of trace_dead_code_elimination
 */
proto.trace_dead_code_elimination = function (trace_dead_code_elimination) {  
  if (typeof trace_dead_code_elimination !== 'undefined') self._trace_dead_code_elimination = trace_dead_code_elimination;
  return this._trace_dead_code_elimination;
}

/**
 * eliminate unreachable code
 * Default: `true`
 * 
 * @name unreachable_code_elimination
 * @param {bool=} unreachable_code_elimination when supplied it sets unreachable_code_elimination
 * @function
 * @returns {bool} the current value of unreachable_code_elimination
 */
proto.unreachable_code_elimination = function (unreachable_code_elimination) {  
  if (typeof unreachable_code_elimination !== 'undefined') self._unreachable_code_elimination = unreachable_code_elimination;
  return this._unreachable_code_elimination;
}

/**
 * trace on-stack replacement
 * Default: `true`
 * 
 * @name trace_osr
 * @param {bool=} trace_osr when supplied it sets trace_osr
 * @function
 * @returns {bool} the current value of trace_osr
 */
proto.trace_osr = function (trace_osr) {  
  if (typeof trace_osr !== 'undefined') self._trace_osr = trace_osr;
  return this._trace_osr;
}

/**
 * number of stress runs
 * Default: `0`
 * 
 * @name stress_runs
 * @param {int=} stress_runs when supplied it sets stress_runs
 * @function
 * @returns {int} the current value of stress_runs
 */
proto.stress_runs = function (stress_runs) {  
  if (typeof stress_runs !== 'undefined') self._stress_runs = stress_runs;
  return this._stress_runs;
}

/**
 * optimize closures
 * Default: `true`
 * 
 * @name optimize_closures
 * @param {bool=} optimize_closures when supplied it sets optimize_closures
 * @function
 * @returns {bool} the current value of optimize_closures
 */
proto.optimize_closures = function (optimize_closures) {  
  if (typeof optimize_closures !== 'undefined') self._optimize_closures = optimize_closures;
  return this._optimize_closures;
}

/**
 * inline constructor calls
 * Default: `true`
 * 
 * @name inline_construct
 * @param {bool=} inline_construct when supplied it sets inline_construct
 * @function
 * @returns {bool} the current value of inline_construct
 */
proto.inline_construct = function (inline_construct) {  
  if (typeof inline_construct !== 'undefined') self._inline_construct = inline_construct;
  return this._inline_construct;
}

/**
 * inline functions with arguments object
 * Default: `true`
 * 
 * @name inline_arguments
 * @param {bool=} inline_arguments when supplied it sets inline_arguments
 * @function
 * @returns {bool} the current value of inline_arguments
 */
proto.inline_arguments = function (inline_arguments) {  
  if (typeof inline_arguments !== 'undefined') self._inline_arguments = inline_arguments;
  return this._inline_arguments;
}

/**
 * inline JavaScript accessors
 * Default: `true`
 * 
 * @name inline_accessors
 * @param {bool=} inline_accessors when supplied it sets inline_accessors
 * @function
 * @returns {bool} the current value of inline_accessors
 */
proto.inline_accessors = function (inline_accessors) {  
  if (typeof inline_accessors !== 'undefined') self._inline_accessors = inline_accessors;
  return this._inline_accessors;
}

/**
 * number of stack frames inspected by the profiler
 * Default: `1`
 * 
 * @name frame_count
 * @param {int=} frame_count when supplied it sets frame_count
 * @function
 * @returns {int} the current value of frame_count
 */
proto.frame_count = function (frame_count) {  
  if (typeof frame_count !== 'undefined') self._frame_count = frame_count;
  return this._frame_count;
}

/**
 * call count before self-optimization
 * Default: `130`
 * 
 * @name self_opt_count
 * @param {int=} self_opt_count when supplied it sets self_opt_count
 * @function
 * @returns {int} the current value of self_opt_count
 */
proto.self_opt_count = function (self_opt_count) {  
  if (typeof self_opt_count !== 'undefined') self._self_opt_count = self_opt_count;
  return this._self_opt_count;
}

/**
 * extra verbose compilation tracing
 * Default: `true`
 * 
 * @name trace_opt_verbose
 * @param {bool=} trace_opt_verbose when supplied it sets trace_opt_verbose
 * @function
 * @returns {bool} the current value of trace_opt_verbose
 */
proto.trace_opt_verbose = function (trace_opt_verbose) {  
  if (typeof trace_opt_verbose !== 'undefined') self._trace_opt_verbose = trace_opt_verbose;
  return this._trace_opt_verbose;
}

/**
 * emit comments in code disassembly
 * Default: `true`
 * 
 * @name code_comments
 * @param {bool=} code_comments when supplied it sets code_comments
 * @function
 * @returns {bool} the current value of code_comments
 */
proto.code_comments = function (code_comments) {  
  if (typeof code_comments !== 'undefined') self._code_comments = code_comments;
  return this._code_comments;
}

/**
 * expose natives in global object
 * Default: `null`
 * 
 * @name expose_natives_as
 * @param {string=} expose_natives_as when supplied it sets expose_natives_as
 * @function
 * @returns {string} the current value of expose_natives_as
 */
proto.expose_natives_as = function (expose_natives_as) {  
  if (typeof expose_natives_as !== 'undefined') self._expose_natives_as = expose_natives_as;
  return this._expose_natives_as;
}

/**
 * expose debug in global object
 * Default: `null`
 * 
 * @name expose_debug_as
 * @param {string=} expose_debug_as when supplied it sets expose_debug_as
 * @function
 * @returns {string} the current value of expose_debug_as
 */
proto.expose_debug_as = function (expose_debug_as) {  
  if (typeof expose_debug_as !== 'undefined') self._expose_debug_as = expose_debug_as;
  return this._expose_debug_as;
}

/**
 * expose freeBuffer extension
 * Default: `true`
 * 
 * @name expose_free_buffer
 * @param {bool=} expose_free_buffer when supplied it sets expose_free_buffer
 * @function
 * @returns {bool} the current value of expose_free_buffer
 */
proto.expose_free_buffer = function (expose_free_buffer) {  
  if (typeof expose_free_buffer !== 'undefined') self._expose_free_buffer = expose_free_buffer;
  return this._expose_free_buffer;
}

/**
 * expose gc extension
 * Default: `true`
 * 
 * @name expose_gc
 * @param {bool=} expose_gc when supplied it sets expose_gc
 * @function
 * @returns {bool} the current value of expose_gc
 */
proto.expose_gc = function (expose_gc) {  
  if (typeof expose_gc !== 'undefined') self._expose_gc = expose_gc;
  return this._expose_gc;
}

/**
 * expose trigger-failure extension
 * Default: `true`
 * 
 * @name expose_trigger_failure
 * @param {bool=} expose_trigger_failure when supplied it sets expose_trigger_failure
 * @function
 * @returns {bool} the current value of expose_trigger_failure
 */
proto.expose_trigger_failure = function (expose_trigger_failure) {  
  if (typeof expose_trigger_failure !== 'undefined') self._expose_trigger_failure = expose_trigger_failure;
  return this._expose_trigger_failure;
}

/**
 * number of stack frames to capture
 * Default: `10`
 * 
 * @name stack_trace_limit
 * @param {int=} stack_trace_limit when supplied it sets stack_trace_limit
 * @function
 * @returns {int} the current value of stack_trace_limit
 */
proto.stack_trace_limit = function (stack_trace_limit) {  
  if (typeof stack_trace_limit !== 'undefined') self._stack_trace_limit = stack_trace_limit;
  return this._stack_trace_limit;
}

/**
 * disable builtin natives files
 * Default: `true`
 * 
 * @name disable_native_files
 * @param {bool=} disable_native_files when supplied it sets disable_native_files
 * @function
 * @returns {bool} the current value of disable_native_files
 */
proto.disable_native_files = function (disable_native_files) {  
  if (typeof disable_native_files !== 'undefined') self._disable_native_files = disable_native_files;
  return this._disable_native_files;
}

/**
 * use fast inline allocation
 * Default: `true`
 * 
 * @name inline_new
 * @param {bool=} inline_new when supplied it sets inline_new
 * @function
 * @returns {bool} the current value of inline_new
 */
proto.inline_new = function (inline_new) {  
  if (typeof inline_new !== 'undefined') self._inline_new = inline_new;
  return this._inline_new;
}

/**
 * trace function calls
 * Default: `true`
 * 
 * @name trace
 * @param {bool=} trace when supplied it sets trace
 * @function
 * @returns {bool} the current value of trace
 */
proto.trace = function (trace) {  
  if (typeof trace !== 'undefined') self._trace = trace;
  return this._trace;
}

/**
 * use lazy compilation
 * Default: `true`
 * 
 * @name lazy
 * @param {bool=} lazy when supplied it sets lazy
 * @function
 * @returns {bool} the current value of lazy
 */
proto.lazy = function (lazy) {  
  if (typeof lazy !== 'undefined') self._lazy = lazy;
  return this._lazy;
}

/**
 * trace lazy optimization
 * Default: `true`
 * 
 * @name trace_opt
 * @param {bool=} trace_opt when supplied it sets trace_opt
 * @function
 * @returns {bool} the current value of trace_opt
 */
proto.trace_opt = function (trace_opt) {  
  if (typeof trace_opt !== 'undefined') self._trace_opt = trace_opt;
  return this._trace_opt;
}

/**
 * trace lazy optimization statistics
 * Default: `true`
 * 
 * @name trace_opt_stats
 * @param {bool=} trace_opt_stats when supplied it sets trace_opt_stats
 * @function
 * @returns {bool} the current value of trace_opt_stats
 */
proto.trace_opt_stats = function (trace_opt_stats) {  
  if (typeof trace_opt_stats !== 'undefined') self._trace_opt_stats = trace_opt_stats;
  return this._trace_opt_stats;
}

/**
 * use adaptive optimizations
 * Default: `true`
 * 
 * @name opt
 * @param {bool=} opt when supplied it sets opt
 * @function
 * @returns {bool} the current value of opt
 */
proto.opt = function (opt) {  
  if (typeof opt !== 'undefined') self._opt = opt;
  return this._opt;
}

/**
 * always try to optimize functions
 * Default: `true`
 * 
 * @name always_opt
 * @param {bool=} always_opt when supplied it sets always_opt
 * @function
 * @returns {bool} the current value of always_opt
 */
proto.always_opt = function (always_opt) {  
  if (typeof always_opt !== 'undefined') self._always_opt = always_opt;
  return this._always_opt;
}

/**
 * always try to OSR functions
 * Default: `true`
 * 
 * @name always_osr
 * @param {bool=} always_osr when supplied it sets always_osr
 * @function
 * @returns {bool} the current value of always_osr
 */
proto.always_osr = function (always_osr) {  
  if (typeof always_osr !== 'undefined') self._always_osr = always_osr;
  return this._always_osr;
}

/**
 * prepare for turning on always opt
 * Default: `true`
 * 
 * @name prepare_always_opt
 * @param {bool=} prepare_always_opt when supplied it sets prepare_always_opt
 * @function
 * @returns {bool} the current value of prepare_always_opt
 */
proto.prepare_always_opt = function (prepare_always_opt) {  
  if (typeof prepare_always_opt !== 'undefined') self._prepare_always_opt = prepare_always_opt;
  return this._prepare_always_opt;
}

/**
 * trace optimize function deoptimization
 * Default: `true`
 * 
 * @name trace_deopt
 * @param {bool=} trace_deopt when supplied it sets trace_deopt
 * @function
 * @returns {bool} the current value of trace_deopt
 */
proto.trace_deopt = function (trace_deopt) {  
  if (typeof trace_deopt !== 'undefined') self._trace_deopt = trace_deopt;
  return this._trace_deopt;
}

/**
 * enable compilation cache
 * Default: `true`
 * 
 * @name compilation_cache
 * @param {bool=} compilation_cache when supplied it sets compilation_cache
 * @function
 * @returns {bool} the current value of compilation_cache
 */
proto.compilation_cache = function (compilation_cache) {  
  if (typeof compilation_cache !== 'undefined') self._compilation_cache = compilation_cache;
  return this._compilation_cache;
}

/**
 * cache prototype transitions
 * Default: `true`
 * 
 * @name cache_prototype_transitions
 * @param {bool=} cache_prototype_transitions when supplied it sets cache_prototype_transitions
 * @function
 * @returns {bool} the current value of cache_prototype_transitions
 */
proto.cache_prototype_transitions = function (cache_prototype_transitions) {  
  if (typeof cache_prototype_transitions !== 'undefined') self._cache_prototype_transitions = cache_prototype_transitions;
  return this._cache_prototype_transitions;
}

/**
 * trace debugging JSON request/response
 * Default: `true`
 * 
 * @name trace_debug_json
 * @param {bool=} trace_debug_json when supplied it sets trace_debug_json
 * @function
 * @returns {bool} the current value of trace_debug_json
 */
proto.trace_debug_json = function (trace_debug_json) {  
  if (typeof trace_debug_json !== 'undefined') self._trace_debug_json = trace_debug_json;
  return this._trace_debug_json;
}

/**
 * enable liveedit experimental feature
 * Default: `true`
 * 
 * @name enable_liveedit
 * @param {bool=} enable_liveedit when supplied it sets enable_liveedit
 * @function
 * @returns {bool} the current value of enable_liveedit
 */
proto.enable_liveedit = function (enable_liveedit) {  
  if (typeof enable_liveedit !== 'undefined') self._enable_liveedit = enable_liveedit;
  return this._enable_liveedit;
}

/**
 * abort by crashing
 * Default: `true`
 * 
 * @name hard_abort
 * @param {bool=} hard_abort when supplied it sets hard_abort
 * @function
 * @returns {bool} the current value of hard_abort
 */
proto.hard_abort = function (hard_abort) {  
  if (typeof hard_abort !== 'undefined') self._hard_abort = hard_abort;
  return this._hard_abort;
}

/**
 * max size of the old space (in Mbytes)
 * Default: `0`
 * 
 * @name max_old_space_size
 * @param {int=} max_old_space_size when supplied it sets max_old_space_size
 * @function
 * @returns {int} the current value of max_old_space_size
 */
proto.max_old_space_size = function (max_old_space_size) {  
  if (typeof max_old_space_size !== 'undefined') self._max_old_space_size = max_old_space_size;
  return this._max_old_space_size;
}

/**
 * max size of executable memory (in Mbytes)
 * Default: `0`
 * 
 * @name max_executable_size
 * @param {int=} max_executable_size when supplied it sets max_executable_size
 * @function
 * @returns {int} the current value of max_executable_size
 */
proto.max_executable_size = function (max_executable_size) {  
  if (typeof max_executable_size !== 'undefined') self._max_executable_size = max_executable_size;
  return this._max_executable_size;
}

/**
 * always perform global GCs
 * Default: `true`
 * 
 * @name gc_global
 * @param {bool=} gc_global when supplied it sets gc_global
 * @function
 * @returns {bool} the current value of gc_global
 */
proto.gc_global = function (gc_global) {  
  if (typeof gc_global !== 'undefined') self._gc_global = gc_global;
  return this._gc_global;
}

/**
 * garbage collect after <n> allocations
 * Default: `-1`
 * 
 * @name gc_interval
 * @param {int=} gc_interval when supplied it sets gc_interval
 * @function
 * @returns {int} the current value of gc_interval
 */
proto.gc_interval = function (gc_interval) {  
  if (typeof gc_interval !== 'undefined') self._gc_interval = gc_interval;
  return this._gc_interval;
}

/**
 * trace code flushing progress
 * Default: `true`
 * 
 * @name trace_code_flushing
 * @param {bool=} trace_code_flushing when supplied it sets trace_code_flushing
 * @function
 * @returns {bool} the current value of trace_code_flushing
 */
proto.trace_code_flushing = function (trace_code_flushing) {  
  if (typeof trace_code_flushing !== 'undefined') self._trace_code_flushing = trace_code_flushing;
  return this._trace_code_flushing;
}

/**
 * use incremental marking
 * Default: `true`
 * 
 * @name incremental_marking
 * @param {bool=} incremental_marking when supplied it sets incremental_marking
 * @function
 * @returns {bool} the current value of incremental_marking
 */
proto.incremental_marking = function (incremental_marking) {  
  if (typeof incremental_marking !== 'undefined') self._incremental_marking = incremental_marking;
  return this._incremental_marking;
}

/**
 * do incremental marking steps
 * Default: `true`
 * 
 * @name incremental_marking_steps
 * @param {bool=} incremental_marking_steps when supplied it sets incremental_marking_steps
 * @function
 * @returns {bool} the current value of incremental_marking_steps
 */
proto.incremental_marking_steps = function (incremental_marking_steps) {  
  if (typeof incremental_marking_steps !== 'undefined') self._incremental_marking_steps = incremental_marking_steps;
  return this._incremental_marking_steps;
}

/**
 * enable parallel sweeping
 * Default: `true`
 * 
 * @name parallel_sweeping
 * @param {bool=} parallel_sweeping when supplied it sets parallel_sweeping
 * @function
 * @returns {bool} the current value of parallel_sweeping
 */
proto.parallel_sweeping = function (parallel_sweeping) {  
  if (typeof parallel_sweeping !== 'undefined') self._parallel_sweeping = parallel_sweeping;
  return this._parallel_sweeping;
}

/**
 * enable concurrent sweeping
 * Default: `true`
 * 
 * @name concurrent_sweeping
 * @param {bool=} concurrent_sweeping when supplied it sets concurrent_sweeping
 * @function
 * @returns {bool} the current value of concurrent_sweeping
 */
proto.concurrent_sweeping = function (concurrent_sweeping) {  
  if (typeof concurrent_sweeping !== 'undefined') self._concurrent_sweeping = concurrent_sweeping;
  return this._concurrent_sweeping;
}

/**
 * enable job based sweeping
 * Default: `true`
 * 
 * @name job_based_sweeping
 * @param {bool=} job_based_sweeping when supplied it sets job_based_sweeping
 * @function
 * @returns {bool} the current value of job_based_sweeping
 */
proto.job_based_sweeping = function (job_based_sweeping) {  
  if (typeof job_based_sweeping !== 'undefined') self._job_based_sweeping = job_based_sweeping;
  return this._job_based_sweeping;
}

/**
 * verify heap pointers before and after GC
 * Default: `true`
 * 
 * @name verify_heap
 * @param {bool=} verify_heap when supplied it sets verify_heap
 * @function
 * @returns {bool} the current value of verify_heap
 */
proto.verify_heap = function (verify_heap) {  
  if (typeof verify_heap !== 'undefined') self._verify_heap = verify_heap;
  return this._verify_heap;
}

/**
 * use inline caching
 * Default: `true`
 * 
 * @name use_ic
 * @param {bool=} use_ic when supplied it sets use_ic
 * @function
 * @returns {bool} the current value of use_ic
 */
proto.use_ic = function (use_ic) {  
  if (typeof use_ic !== 'undefined') self._use_ic = use_ic;
  return this._use_ic;
}

/**
 * Perform compaction on every full GC
 * Default: `true`
 * 
 * @name always_compact
 * @param {bool=} always_compact when supplied it sets always_compact
 * @function
 * @returns {bool} the current value of always_compact
 */
proto.always_compact = function (always_compact) {  
  if (typeof always_compact !== 'undefined') self._always_compact = always_compact;
  return this._always_compact;
}

/**
 * allows verbose printing
 * Default: `true`
 * 
 * @name use_verbose_printer
 * @param {bool=} use_verbose_printer when supplied it sets use_verbose_printer
 * @function
 * @returns {bool} the current value of use_verbose_printer
 */
proto.use_verbose_printer = function (use_verbose_printer) {  
  if (typeof use_verbose_printer !== 'undefined') self._use_verbose_printer = use_verbose_printer;
  return this._use_verbose_printer;
}

/**
 * allow natives syntax
 * Default: `true`
 * 
 * @name allow_natives_syntax
 * @param {bool=} allow_natives_syntax when supplied it sets allow_natives_syntax
 * @function
 * @returns {bool} the current value of allow_natives_syntax
 */
proto.allow_natives_syntax = function (allow_natives_syntax) {  
  if (typeof allow_natives_syntax !== 'undefined') self._allow_natives_syntax = allow_natives_syntax;
  return this._allow_natives_syntax;
}

/**
 * trace parsing and preparsing
 * Default: `true`
 * 
 * @name trace_parse
 * @param {bool=} trace_parse when supplied it sets trace_parse
 * @function
 * @returns {bool} the current value of trace_parse
 */
proto.trace_parse = function (trace_parse) {  
  if (typeof trace_parse !== 'undefined') self._trace_parse = trace_parse;
  return this._trace_parse;
}

/**
 * Trace simulator execution
 * Default: `true`
 * 
 * @name trace_sim
 * @param {bool=} trace_sim when supplied it sets trace_sim
 * @function
 * @returns {bool} the current value of trace_sim
 */
proto.trace_sim = function (trace_sim) {  
  if (typeof trace_sim !== 'undefined') self._trace_sim = trace_sim;
  return this._trace_sim;
}

/**
 * Enable debugging the simulator
 * Default: `true`
 * 
 * @name debug_sim
 * @param {bool=} debug_sim when supplied it sets debug_sim
 * @function
 * @returns {bool} the current value of debug_sim
 */
proto.debug_sim = function (debug_sim) {  
  if (typeof debug_sim !== 'undefined') self._debug_sim = debug_sim;
  return this._debug_sim;
}

/**
 * Simulator stop after x number of instructions
 * Default: `0`
 * 
 * @name stop_sim_at
 * @param {int=} stop_sim_at when supplied it sets stop_sim_at
 * @function
 * @returns {int} the current value of stop_sim_at
 */
proto.stop_sim_at = function (stop_sim_at) {  
  if (typeof stop_sim_at !== 'undefined') self._stop_sim_at = stop_sim_at;
  return this._stop_sim_at;
}

/**
 * generate optimized regexp code
 * Default: `true`
 * 
 * @name regexp_optimization
 * @param {bool=} regexp_optimization when supplied it sets regexp_optimization
 * @function
 * @returns {bool} the current value of regexp_optimization
 */
proto.regexp_optimization = function (regexp_optimization) {  
  if (typeof regexp_optimization !== 'undefined') self._regexp_optimization = regexp_optimization;
  return this._regexp_optimization;
}

/**
 * testing_bool_flag
 * Default: `true`
 * 
 * @name testing_bool_flag
 * @param {bool=} testing_bool_flag when supplied it sets testing_bool_flag
 * @function
 * @returns {bool} the current value of testing_bool_flag
 */
proto.testing_bool_flag = function (testing_bool_flag) {  
  if (typeof testing_bool_flag !== 'undefined') self._testing_bool_flag = testing_bool_flag;
  return this._testing_bool_flag;
}

/**
 * testing_int_flag
 * Default: `13`
 * 
 * @name testing_int_flag
 * @param {int=} testing_int_flag when supplied it sets testing_int_flag
 * @function
 * @returns {int} the current value of testing_int_flag
 */
proto.testing_int_flag = function (testing_int_flag) {  
  if (typeof testing_int_flag !== 'undefined') self._testing_int_flag = testing_int_flag;
  return this._testing_int_flag;
}

/**
 * float-flag
 * Default: `.`
 * 
 * @name testing_float_flag
 * @param {float=} testing_float_flag when supplied it sets testing_float_flag
 * @function
 * @returns {float} the current value of testing_float_flag
 */
proto.testing_float_flag = function (testing_float_flag) {  
  if (typeof testing_float_flag !== 'undefined') self._testing_float_flag = testing_float_flag;
  return this._testing_float_flag;
}

/**
 * Seed used for threading test randomness
 * Default: `42`
 * 
 * @name testing_prng_seed
 * @param {int=} testing_prng_seed when supplied it sets testing_prng_seed
 * @function
 * @returns {int} the current value of testing_prng_seed
 */
proto.testing_prng_seed = function (testing_prng_seed) {  
  if (typeof testing_prng_seed !== 'undefined') self._testing_prng_seed = testing_prng_seed;
  return this._testing_prng_seed;
}

/**
 * enable predictable mode
 * Default: `true`
 * 
 * @name predictable
 * @param {bool=} predictable when supplied it sets predictable
 * @function
 * @returns {bool} the current value of predictable
 */
proto.predictable = function (predictable) {  
  if (typeof predictable !== 'undefined') self._predictable = predictable;
  return this._predictable;
}

/**
 * Print usage message, including flags, on console
 * Default: `true`
 * 
 * @name help
 * @param {bool=} help when supplied it sets help
 * @function
 * @returns {bool} the current value of help
 */
proto.help = function (help) {  
  if (typeof help !== 'undefined') self._help = help;
  return this._help;
}

/**
 * Dump counters on exit
 * Default: `true`
 * 
 * @name dump_counters
 * @param {bool=} dump_counters when supplied it sets dump_counters
 * @function
 * @returns {bool} the current value of dump_counters
 */
proto.dump_counters = function (dump_counters) {  
  if (typeof dump_counters !== 'undefined') self._dump_counters = dump_counters;
  return this._dump_counters;
}

/**
 * Enable JavaScript debugger
 * Default: `true`
 * 
 * @name debugger
 * @param {bool=} debugger when supplied it sets debugger
 * @function
 * @returns {bool} the current value of debugger
 */
proto.debugger = function (debugr) {  
  if (typeof debugr !== 'undefined') self._debugger = debugr;
  return this._debugger;
}

/**
 * Enable debugger agent
 * Default: `true`
 * 
 * @name debugger_agent
 * @param {bool=} debugger_agent when supplied it sets debugger_agent
 * @function
 * @returns {bool} the current value of debugger_agent
 */
proto.debugger_agent = function (debugger_agent) {  
  if (typeof debugger_agent !== 'undefined') self._debugger_agent = debugger_agent;
  return this._debugger_agent;
}

/**
 * Port to use for remote debugging
 * Default: `5858`
 * 
 * @name debugger_port
 * @param {int=} debugger_port when supplied it sets debugger_port
 * @function
 * @returns {int} the current value of debugger_port
 */
proto.debugger_port = function (debugger_port) {  
  if (typeof debugger_port !== 'undefined') self._debugger_port = debugger_port;
  return this._debugger_port;
}

/**
 * Map counters to a file
 * Default: ``
 * 
 * @name map_counters
 * @param {string=} map_counters when supplied it sets map_counters
 * @function
 * @returns {string} the current value of map_counters
 */
proto.map_counters = function (map_counters) {  
  if (typeof map_counters !== 'undefined') self._map_counters = map_counters;
  return this._map_counters;
}

/**
 * Enable debugger compile events
 * Default: `true`
 * 
 * @name debug_compile_events
 * @param {bool=} debug_compile_events when supplied it sets debug_compile_events
 * @function
 * @returns {bool} the current value of debug_compile_events
 */
proto.debug_compile_events = function (debug_compile_events) {  
  if (typeof debug_compile_events !== 'undefined') self._debug_compile_events = debug_compile_events;
  return this._debug_compile_events;
}

/**
 * enable GDBJIT interface (disables compacting GC)
 * Default: `true`
 * 
 * @name gdbjit
 * @param {bool=} gdbjit when supplied it sets gdbjit
 * @function
 * @returns {bool} the current value of gdbjit
 */
proto.gdbjit = function (gdbjit) {  
  if (typeof gdbjit !== 'undefined') self._gdbjit = gdbjit;
  return this._gdbjit;
}

/**
 * enable GDBJIT interface for all code objects
 * Default: `true`
 * 
 * @name gdbjit_full
 * @param {bool=} gdbjit_full when supplied it sets gdbjit_full
 * @function
 * @returns {bool} the current value of gdbjit_full
 */
proto.gdbjit_full = function (gdbjit_full) {  
  if (typeof gdbjit_full !== 'undefined') self._gdbjit_full = gdbjit_full;
  return this._gdbjit_full;
}

/**
 * dump elf objects with debug info to disk
 * Default: `true`
 * 
 * @name gdbjit_dump
 * @param {bool=} gdbjit_dump when supplied it sets gdbjit_dump
 * @function
 * @returns {bool} the current value of gdbjit_dump
 */
proto.gdbjit_dump = function (gdbjit_dump) {  
  if (typeof gdbjit_dump !== 'undefined') self._gdbjit_dump = gdbjit_dump;
  return this._gdbjit_dump;
}

/**
 * pretty print source code
 * Default: `true`
 * 
 * @name print_source
 * @param {bool=} print_source when supplied it sets print_source
 * @function
 * @returns {bool} the current value of print_source
 */
proto.print_source = function (print_source) {  
  if (typeof print_source !== 'undefined') self._print_source = print_source;
  return this._print_source;
}

/**
 * print source AST
 * Default: `true`
 * 
 * @name print_ast
 * @param {bool=} print_ast when supplied it sets print_ast
 * @function
 * @returns {bool} the current value of print_ast
 */
proto.print_ast = function (print_ast) {  
  if (typeof print_ast !== 'undefined') self._print_ast = print_ast;
  return this._print_ast;
}

/**
 * print source AST for builtins
 * Default: `true`
 * 
 * @name print_builtin_ast
 * @param {bool=} print_builtin_ast when supplied it sets print_builtin_ast
 * @function
 * @returns {bool} the current value of print_builtin_ast
 */
proto.print_builtin_ast = function (print_builtin_ast) {  
  if (typeof print_builtin_ast !== 'undefined') self._print_builtin_ast = print_builtin_ast;
  return this._print_builtin_ast;
}

/**
 * function name where to insert a breakpoint
 * Default: ``
 * 
 * @name stop_at
 * @param {string=} stop_at when supplied it sets stop_at
 * @function
 * @returns {string} the current value of stop_at
 */
proto.stop_at = function (stop_at) {  
  if (typeof stop_at !== 'undefined') self._stop_at = stop_at;
  return this._stop_at;
}

/**
 * replace aborts by breakpoints
 * Default: `true`
 * 
 * @name trap_on_abort
 * @param {bool=} trap_on_abort when supplied it sets trap_on_abort
 * @function
 * @returns {bool} the current value of trap_on_abort
 */
proto.trap_on_abort = function (trap_on_abort) {  
  if (typeof trap_on_abort !== 'undefined') self._trap_on_abort = trap_on_abort;
  return this._trap_on_abort;
}

/**
 * print scopes for builtins
 * Default: `true`
 * 
 * @name print_builtin_scopes
 * @param {bool=} print_builtin_scopes when supplied it sets print_builtin_scopes
 * @function
 * @returns {bool} the current value of print_builtin_scopes
 */
proto.print_builtin_scopes = function (print_builtin_scopes) {  
  if (typeof print_builtin_scopes !== 'undefined') self._print_builtin_scopes = print_builtin_scopes;
  return this._print_builtin_scopes;
}

/**
 * print scopes
 * Default: `true`
 * 
 * @name print_scopes
 * @param {bool=} print_scopes when supplied it sets print_scopes
 * @function
 * @returns {bool} the current value of print_scopes
 */
proto.print_scopes = function (print_scopes) {  
  if (typeof print_scopes !== 'undefined') self._print_scopes = print_scopes;
  return this._print_scopes;
}

/**
 * trace contexts operations
 * Default: `true`
 * 
 * @name trace_contexts
 * @param {bool=} trace_contexts when supplied it sets trace_contexts
 * @function
 * @returns {bool} the current value of trace_contexts
 */
proto.trace_contexts = function (trace_contexts) {  
  if (typeof trace_contexts !== 'undefined') self._trace_contexts = trace_contexts;
  return this._trace_contexts;
}

/**
 * print stuff during garbage collection
 * Default: `true`
 * 
 * @name gc_verbose
 * @param {bool=} gc_verbose when supplied it sets gc_verbose
 * @function
 * @returns {bool} the current value of gc_verbose
 */
proto.gc_verbose = function (gc_verbose) {  
  if (typeof gc_verbose !== 'undefined') self._gc_verbose = gc_verbose;
  return this._gc_verbose;
}

/**
 * report heap statistics before and after GC
 * Default: `true`
 * 
 * @name heap_stats
 * @param {bool=} heap_stats when supplied it sets heap_stats
 * @function
 * @returns {bool} the current value of heap_stats
 */
proto.heap_stats = function (heap_stats) {  
  if (typeof heap_stats !== 'undefined') self._heap_stats = heap_stats;
  return this._heap_stats;
}

/**
 * report code statistics after GC
 * Default: `true`
 * 
 * @name code_stats
 * @param {bool=} code_stats when supplied it sets code_stats
 * @function
 * @returns {bool} the current value of code_stats
 */
proto.code_stats = function (code_stats) {  
  if (typeof code_stats !== 'undefined') self._code_stats = code_stats;
  return this._code_stats;
}

/**
 * report handles after GC
 * Default: `true`
 * 
 * @name print_handles
 * @param {bool=} print_handles when supplied it sets print_handles
 * @function
 * @returns {bool} the current value of print_handles
 */
proto.print_handles = function (print_handles) {  
  if (typeof print_handles !== 'undefined') self._print_handles = print_handles;
  return this._print_handles;
}

/**
 * report global handles after GC
 * Default: `true`
 * 
 * @name print_global_handles
 * @param {bool=} print_global_handles when supplied it sets print_global_handles
 * @function
 * @returns {bool} the current value of print_global_handles
 */
proto.print_global_handles = function (print_global_handles) {  
  if (typeof print_global_handles !== 'undefined') self._print_global_handles = print_global_handles;
  return this._print_global_handles;
}

/**
 * trace inline cache state transitions
 * Default: `true`
 * 
 * @name trace_ic
 * @param {bool=} trace_ic when supplied it sets trace_ic
 * @function
 * @returns {bool} the current value of trace_ic
 */
proto.trace_ic = function (trace_ic) {  
  if (typeof trace_ic !== 'undefined') self._trace_ic = trace_ic;
  return this._trace_ic;
}

/**
 * print interfaces
 * Default: `true`
 * 
 * @name print_interfaces
 * @param {bool=} print_interfaces when supplied it sets print_interfaces
 * @function
 * @returns {bool} the current value of print_interfaces
 */
proto.print_interfaces = function (print_interfaces) {  
  if (typeof print_interfaces !== 'undefined') self._print_interfaces = print_interfaces;
  return this._print_interfaces;
}

/**
 * print interface inference details
 * Default: `true`
 * 
 * @name print_interface_details
 * @param {bool=} print_interface_details when supplied it sets print_interface_details
 * @function
 * @returns {bool} the current value of print_interface_details
 */
proto.print_interface_details = function (print_interface_details) {  
  if (typeof print_interface_details !== 'undefined') self._print_interface_details = print_interface_details;
  return this._print_interface_details;
}

/**
 * depth for printing interfaces
 * Default: `5`
 * 
 * @name print_interface_depth
 * @param {int=} print_interface_depth when supplied it sets print_interface_depth
 * @function
 * @returns {int} the current value of print_interface_depth
 */
proto.print_interface_depth = function (print_interface_depth) {  
  if (typeof print_interface_depth !== 'undefined') self._print_interface_depth = print_interface_depth;
  return this._print_interface_depth;
}

/**
 * trace lazy compilation
 * Default: `true`
 * 
 * @name trace_lazy
 * @param {bool=} trace_lazy when supplied it sets trace_lazy
 * @function
 * @returns {bool} the current value of trace_lazy
 */
proto.trace_lazy = function (trace_lazy) {  
  if (typeof trace_lazy !== 'undefined') self._trace_lazy = trace_lazy;
  return this._trace_lazy;
}

/**
 * trace isolate state changes
 * Default: `true`
 * 
 * @name trace_isolates
 * @param {bool=} trace_isolates when supplied it sets trace_isolates
 * @function
 * @returns {bool} the current value of trace_isolates
 */
proto.trace_isolates = function (trace_isolates) {  
  if (typeof trace_isolates !== 'undefined') self._trace_isolates = trace_isolates;
  return this._trace_isolates;
}

/**
 * trace regexp bytecode execution
 * Default: `true`
 * 
 * @name trace_regexp_bytecodes
 * @param {bool=} trace_regexp_bytecodes when supplied it sets trace_regexp_bytecodes
 * @function
 * @returns {bool} the current value of trace_regexp_bytecodes
 */
proto.trace_regexp_bytecodes = function (trace_regexp_bytecodes) {  
  if (typeof trace_regexp_bytecodes !== 'undefined') self._trace_regexp_bytecodes = trace_regexp_bytecodes;
  return this._trace_regexp_bytecodes;
}

/**
 * Log all events to the log file.
 * Default: `true`
 * 
 * @name log_all
 * @param {bool=} log_all when supplied it sets log_all
 * @function
 * @returns {bool} the current value of log_all
 */
proto.log_all = function (log_all) {  
  if (typeof log_all !== 'undefined') self._log_all = log_all;
  return this._log_all;
}

/**
 * Log API events to the log file.
 * Default: `true`
 * 
 * @name log_api
 * @param {bool=} log_api when supplied it sets log_api
 * @function
 * @returns {bool} the current value of log_api
 */
proto.log_api = function (log_api) {  
  if (typeof log_api !== 'undefined') self._log_api = log_api;
  return this._log_api;
}

/**
 * Log global handle events.
 * Default: `true`
 * 
 * @name log_handles
 * @param {bool=} log_handles when supplied it sets log_handles
 * @function
 * @returns {bool} the current value of log_handles
 */
proto.log_handles = function (log_handles) {  
  if (typeof log_handles !== 'undefined') self._log_handles = log_handles;
  return this._log_handles;
}

/**
 * Log suspect operations.
 * Default: `true`
 * 
 * @name log_suspect
 * @param {bool=} log_suspect when supplied it sets log_suspect
 * @function
 * @returns {bool} the current value of log_suspect
 */
proto.log_suspect = function (log_suspect) {  
  if (typeof log_suspect !== 'undefined') self._log_suspect = log_suspect;
  return this._log_suspect;
}

/**
 * Log regular expression execution.
 * Default: `true`
 * 
 * @name log_regexp
 * @param {bool=} log_regexp when supplied it sets log_regexp
 * @function
 * @returns {bool} the current value of log_regexp
 */
proto.log_regexp = function (log_regexp) {  
  if (typeof log_regexp !== 'undefined') self._log_regexp = log_regexp;
  return this._log_regexp;
}

/**
 * Specify the name of the log file.
 * Default: `v8.log`
 * 
 * @name logfile
 * @param {string=} logfile when supplied it sets logfile
 * @function
 * @returns {string} the current value of logfile
 */
proto.logfile = function (logfile) {  
  if (typeof logfile !== 'undefined') self._logfile = logfile;
  return this._logfile;
}

/**
 * Separate log files for each isolate.
 * Default: `true`
 * 
 * @name logfile_per_isolate
 * @param {bool=} logfile_per_isolate when supplied it sets logfile_per_isolate
 * @function
 * @returns {bool} the current value of logfile_per_isolate
 */
proto.logfile_per_isolate = function (logfile_per_isolate) {  
  if (typeof logfile_per_isolate !== 'undefined') self._logfile_per_isolate = logfile_per_isolate;
  return this._logfile_per_isolate;
}

/**
 * Enable low-level linux profiler.
 * Default: `true`
 * 
 * @name ll_prof
 * @param {bool=} ll_prof when supplied it sets ll_prof
 * @function
 * @returns {bool} the current value of ll_prof
 */
proto.ll_prof = function (ll_prof) {  
  if (typeof ll_prof !== 'undefined') self._ll_prof = ll_prof;
  return this._ll_prof;
}

/**
 * Time internal events.
 * Default: `true`
 * 
 * @name log_internal_timer_events
 * @param {bool=} log_internal_timer_events when supplied it sets log_internal_timer_events
 * @function
 * @returns {bool} the current value of log_internal_timer_events
 */
proto.log_internal_timer_events = function (log_internal_timer_events) {  
  if (typeof log_internal_timer_events !== 'undefined') self._log_internal_timer_events = log_internal_timer_events;
  return this._log_internal_timer_events;
}

/**
 * Log AArch64 instruction statistics.
 * Default: `true`
 * 
 * @name log_instruction_stats
 * @param {bool=} log_instruction_stats when supplied it sets log_instruction_stats
 * @function
 * @returns {bool} the current value of log_instruction_stats
 */
proto.log_instruction_stats = function (log_instruction_stats) {  
  if (typeof log_instruction_stats !== 'undefined') self._log_instruction_stats = log_instruction_stats;
  return this._log_instruction_stats;
}
