# mmle-namespace

> Make My Life Easier when manipulate with namespace

# API

```js
var namespace = require('mmle-namespace');

var cats = {};

// setter
var name = namespace(cats, 'yellow.small.happy', 'paul');
// cats => { 'yellow': { 'small': { 'happy': 'paul' } } }
// name => 'paul'


// setter with exisiting value
var name = namespace(cats, 'yellow.small.happy', 'thammin');
// throw error


// overwrite setter with exisiting value
var name = namespace(cats, 'yellow.small.happy', 'thammin', true);
// cats => { 'yellow': { 'small': { 'happy': 'thammin' } } }
// name => 'thammin'


// getter 
var name = namespace(cats, 'yellow.small.happy');
// name => 'thammin'

```
