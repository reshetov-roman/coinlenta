$(document).ready(function(){

    $('.news-wrapper__item').click(function(){
      const $parent = $(this).closest(".news-wrapper__item");
      $parent.find('.news-wrapper__hide').slideToggle(300);
      $(this).find('.news-wrapper__record').toggleClass('add-none-record');
      $parent.find('.news-wrapper__item').toggleClass('item-bg_color');
      $parent.find('.news-wrapper__btn-hide').toggleClass('add-show');
      $(this).toggleClass('item-bg_color');
    })



  // $('.news-wrapper__footer').on('click', function(){
  //   const $parent = $(this).closest(".news-wrapper__item");
  //   $parent.find('.news-wrapper__hide').slideToggle(250);
  //   $parent.toggleClass('item-bg_color');
  //   // $(this).toggleClass('item-tranform');
  //   $(this).toggleClass('add-show');
    
  // })

  

  $('.header-wrapper__menu').click(function(){
    $('main').toggleClass('main-none');
    $('.footer').toggleClass('footer-none');
    $('.burger-hide').toggleClass('burger-hide-block');
  })
  $('.nav-wrapper__icon-more').click(function(){
    $('.nav-wrapper2').slideToggle(400);
  })
  $('.header-wrapper__wrp-language').click(function(){
    $('.header-wrapper__dropdown-language').slideToggle(400);
    $('.bg-shadow').css('display', 'block');
  })
  
  
  $('.bg-shadow').click(function(){
    $('.header-wrapper__dropdown-language').slideToggle(400);
    $('.bg-shadow').css('display', 'none');
  })
});


$('.banner__closed').click( () => {
  $('.banner').css('display', 'none');
  $('.footer').css('margin-bottom', '20px');
});





