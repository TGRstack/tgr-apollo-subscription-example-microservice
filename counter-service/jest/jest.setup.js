// setup file
var enzyme = require('enzyme');

enzyme.configure({});

crypto = require('@trust/webcrypto')

// fetch undefined
const fetchPolifill = require('whatwg-fetch')
global.fetch = fetchPolifill.fetch
global.Request = fetchPolifill.Request
global.Headers = fetchPolifill.Headers
global.Response = fetchPolifill.Response