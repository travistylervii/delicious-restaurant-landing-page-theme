;(function(){

  "use strict";

  $(document).ready(function() {


    var $menu = $( '#menu' );
    var $header = $( '#header' );
    
    var $menuList = $menu.find('.b-menu__list');
    var $menuOpener = $menu.find('.b-menu__burger');

    //open menu
    $menuOpener.on('click', function(){
      $menuList.slideToggle();
      return false;
    });

    //always show menu on largre displays
    var showMenu = function(){
      if ($(window).width() > 768){
        $menuList.css('display', '');
      }
    };
    showMenu();

    // smooth scroll to element
    $('.js-goto').on('click', function(e){
        
        var headerHeight = 0;

        if ($(window).width() > 768){
          headerHeight = $header.outerHeight();
        }

        var $target = $(this.href.replace( /^.*\#/, '#' ));

        if ($target.length != 1){
          return false;
        }

        $('body,html').animate({ 
          scrollTop: $target.offset().top - headerHeight }, 
        500);
        return false;
    });

    $(window).on('resize', function(){
      showMenu();
    })
    

  });
  
}());