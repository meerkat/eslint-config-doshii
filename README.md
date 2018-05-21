# Doshii - ESLint Shareable Config

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-doshii.svg
[npm-url]: https://npmjs.org/package/eslint-config-doshii

## An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [JavaScript Standard Style](http://standardjs.com)

This module is an extension and customization of [eslint-config-airbnb-base](https://github.com/feross/eslint-config-airbnb-base) by AirBnB.

We want to provide a consistent coding standard across Doshii projects, this library extends the standard styling to conform with Doshii's opinion of best practice.

The initial differences are small, such as requiring semi-colons and spacing, but will be increased over time as we tighten the style.

## Install

```bash
yarn add eslint-config-doshii
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the JavaScript Standard Style shareable config, first run this:

```bash
yarn add -D eslint-config-doshii
```

Then, add this to your .eslintrc file:

```json
{
  "extends": ["doshii"]
}
```

_Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint._

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## License

MIT. Copyright (c) [Jimmy Cann](https://jimmycann.com).
