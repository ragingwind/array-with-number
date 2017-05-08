# array-fill-with-number [![Build Status](https://travis-ci.org/ragingwind/array-fill-with-number.svg?branch=master)](https://travis-ci.org/ragingwind/array-fill-with-number)

> Array fill with number


## Install

```sh
$ yarn add array-fill-with-number
```

or

```sh
$ npm install --save array-fill-with-number
```

## Usage

```js
const arrayFillWithNumber = require('array-fill-with-number');

arrayFillWithNumber(10);
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

arrayFillWithNumber(10, 1);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## API

### arrayFillWithNumber(lenght, [start])

#### length

Type: `number`<br>

Length of number

#### start

Type: `number`<br>
Default: 0

Start of number

## License

MIT © [Jimmy Moon](http://ragingwind.me)
