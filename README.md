# strict-map

> Stricter `Map`

### Installation

```
yarn add strict-map
```

### Usage

```js
const StrictMap = require('strict-map');

let map = new StrictMap();

map.set('foo', 1);
map.set('bar', 2);

map.get('foo');
map.get('bar');
map.get('baz'); // Error!
```

This is especially useful with Flow or TypeScript where you'd normally have to
check if the value returned from `map.get()` is `undefined`.
