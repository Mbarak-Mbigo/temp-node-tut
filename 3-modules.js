/**
 * CommonJS, every file is a module (by default)
 * Modules  - Encapsulated code (on share minimum)
 */

const names = require('./4-names');
const sayHi = require('./5-util');
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')
sayHi('Susan');
sayHi(names.john)
sayHi(names.peter)