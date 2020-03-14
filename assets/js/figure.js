// figure.js wraps images in figure-element and copies alt-text to figcaption

/*
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
*/

function figureItOut(){
  console.log('=== figureItOut ===');
  var myImages = $('main').find('img');
  console.log('myImages: ' + myImages);
  myImages.each(function(){
    myImage = $(this);
    console.log('myImage: ' + myImage);
    myParent = myImage.parent();
    console.log('myParent: ' + myParent);

    if( myParent.is('p') ){
      myAlt = myImage.attr('alt');
      console.log('myAlt: ' + myAlt);
      $( "<figure></figure>" ).insertAfter( myParent ).append( myImage.clone() ).append( $('<figcaption>' + myAlt + '<figcaption/>') );
      myParent.remove();
    }
  });
}

$( document ).ready(function() {
  //figureItOut();
});
