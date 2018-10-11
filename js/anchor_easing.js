(function(){

  var menu_anchors        = document.querySelectorAll('.menu_anchors_js');
  var all_anchors_targets = document.querySelectorAll('.anchor_target_js');

  for (var i = 0; i < menu_anchors.length; i++) {

      menu_anchors[i].addEventListener('click', function(event) {
        scrollToSection(event.target.dataset.js, event.target);
          //close nav
          $('#menu2').removeClass('active');
          $('.menu-link').removeClass('active');
      });
  }

  function scrollToSection(section_id, trigger) {

    if (section_id === undefined ) {
      section_id = $(trigger).parents('.menu_anchors_js')[0].dataset.js;
    }

    $('html,body').animate(
          {
            scrollTop: $('.' + section_id).offset().top - ($('#menu').height() - $('#menu2').height() )
          }, 1000);

          return false;
  }

})();