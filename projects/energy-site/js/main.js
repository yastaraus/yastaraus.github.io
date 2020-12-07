/* https://dimsemenov.com/plugins/magnific-popup/documentation.html */
$(document).ready(function() {
  $('.doc-prev').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
          delegate: 'a', // the selector for gallery item
          type: 'image',
          gallery: {
            enabled:true
          }
      });
  });
});
