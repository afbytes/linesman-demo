const {yes, not} = require('linesman');

// ---- NaN
// you CAN NOT compare `NaN` with itself.
not.ok(NaN == NaN);
not.ok(NaN === NaN);
not.ok(NaN > NaN);
not.ok(NaN < NaN);
yes.ok(isNaN(NaN)); // use `isNaN()` to check an value is `NaN` or not

// the cases result in `NaN`
yes.ok(isNaN('Hello' - 1));
yes.ok(isNaN('Hello' - 'H'));
yes.ok(isNaN(undefined + undefined));
yes.ok(isNaN(undefined - undefined));
yes.ok(isNaN(undefined + 1));

// ---- Infinity
yes.se(Infinity, Infinity);
yes.se(Infinity, Infinity - 1); // subtract one year from `forever` is still `forever`

yes.se(1 / 0, Infinity);
yes.se((-1) / 0, -Infinity);
yes.se(1 / null, Infinity);
yes.ok(isNaN(1 / undefined));

yes.ok(isNaN(Infinity + (-Infinity))); // you cannot sum them up.
