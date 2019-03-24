$(function(){

  // トップページの画像スライド
  $('.top-img').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    fade: false,
  });

  // 該当箇所にスムーススクロール
  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  // トグルメニュー
  $('.js-toggle').on('click',function(){
    $(this).toggleClass('on');
    $(this).siblings().slideToggle();
  });


});

