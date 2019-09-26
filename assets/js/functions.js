$( document ).ready(function() {
  // var images = ['bg_01.jpg', 'bg_02.jpg', 'bg_03.jpg', 'bg_04.jpg'];
  // $('#background').css({'background-image': 'url(assets/img/' + images[Math.floor(Math.random() * images.length)] + ')'});

  // var images = ['bg_01.jpg', 'bg_02.jpg', 'bg_03.jpg', 'bg_04.jpg'];
  // $('<img class="fade-in" src="asstes/img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#banner-load');

  window.addEventListener('load', function() {

  // setTimeout to simulate the delay from a real page load
  setTimeout(lazyLoad, 1000);

});

function lazyLoad() {
  var centering = document.querySelectorAll('.centering');

  // loop over each card image
  centering.forEach(function(centering) {
    var image_url = centering.getAttribute('data-image-full');
    var content_image = centering.querySelector('img');

    // change the src of the content image to load the new high res photo
    content_image.src = image_url;

    // listen for load event when the new photo is finished loading
    content_image.addEventListener('load', function() {
      // swap out the visible background image with the new fully downloaded photo
      centering.style.backgroundImage = 'url(' + image_url + ')';
      // add a class to remove the blur filter to smoothly transition the image change
      centering.className = centering.className + ' is-loaded';
    });

  });

}
});
