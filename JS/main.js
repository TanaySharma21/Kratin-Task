
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // Banner Carousel  
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 1500,
    })

    // HREF LINKS
    // Binding an event handler to all anchors that contain
    // a hash (#), but not necessarily JUST a hash - like href="#"
    // which is typically used in JS...
    $('a[href*="#"]').click(function (event) {

      // Two conditional checks
      // First:
      // location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      // What we're doing is replacing the first forward slash (/) in the pathname
      // for the current location and comparing it to the link that's been clicked.
      // The and check (&&) is to see if the link matches the current domain
      // location.hostname == this.hostname

      // Basically, we want an internal anchor for the page we're on.
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

        // Assigning the variable target, with the hash of the link that's been clicked
        var target = $(this.hash);

        // We check the target length - basically, does the element exist?
        // If length equals to 0, we query the DOM by name attribute. Otherwise, we just re-assign target to self.
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        // The rest is self explanatory... (animation using the target's offset)
        // The return false prevents default behavior
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 74
          }, 1000);
          return false;
        }
      }
    });    
  })
