// Active class function
 $(document).ready(function() {
  $.navigation = $('.nav');
  $.navigation.find('a').each(function() {

    var cUrl = String(window.location).split('?')[0];

    if (cUrl.substr(cUrl.length - 1) == '#') {
      cUrl = cUrl.slice(0,-1);
    }

    console.log(cUrl);

    if ($($(this))[0].href==cUrl) {
      $(this).addClass('active');

      $(this).parents('ul').add(this).each(function(){
        $(this).parent().addClass('active');
      });
    }
  });
});
$( '.nav a' ).on( 'click', function () {
  $( '.nav' ).find( 'li.active' ).removeClass( 'active' );
  $( this ).parent( 'li' ).addClass( 'active' );
});
$(function() {
  $('li.nav-item.anchor').click(function() {
    $('.home').removeClass('active');
  })
})
