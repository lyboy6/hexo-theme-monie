$(function () {
  // 文章缩略图固定高度
  $('.article_pic img').attr('height', function (_index, height = 0) {
    $(this).css({ height: $(this).parent().parent().outerHeight() });
  });

  // 代码高亮
  if ($('pre').length) {
    $('pre').addClass('prettyprint');
    prettyPrint();
  }

  // 手机侧边栏
  $('#mobile_menu').on('click', (e) => {
    $('.mobile_nav_box').addClass('show');
    $('#mobile_mask').addClass('show');
    $('body').addClass('hide');
  });
  $('#mobile_mask').on('click', (e) => {
    $('.mobile_nav_box').removeClass('show');
    $('#mobile_mask').removeClass('show');
    $('body').removeClass('hide');
  });
  $('.mobile_nav_box .mobile_nav').on('click', (e) => {
    $(e.target).parent().children('.mobile_sub_nav').toggleClass('show');
  });

  // 图层预览
  $('.article_text img').attr('src', function (_index, src = '') {
    let title = '文章图' + ++_index;
    if ($(this).attr('alt')) title = $(this).attr('alt').slice(0, -4);
    $(this).attr('alt', title);
    $(this).attr('title', title);
    //  为了防止图片有多个父元素 a
    if (!$(this).parent('a').length) {
      $(this).wrap(
        `<a href=${src} data-fancybox='gallery' data-caption="${title}" title="${title}">  </a>`
      );
    } else {
      $(this).parent('a').attr('data-fancybox', 'gallery');
    }
  });
});
