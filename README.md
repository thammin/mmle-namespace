# mmle-namespace

> Make My Life Easier when manipulate with namespace

# Usage

#### Node

```shell
npm install mmle-namespace --save-dev
```

#### Browser

```
└── dist
    └── mmle-namespace.js
```

# API

#### `namespace(obj, path, value, [allowOverwrite])`

Setter.

```js
var cats = {};

var name = namespace(cats, 'yellow.small.happy', 'paul');
console.log(cats); // { 'yellow': { 'small': { 'happy': 'paul' } } }
console.log(name); // 'paul'


// when the namespace is already existed
var name = namespace(cats, 'yellow.small.happy', 'thammin');
// throw error


// overwrite the existing namespace
var name = namespace(cats, 'yellow.small.happy', 'thammin', true);
console.log(cats); // { 'yellow': { 'small': { 'happy': 'thammin' } } }
console.log(name); // 'thammin'
```

#### `namespace(obj, path)`

Getter.

```js
var cats = {
  yellow: {
    small: {
      happy: 'thammin'
    }
  }
};

var name = namespace(cats, 'yellow.small.happy');
console.log(name); // 'thammin'
```
