$(window).scroll(function() {
  if($(document).scrollTop() > 10) {
    $("#mybar").css({"background-color": "rgba(0, 0, 0, 0.8)"});
  }
  else {
    $("#mybar").css({"background-color": "rgba(0, 0, 0, 0.5)"});
  }
});
