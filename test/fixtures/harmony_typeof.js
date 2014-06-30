'use strict';

 module.exports = (function () { 
   var x = {};
   switch (typeof x) {
     case 'object': return true;
     default: return false;
   }
 })()
