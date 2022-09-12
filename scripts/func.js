'use strict';
// 随机数
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
      break;
    default:
      return 1;
      break;
  }
}
// 随机图片
function random_bg() {
  return '/assets/images/random/' + randomNum(1, 35) + '.jpg';
}
// 获取文章图
function content_img(content) {
  const contentImg = this.url_for(random_bg());
  if (!content) return contentImg;

  const img = content.match(/<img.*src=[\"'](.*)[\"']/i);
  if (!img) return contentImg;
  return img[1];
}

// 上下翻页
function thurning(prev = {}, next = {}) {
  const prev_url = prev.path ? '/' + prev.path : 'javascript:;';
  const next_url = next.path ? '/' + next.path : 'javascript:;';
  const prev_title = prev.title ? prev.title : '已经没有上一篇了';
  const next_title = next.title ? next.title : '已经没有下一篇了';

  return `<a class="page_up" href="${this.url_for(prev_url)}"
  style="background-image:url(${this.content_img(prev.content)})">
  <div class="inner"><span>上一篇:</span>
    <p>${prev_title}</p>
  </div>
</a>
<a class="page_down" href="${this.url_for(next_url)}"
style="background-image:url(${this.content_img(next.content)})">
<div class="inner"><span>下一篇:</span>
  <p>${next_title}</p>
</div>
</a>
`;
}

hexo.extend.helper.register('content_img', content_img);
hexo.extend.helper.register('thurning', thurning);
