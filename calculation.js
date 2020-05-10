const {yes, not} = require('linesman');

yes.ok('5' + 3, '53');
yes.ok('5' - 3, 2);

yes.ok(5 + '3', '53');
yes.ok(5 - '3', 2);
