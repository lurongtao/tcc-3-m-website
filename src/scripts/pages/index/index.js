const indexTpl = require('./index.tpl.html')
const positionTpl = require('../position')
const profileTpl = require('../profile')
const searchTpl = require('../search')

const Index = {
  render() {
    let tplArrs = [positionTpl, searchTpl, profileTpl]
    let $container = $('.container')
    $container.html(indexTpl)
    $('#main').html(tplArrs[0])
    $('footer li').on('click', function(){
      $('#main').html(tplArrs[$(this).index()])
      $(this).addClass('active').siblings().removeClass('active')
    })

    new IScroll('#main')
  }
}

module.exports = Index