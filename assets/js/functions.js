$( document ).ready(function()
{
  // var images = ['bg_01.jpg', 'bg_02.jpg', 'bg_03.jpg', 'bg_04.jpg'];
  // $('#background').css({'background-image': 'url(assets/img/' + images[Math.floor(Math.random() * images.length)] + ')'});

  // var images = ['bg_01.jpg', 'bg_02.jpg', 'bg_03.jpg', 'bg_04.jpg'];
  // $('<img class="fade-in" src="asstes/img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#banner-load');

  window.addEventListener('load', function() {

  // setTimeout to simulate the delay from a real page load
  setTimeout(lazyLoad, 1000);

});

function lazyLoad()
  {
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

var colors = new Array(
  [62,35,255,0.30],
  [60,255,60,0.30],
  [255,35,98,0.30],
  [45,175,230,0.30],
  [255,0,255,0.30],
  [255,128,0,0.30]);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{

  if ( $===undefined ) return;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+","+0.36+")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+","+0.36+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}

setInterval(updateGradient,10);
});
