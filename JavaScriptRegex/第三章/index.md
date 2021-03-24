# 正则表达式括号的作用

> `括号`提供了分组，便于我们引用它

## 1 分组和分支机构

> `分组和分支机构` 强调括号内的正则是一个整体，即提供子表达式

- 1.1 分组
```js
  /a+/         // 匹配连续出现的 a
  /(ab)+/      // 匹配连续出现的 ab

```

- 1.2 分支
```js
  // 多选分支 (p1|p2) 匹配 p1 或者 p2
  /^a(b|c)d$/        // 匹配 abd 或者 acd
  /^ab|cd$/         // 匹配以 ab 开头或 cd结尾

```

## 2 分组引用

- 2.1 提取数据
```js
  // 格式为 yyyy-mm-dd 的年月日
  const regex = /(\d{4})-(\d{2})-(\d{2})/
  const str = '2021-03-23'
  console.log(str.match(regex))
  // ['2021-03-23', '2021', '03', '23', index: 1, input: '2021-03-23', groups: undefined]

  console.log(regex.exec(str))
  // ['2021-03-23', '2021', '03', '23', index: 1, input: '2021-03-23', groups: undefined]


  // 返回一个数组 
  // 第一个元素是整体匹配的结果
  // 然后是各个分组（括号）里面匹配的内容
  // 然后是匹配下标
  // 然后是输入文本

  // 也可以使用 $1 - $9 来获取
  regex.test(str)         // true
  // regex.exec(str)         
  // str.match(regex)  
  RegExp.$1        // 2021
  RegExp.$2        // 03
  RegExp.$3        // 23

```

- 2.2 替换
```js
  // 把 yyyy-mm-dd 的年月日替换成 mm/dd/yyyy
  const regex = /(\d{4})-(\d{2})-(\d{2})/
  const str = '2021-03-23'
  let ret = str.replace(regex, '$2/$3/$1')

  // 或者
  ret = str.replace(regex, (_, year, month, day) => `${month}/${day}/${year}`)

```

## 3 反向引用

- 3.1 除了使用响应 api 来引用分组（`$1, $2...`），也可以在正则本身里引用分组。但只能引用之前出现但分组，即反向引用
```js
  // 匹配 yyyy-mm-dd yyyy/mm/dd yyyy.mm.dd
  let reg = /\d{4}(-|\/|\.)d{2}(-|\/\.)\d{2}/

  // 等价于

  reg = /\d{4}(-|\/\.)\d{2}\1\d{2}/

  // \1 表示前面但第一个分组 (-|\/|\.)
  // 以此类推， \2  \3 表示 第二个、 第三个 分组

```

  - 3.1.1 括号嵌套的分组：**以左括号（`开括号`）为准** 
  ```js
  const regex = /^((\d)(\d(\d)))\1\2\3\4$/
  const str = '1231231233'
  // \1 匹配第一个左开括号对应的分组 即 ((\d)(\d(\d)))
  // \2 匹配第二个左开括号对应的分组 即 (\d)
  // \3 匹配第三个左开括号对应的分组 即 (\d(\d))
  // \4 匹配第四个左开括号对应的分组 即 (\d)

  console.log(regex.test(str))   // true
  // ((\d)(\d(\d))) 123
  // \1 123
  // \2 1
  // \3 23
  // \4 3
  RegExp.$1         // 123
  RegExp.$2         // 1
  RegExp.$3         // 23
  RegExp.$4         // 3

  ```

  - 3.1.2 `\10` 表示的是 `第十个分组`

  - 3.1.3 引用不存在的分组

    - 因为是反向引用，是引用前面的分组。索引引用不存在的时候，不会报错，匹配反向引用的字符本身
    ```js
      const regex = /^(d)\1\2/
      // \2  就匹配 \2，对 2 进行来转义

    ```

  - 3.1.4 分组后面有量词：分组后面有量词的话，分组最终捕获到的数据是最后一次匹配
  ```js
    const reg = /(\d)+/
    const str = '12345'
    console.log(str.match(reg))
    // ['12345', '5', index: 0, input: '12345' ]

    const regex = /(\d)+ \1/
    const str1 = '12345 1'
    const str2 = '12345 5'
    regex.test(str1)        // false
    regex.test(str2)        // true

  ```
  
