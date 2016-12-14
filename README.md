# Doshii - ESLint Shareable Config
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]

[travis-url]: https://travis-ci.org/feross/eslint-config-doshii
[npm-image]: https://img.shields.io/npm/v/eslint-config-doshii.svg
[npm-url]: https://npmjs.org/package/eslint-config-doshii

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [JavaScript Standard Style](http://standardjs.com)

This module is an extension and customization of [eslint-config-standard](https://github.com/feross/eslint-config-standard) by Feross Aboukhadijeh.

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
yarn add -D eslint-config-doshii eslint-plugin-standard eslint-plugin-promise
```

Then, add this to your .eslintrc file:

```
{
  "extends": "doshii"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## Learn more

For the full listing of rules, editor plugins, FAQs, and more, visit the main
[JavaScript Standard Style repo](http://standardjs.com) and the original [eslint-config-standard](https://github.com/feross/eslint-config-standard) by Feross Aboukhadijeh.

## License

MIT. Copyright (c) [Jimmy Cann](https://jimmycann.com).
