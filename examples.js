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

$('#controls input').click(function () {
  var loadIt = $(this).data('load');
  $.get("_breakpoints.html", function (data) {
    $("body").prepend(data);
  });
});



$('.controls input').click(function () {
  $(this).toggleClass('active');
  
  var thisControls = $(this).data('controls');
  var thisLoads = "_" + thisControls + ".html";

  if ($(this).hasClass('active')) {
    $.get(thisLoads, function (data) {
      $("body").prepend(data);
    });
  
  } else {
  
    $('#' + thisControls).remove();
    
  }

  
});