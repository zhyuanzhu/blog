const reg1 = /ab{2,5}c/g
const str1 = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
// testReg(reg1, str1) 

// [ 'abbc', 'abbbc', 'abbbbc', 'abbbbbc' ]

const reg2 = /a[123]b/g
const str2 = 'a0b a1b a2b a3b a4b'
testReg(reg2, str2)
// [ 'a1b', 'a2b', 'a3b' ]

function testReg (reg, str) {
  console.log(str.match(reg))
}