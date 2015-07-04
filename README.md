# better-log

console.log wrapper for a bit more readable output in Node.js

Tired of seeing hardly readable outputs like this?

![regular console.log](https://pbs.twimg.com/media/CFmZABUW0AAqAIK.png)

Replace them with something more elegant!

![better log](https://pbs.twimg.com/media/CFmZBRnWoAABjJi.png)

## Usage

### Patching built-in `console` (API is 100% compatible)

```javascript
require('better-log/install'); // ES6: import 'better-log/install';
console.log({ x: 1, y: 'prop' });
console.error('Something bad happened :(');
```

or

```javascript
require('better-log').install({ depth: 2 }); // optional config
console.log({ x: 1, y: 'prop' });
console.error('Something bad happened :(');
```

#### Restoring native `console.log`:

```javascript
require('better-log').uninstall();
```

### Manual usage as a regular function

```javascript
var log = require('better-log');
log({ x: 1, y: 'prop' });
log.error('Something bad happened :(');
```

With configuration,

```js
var log = require('better-log').config({depth: 4});
log({ x: 1, y: {z: {a: 1, b: 2, c: 3}}});
```

That's it!
