# Typescript Project

visit [egoist/maid](https://github.com/egoist/maid) to learn how to use this file

## core

Set up Typescript core

```bash
yarn add -D typescript ts-node
```

## tsconfig

Set up tsconfig.json

```bash
yarn tsc --init
```

## tslint

Set up TSLINT

```bash
yarn add -D tslint tslint-config-standard
echo "extends: \"tslint-config-standard\"
rules:
    max-line-length:
        options: [120]
    new-parens: true
    no-arg: true
    no-bitwise: true
    no-conditional-assignment: true
    no-consecutive-blank-lines: false
    arrow-parens: true
    object-literal-shorthand: true
    curly: true
jsRules:
    max-line-length:
        options: [120]

" > tslint.yaml
```

## general

General Project Set up

```bash
echo "root = true

[*]
indent_size = 2
indent_style = space
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
" > .editorconfig
```

## node

Run tasks `core` `tsconfig` `tslint` `general` before this.

Node environment

```bash
yarn add -D @types/node
```
