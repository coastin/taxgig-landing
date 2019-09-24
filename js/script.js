$('.show_popup').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.overlay_popup').show();
})

$('.overlay_popup').click(function() {
    $('.overlay_popup, .popup').hide();
})

$('.list-btn-one').click(function(){
  $(".list__footer-one").fadeToggle(100);
}); 

$('.list-btn-two').click(function(){
  $(".list__footer-two").fadeToggle(100);
}); 

$('.list-btn-three').click(function(){
  $(".list__footer-three").fadeToggle(100);
}); 