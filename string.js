const {yes, not} = require('linesman');

yes.ok('Sandbox' == 'Sandbox');
yes.ok('Sandbox' === 'Sandbox'); // also Strictly Equal
yes.se('Sandbox', 'Sandbox');
yes.se('Sandbox', 'Sand' + 'box');
yes.se('Sandbox', ['', 'Sand', 'box', ''].join(''));

yes.de('Sand'.split(''), ['S', 'a', 'n', 'd']); // Deeply Equal
