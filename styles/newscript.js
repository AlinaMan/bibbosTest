$(document).ready(function(){
  $("#slider1").owlCarousel({
    loop: false,
    margin: 32,
    nav: false,
    dots: false,
    items: 1,
    responsive: {
      971: {
        items: 3
      },
      571: {
        items: 2,
        stagePadding: 0,
      },
      0: {
        stagePadding: 59
      }
    }
  });

  $("#slider2").owlCarousel({
    loop: false,
    margin: 16,
    nav: false,
    dots: false,
    items: 2,
    responsive : {
      971: {
        items: 2
      },
      571: {
        items: 1.5
      }
    }
  });
});