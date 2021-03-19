# 正则表达式字符匹配攻略

正则表达式是匹配模式，要么`匹配字符串`，要么`匹配位置`

## 1 两种模糊匹配

- 1.1 横向模糊匹配

  - `横向模糊匹配`指的是一个正则匹配的字符串的长度不是固定的，可以是多种情况的

  - 实现方式：使用量词。譬如 `{m, n}` 表示连续出现最少 `m` 次，最多 `n` 次
  ```js
    const reg = /ab{2,5}c/      
    // 匹配字符串，第一个字符串是 "a"，接下来是 2 - 5个 "b"，最后是一个 "c"

    const reg1 = /ab{2,5}c/g
    // g 全局匹配，而不是匹配第一个

    var str = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
    console.log(str.match(reg))
    // [ 'abbc', 'abbbc', 'abbbbc', 'abbbbbc' ]
  ```

- 1.2 纵向模糊匹配

  - `纵向模糊匹配`指的是一个正则匹配的字符串，具体到某一位字符时，它可以不是某个确定的字符，可以有多种可能

  - 实现方式：字符组。譬如 `[abc]`，表示该字符可以是 `"a", "b", "c"` 中的任何一个
  ```js
    const reg = /a[123]b/
    // 可以匹配 a1b a2b a3b
    const reg2 = /a[123]b/g
    const str2 = 'a0b a1b a2b a3b a4b'
    console.log(str2.match(reg2))
    // [ 'a1b', 'a2b', 'a3b' ]

  ```





