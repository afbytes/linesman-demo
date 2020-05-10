# linesman-demo

The project demonstrates how to use linesman to organize the snippets of verifying JS tricks and pitfalls.

## The linesman library

See [linesman](https://github.com/afbytes/linesman).

## Usage

First, run `npm install` to install the dependencies.

Then, you may run the whole project, or run the individual script one by one:

```sh
npm run dev   # run the whole project

node math.js  # run an individual script
npm run math  # the same with previous line since it's written in `package.json`
```

Or, you may run the project in a `watch` mode:

```sh
npm run watch
```

Note: if you see no errors, then it means no error. (`No news is good news.`)

## Example

The following is the content of the `math.js` file:

```javascript
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
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
