# hubot-moji

[![Build Status](https://travis-ci.org/ara-ta3/hubot-moji.svg?branch=master)](https://travis-ci.org/ara-ta3/hubot-moji)

## Install

```
npm install npm-moji
```

## Example

```
$hubot moji parse abc
001110001111000111110
010001001000100100000
011111001111100100000
010001001000100100000
010001001111000111110
$hubot moji set blank :black_circle: 
blank: :black_circle:, filled: 1
$hubot moji set filled 
blank: :black_circle:, filled: :star:
$hubot moji parse abc
:black_circle::black_circle::star::star::star::black_circle::black_circle::black_circle::star::star::star::star::black_circle::black_circle::black_circle::star::star::star::star::star::black_circle:
:black_circle::star::black_circle::black_circle::black_circle::star::black_circle::black_circle::star::black_circle::black_circle::black_circle::star::black_circle::black_circle::star::black_circle::black_circle::black_circle::black_circle::black_circle:
:black_circle::star::star::star::star::star::black_circle::black_circle::star::star::star::star::star::black_circle::black_circle::star::black_circle::black_circle::black_circle::black_circle::black_circle:
:black_circle::star::black_circle::black_circle::black_circle::star::black_circle::black_circle::star::black_circle::black_circle::black_circle::star::black_circle::black_circle::star::black_circle::black_circle::black_circle::black_circle::black_circle:
:black_circle::star::black_circle::black_circle::black_circle::star::black_circle::black_circle::star::star::star::star::black_circle::black_circle::black_circle::star::star::star::star::star::black_circle:

$hubot moji printf abcde :star: :blank:
:blank::blank::star::star::star::blank::blank::blank::star::star::star::star::blank::blank::blank::star::star::star::star::star::blank::blank::star::star::star::star::blank::blank::blank::star::star::star::star::star::blank:
:blank::star::blank::blank::blank::star::blank::blank::star::blank::blank::blank::star::blank::blank::star::blank::blank::blank::blank::blank::blank::star::blank::blank::star::star::blank::blank::star::blank::blank::blank::blank::blank:
:blank::star::star::star::star::star::blank::blank::star::star::star::star::star::blank::blank::star::blank::blank::blank::blank::blank::blank::star::blank::blank::star::star::blank::blank::star::star::star::star::star::blank:
:blank::star::blank::blank::blank::star::blank::blank::star::blank::blank::blank::star::blank::blank::star::blank::blank::blank::blank::blank::blank::star::blank::blank::star::star::blank::blank::star::blank::blank::blank::blank::blank:
:blank::star::blank::blank::blank::star::blank::blank::star::star::star::star::blank::blank::blank::star::star::star::star::star::blank::blank::star::star::star::star::blank::blank::blank::star::star::star::star::star::blank:
```

![Example](https://raw.githubusercontent.com/wiki/ara-ta3/hubot-moji/images/screenshot2.png)
