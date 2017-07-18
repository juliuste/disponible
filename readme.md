# disponible

Check if domain names are still available *(disponible)*. Inofficial, using an endpoint by [united-domains.de](http://united-domains.de/). Ask them for permission before using this module in production.

[![npm version](https://img.shields.io/npm/v/disponible.svg)](https://www.npmjs.com/package/disponible)
[![Build Status](https://travis-ci.org/juliuste/disponible.svg?branch=master)](https://travis-ci.org/juliuste/disponible)
[![dependency status](https://img.shields.io/david/juliuste/disponible.svg)](https://david-dm.org/juliuste/disponible)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/disponible.svg)](https://david-dm.org/juliuste/disponible#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/disponible.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)


## Installation

```shell
npm install --save disponible
```

## Usage

```js
const available = require('disponible')

const domainStream = disponible(['domain1.de', 'domain2.com', 'domain3.international'])

domainStream
.on('data', console.log)
.on('error', console.error)
```

Returns a [readable stream](https://nodejs.org/api/stream.html#stream_readable_streams) in `object mode` that emits objects that look as follows:

```js
{
    domain: 'butz-diekleinebratwurst.info',
    level: {
        top: 'info',
        second: 'butz-diekleinebratwurst'
    },
    status: 'avail', // other: 'registered', 'sedo-avail', possibly more
    price: {
        registration: 19, // can be undefined, e.g. for status 'sedo-avail'
        registrationPromo: false,
        recurring: 19
    }
}
```

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/disponible/issues).
