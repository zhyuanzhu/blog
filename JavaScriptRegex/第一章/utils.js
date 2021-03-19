function hexColor () {
  const hexColorRegex = /#([\da-zA-Z]{6}|[\da-zA-Z]{3})/g
  const colors = '#ffbbad #Fc01DF #FFF #ffE #fff222'
  console.log(colors.match(hexColorRegex))
}

// hexColor()


// 匹配时间，二十四小时制
function times () {
  // 23:59  00:00 02:07  11:11   
  // [01] 组， 0 或者 1
  const timeRegex = /([01][0-9]|[2][0-3]):[0-5][0-9]/
  console.log(timeRegex.test('23:59'))
  console.log(timeRegex.test('00:00'))
  console.log(timeRegex.test('02:07'))
  console.log(timeRegex.test('12:27'))
}
// times()


// 匹配 yyyy-mm-dd

function yearTimes () {
  const reg = /[\d]{4}\-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/
  const year = '2021-03-19'
  console.log(reg.test(year))
}
// yearTimes()


// 匹配html标签的的id
const domStr = '<div class="dom" id="dv">这是一个div</div>'
const domIdRegex = /id=".*"/

console.log(domStr.match(domIdRegex))