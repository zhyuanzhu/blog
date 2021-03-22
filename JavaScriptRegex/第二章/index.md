# 正则表达式位置匹配攻略

## 1 什么是位置

- 位置（锚）是相邻字符之间的位置

![image text](./images/position.drawio.svg)

## 2 如何匹配位置

- 2.1 ^ 和 $

  - `^（脱字符）` 匹配开头位置，在多行匹配中匹配行开头

  - `$` 匹配结尾，在多行匹配中匹配行结尾
  ```js
    const helloRet = 'hello'.replace(/^|$/g, '#')
    console.log(helloRet)      // '#hello#'

    // 多行匹配
    const ret = 'I\nlove\njavascript'.replace(/^|$/gm, '#')
    console.log(ret)
    /*
    #I#
    #love#
    #javascript#
    */
  ```

- 2.2 `\b` 和 `\B`

  - `\b` 是单词边界，具体就是 `\w` 与 `\W` 之间的位置，也包括 `\w` 与 `^` 之间的位置，和 `\w` 与 `$` 之间的位置 
  ```js
    const ret = '[JS] Lesson_01.mp4'.replace(/\b/g, '#')
    console.log(ret)
    // '[#JS#] #Lesson_01#.#mp4#'
    // [ 和 J，S 和 ] 之间都是 \w 与 \W 之间的 位置
    // ] 后面的空格与 L， 1 和 . ， . 和 m 之间都是 \w 和 \W 之间的 位置
    // 4后面是 \w 与 ^ 之间的位置

  ```

  - `\B` 是 `\b` 的反面意思，非单词边界。具体就是 `\w` 与 `\w` 之间，`\W` 与 `\W` 之间，`^` 与 `\W` 之间，`\W` 与 `$` 之间的位置
  ```js
    // 在字符串中所有位置中，扣掉 \b ，剩下的都是 \B 的
    const ret = '[JS] Lesson_01.mp4'.replace(/\B/g, '#')
    console.log(ret)
    // '#[J#S] L#e#s#s#o#n_#0#1.m#p#4'

  ```

- `(?=p) 和 (?!p)`

  - `(?=p)` 是 `p` 的一个子模式，即 `p` 前面的位置，或者说，该位置后面的字符要匹配 `p`
  ```js
    // (?=l) 表示 l 字符前面的位置
    const ret = 'hello'.replace(/?=l/g, '#')
    console.log(ret)       // he#l#lo

    // # 号后面的字符要匹配 l
    // 给 l 的前面位置添加 #

  ```
  - `(?!p)` 就是 `(?=p)` 的反面意思
  ```js
    const ret = 'hello'.replace(/?!l/g, '#')
    console.log(ret)        // #h#ell#o#
    // 除了 l 前面的位置 之外，将其他所有位置替换为 #

  ```