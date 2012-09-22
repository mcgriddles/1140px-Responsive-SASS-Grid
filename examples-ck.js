function calcWidth() {
  $('#breakpoints div').each(function(){
    var thiswidth = $(this).width();
    $('.pxwidth', this).text(thiswidth + " px");
  });
}

$(document).ready(function() {
  calcWidth();
});

$(window).resize(function() {
  calcWidth();
});

$("#showbreakpoints").click(function() {
  $.get('_breakpoints.html', function(data) {

  }
});