// figure.js wraps images in figure-element and copies alt-text to figcaption

/*
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
*/

function figureItOut(){
  $('img').each(function(){
    myAlt = $(this).attr('alt');
    console.log(myAlt);
  });
}

$( document ).ready(function() {
  figureItOut();
});
