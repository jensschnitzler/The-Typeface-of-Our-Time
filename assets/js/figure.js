// figure.js wraps images in figure-element and copies alt-text to figcaption

/*
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
*/

function figureItOut(){
  $('img').each(function(){
    myImage = $(this);
    myParent = myImage.parent();

    if( myParent.is('p') ){
      myAlt = myImage.attr('alt');
      console.log(myAlt);
      $( "<figure></figure>" ).insertAfter( myParent ).append([
          myImage.clone(),
          $('<figcaption>' + myAlt + '<figcaption/>');
        ]);
      myParent.remove();
    }
  });
}

$( document ).ready(function() {
  figureItOut();
});
