const {yes, not} = require('linesman');

yes.ok(5 > 3);
yes.ok('0' == 0); // loosely equal
yes.le('0', 0);
yes.ok('5' > 3); // JS attempts to convert the string to number before comparison
not.ok('A' > 3); // non-number string can not compare
not.ok('A' < 3); // non-number string can not compare

not.ok(0 == null); // `null` DOES NOT equals to 0
not.ok(0 > null); // and you can not compare it with 0
not.ok(0 < null); // and you can not compare it with 0

yes.ok(1 > null); // null is converted to number 0
yes.ok(-1 < null);
yes.ok('1' > null); // '1' is converted to number 1
yes.ok('-1' < null);
not.ok('A' > null); // `null` can not be compared to string
not.ok('-A' > null);

yes.ok(undefined == null); // they are Loosely Equal
yes.le(undefined, null);
not.se(undefined, null); // but they are not Strictly Equal
