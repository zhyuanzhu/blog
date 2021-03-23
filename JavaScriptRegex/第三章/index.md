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