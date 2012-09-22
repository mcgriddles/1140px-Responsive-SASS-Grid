function calcWidth() {
  if ($('#breakpoints-overlay').length){
    $('#breakpoints-overlay div').each(function(){
      var thiswidth = $(this).width();
      $('.pxwidth', this).text(thiswidth + " px");
    });
  }
}

$('.controls input').click(function () {
  var thisControls =  $(this).data('controls');
  var thisLoads    =  "_" + thisControls + ".html";
  var thisOverlay  =  '#' + thisControls + "-overlay";
  
  if ($(this).is(':checked')) {
      $.ajax({
        type: "GET",
        context: document,
        url: thisLoads,
        dataType: "html",
        success: function(data) {
          $('body').prepend(data);
          calcWidth();
        }
      });
  } else {
    $(thisOverlay).remove();
  }
});

$(window).resize(function() {
  calcWidth();
});