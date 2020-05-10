const linesman = require('linesman');

linesman.manager.clearErrorCount();

console.log('No news is good news.');

// include your sub-snippets
require('./array');
require('./calculation');
require('./comparison');
require('./common');
require('./math');
require('./playground');
require('./string');

// an optional checking
let count = linesman.manager.getErrorCount();
if (count > 0) {
  console.error(`There ${count > 1 ? 'are' : 'is'} ${count} errors.`);
  process.exit(1);
}
