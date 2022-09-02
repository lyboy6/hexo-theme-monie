'use strict'
// 随机数
function randomNum (minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1)
      break
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum)
      break
    default:
      return 1
      break
  }
}
// 随机图片
function random_bg () {
  return '/assets/images/random/' + randomNum(1, 35) + '.jpg'
}
// 获取文章图
function content_img (content) {
  if (!content) return random_bg()

  const img = content.match(/<img.*src=[\"'](.*)[\"']/i)
  if (!img) return random_bg()
  return img[1]
}

hexo.extend.helper.register('content_img', content_img)
