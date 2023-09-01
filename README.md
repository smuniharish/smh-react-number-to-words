# smh-react-typescript-hooks

smh-react-number-to-words

## Installation
NPM
```sh
npm install smh-react-number-to-words
```
React or React Native
```sh
npm install --save smh-react-number-to-words
```
Expo
```sh
npx expo install smh-react-number-to-words
```
### Available Utils
* toOrdinal(number)
* toWords(number)
* toWordsOrdinal(number)

## Usage
This package is customized react hooks for making development easier, faster and more performant

#### toOrdinal(number)
Converts an integer into a string with an ordinal postfix. If number is decimal, the decimals will be removed.

### example
```js
import {toOrdinal} from 'smh-react-number-to-words'
toOrdinal(21); // => "21st"
```

#### toWords(number)
Converts an integer into words. If number is decimal, the decimals will be removed.

### example
```js
import {toWords} from 'smh-react-number-to-words'
toWords(13); // => "thirteen"
toWords(2.9); // => "two"
toWords(-3); // => "minus three"
toWords(9007199254740992); //=> "nine quadrillion, seven trillion, one hundred ninety-nine billion, two hundred fifty-four million, seven hundred forty thousand, nine hundred ninety-two"
```

#### toWordsOrdinal(number)
Converts a number into ordinal words. If number is decimal, the decimals will be removed.

### example
```js
import {toWordsOrdinal} from 'smh-react-number-to-words'
toWordsOrdinal(21); // => "twenty-first"
```

And we're done 🎉
## Contributing

Contribution are always welcome, no matter how large or small !

We want this community to be friendly and respectful to each other.Please follow it in all your interactions with the project.

Please feel free to drop me a mail [S MUNI HARISH](mailto:samamuniharish@gmail.com?subject=[GitHub])

## Inspiration

This project is inspired by [number-to-words](https://www.npmjs.com/package/number-to-words)

## Acknowledgements

Thanks to the authors of these libraries for inspiration

## Sponsor & Support

To keep this library maintained and up-to-date please consider [sponsoring it on GitHub](https://github.com/sponsors/smuniharish). Or if you are looking for a private support or help in customizing the experience, then reach out to me on Linkedin [@smuniharish](https://www.linkedin.com/in/smuniharish).

## License

[MIT](./LICENSE)

---

Made with ❤️
