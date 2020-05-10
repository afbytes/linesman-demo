const {yes, not} = require('linesman');

let array;
array = new Array(4);
yes.se(array.length, 4);
yes.se(array[0], undefined); // items of non-initialized equal to `undefined`

array.fill(null); // fill all slots with `null`
yes.se(array[array.length - 1], null);
array.fill(0); // fill all slots with number 0
yes.se(array[array.length - 1], 0);
