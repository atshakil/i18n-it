# i18n-it

## Summary

i18n-it produces translation for a given string set.

## Installation

Install globally using `npm`,

```sh
npm install -g i18n-it
```

or, if you are using `yarn`,

```sh
yarn global add i18n-it
```

## Usage

### Synopsis

```text
i18n-it TARGET_LANG_CODE BASE_TRANSLATION_FILE_PATH TARGET_TRANSLATION_FILE_PATH
```

A translation file may look like this,

```json
{
  "section_1.translation_key_1": "A translation",
  "section_2.translation_key_2": "Another translation"
}
```

### Example

If `i18n-it` was installed using any of the above mentioned method, you may invoke the CLI as the example as follows,

```sh
i18n-it ja ./src/locale/en.json ./src/locale/ja.json
```

You may also use `npx` as follows,

```sh
npx i18n-it ja ./src/locale/en.json ./src/locale/ja.json
```

Please note that, only JSON format is supported for now. Also, `en` is the default base language.

## Contributing

If you are interested in contributing, please [submit a pull request](https://help.github.com/articles/about-pull-requests/).
