# key-hash

<!-- VDOC.badges travis; standard; npm; coveralls -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
[![Build Status](https://travis-ci.org/vigour-io/key-hash.svg?branch=master)](https://travis-ci.org/vigour-io/key-hash)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/key-hash.svg)](https://badge.fury.io/js/key-hash)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/key-hash/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/key-hash?branch=master)

<!-- VDOC END -->

<!-- VDOC.jsdoc keyHash -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
Very simple hash that converts strings to numbers
#### var hash = keyHash(key)
- **key** (*string*) - The string to hash

<!-- VDOC END -->

```javascript
var keyHash = require('key-hash')
var hash = keyHash('something')
```