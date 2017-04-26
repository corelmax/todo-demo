require('babel-register')();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

const dom = new JSDOM(``, {
  url: "http://mochal.agoda.localmachine/",
  //referrer: "https://example.com/",
  contentType: "text/html",
  userAgent: "Mocha Testing Agent",
  includeNodeLocations: true
});

global.document = dom.window.document;
global.window = dom.window.document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

//Mocha throws a syntax error (because it tries to import and parse the CSS file as JS). Here is a solution for this.
// Prevent mocha from interpreting CSS @import files
function noop() {
    return null;
}

require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
