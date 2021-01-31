<h1 align="center">Welcome to js-string-cleaner 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/SimonLeclere/Js-String-Cleaner#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/SimonLeclere/Js-String-Cleaner/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/SimonLeclere/Js-String-Cleaner/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/SimonLeclere/js-string-cleaner" />
  </a>
</p>

> A simple npm module to replace special characters in a string with unicode letters.

### 🏠 [Homepage](https://github.com/SimonLeclere/Js-String-Cleaner#readme)

## Install

```sh
npm i js-string-cleaner
```

## Usage

The module has only one function that takes as parameter a string and an optionnal object. By default, each character will simply be replaced by its corresponding letter, which can lead to mixtures of lower and upper case letters. If a character is not recognized, it is left as it is. To get a formatted string, with only the first letter of each word in uppercase or only the first character of the sentence in uppercase, use parameters `capitalizeAllWords` or `capitalizeFirstLetter`.

```js
const clean = require('js-string-cleaner');

const txt = 'sιмση ℓεcℓεяε#5765';

clean(txt); // simon leclere#5765

clean(txt, { capitalizeFirstLetter: true }); // Simon leclere#5765

clean(txt, { capitalizeAllWords: true }); // Simon Leclere#5765
```

## Author

👤 **Simon Leclère**

* Github: [@SimonLeclere](https://github.com/SimonLeclere)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/SimonLeclere/Js-String-Cleaner/issues).
<br><br>
PS: If you want to add new characters, don't hesitate to make a pull request or to contact me on Discord : `sιмση ℓεcℓεяε#5765`.

## Build it yourself

```
npm run test
npm run format
npm run lint
npm run build
```

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Simon Leclère](https://github.com/SimonLeclere).<br />
This project is [ISC](https://github.com/SimonLeclere/Js-String-Cleaner/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_