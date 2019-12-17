
[![](https://img.shields.io/npm/v/grammarbot.svg)](https://www.npmjs.com/package/grammarbot)
[![Build Status](https://travis-ci.org/AyoubElk/grammarbot.svg?branch=master)](https://travis-ci.org/AyoubElk/grammarbot)
[![Coverage Status](https://coveralls.io/repos/github/AyoubElk/grammarbot/badge.svg)](https://coveralls.io/github/AyoubElk/grammarbot)
[![Downloads](https://img.shields.io/npm/dm/grammarbot.svg)](https://www.npmjs.com/package/grammarbot)
[![Try on RunKit](https://badge.runkitcdn.com/grammarbot.svg)](https://runkit.com/npm/grammarbot)

# Grammarbot

A Javascript API client Grammarbot.io


## Documentation

Take a look at the official docs at [grammarbot.io/quickstart](https://www.grammarbot.io/quickstart)


## Installation

```bash
$ npm install grammarbot
```


## Methods

### 1. grammarbot.check(text, callback)
### 2. grammarbot.checkAsync(text)


## Usage

```js
const Grammarbot = require('grammarbot');

const bot = new Grammarbot({
  'api_key' : 'YOUR_API_KEY',      // (Optional) defaults to node_default
  'language': 'LANG_CODE',         // (Optional) defaults to en-US
  'base_uri': 'api.grammarbot.io', // (Optional) defaults to api.grammarbot.io
});

// Callback style
bot.check("I can't remember how to go their", function(error, result) {
  if (!error) console.log(JSON.stringify(result));
});

// Async/Await style
const result = await bot.checkAsync("I can't remember how to go their");
console.log(JSON.stringify(result));
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Ayoubelk/grammarbot


## License

This npm package is available under the terms of the [MIT License](http://opensource.org/licenses/MIT).

