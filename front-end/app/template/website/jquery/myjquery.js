$(window).scroll(function() {
  if($(document).scrollTop() > 50) {
    $("#mybar").css({
      "background-color": "rgba(0, 0, 0, 0.8)",
      "transition": "background-color 0.5s ease"
    });
  }
  else {
    $("#mybar").css({
      "background-color": "rgba(0, 0, 0, 0.5)",
      "transition": "background-color 0.5s ease"
    });
  }
});

$(document).ready(function() {
  $('#myCarousel').on('slide.bs.carousel', function () {
     console.log("sliding started");
    });
    $('#myCarousel').on('slid.bs.carousel', function () {
     console.log("sliding ended");
    });
});
