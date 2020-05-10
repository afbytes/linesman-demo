const {yes, not} = require('linesman');

let notInitialized;
yes.se(notInitialized, undefined); // un-initialized variables equal to `undefined`

let obj = {};
yes.se(obj.notExistProp, undefined); // an `non-existing` property equals to undefined
yes.se(process.notExistProp, undefined);

let arr = [2, 4, 8];
yes.se(arr[99], undefined);
