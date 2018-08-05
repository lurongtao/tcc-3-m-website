// const _foo = (x, y) => {
//   return x + y
// }

// const print = (x, y) => {
//   console.log(_foo(x, y))
// }

// // 模块如何暴露接口
// module.exports = {
//   print
// }

const indexTpl = require('./index.tpl.html')
const positionTpl = require('../position')
const profileTpl = require('../profile')
const searchTpl = require('../search')

const Index = {
  render() {
    const container = document.querySelector('.container')
    container.innerHTML = indexTpl
    const lis = document.querySelectorAll('li')
    const tplArrs = [positionTpl, searchTpl, profileTpl]
    lis.forEach((value, index) => {
      value.addEventListener('click', () => {
        document.querySelector('#main')
          .innerHTML = tplArrs[index]
      }, false)
    })
  }
}

module.exports = Index