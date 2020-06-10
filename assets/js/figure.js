// figure.js wraps images in figure-element and copies alt-text to figcaption

/*
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
*/

function addClassToPattern(str, pattern, classname) {
  var match = str.match(pattern);
  if(!!match && match.length > 0 ){
    var result = str.replace(pattern, '<span class="' + classname + '">' + match + '</span>');
    console.log('addClassToPattern: ' + result);
    return result;
  } else {
    return str;
  }
}

function findSrc(text){
  // detext "(src: ...)"
  // \(src:\s(.+?)\)\]
}

function figureItOut(){
  console.log('=== figureItOut ===');
  var myImages = $('main').find('img');
  //console.log('myImages: ' + myImages);
  myImages.each(function(){
    myImage = $(this);
    //console.log('myImage: ' + myImage);
    myParent = myImage.parent();
    //console.log('myParent: ' + myParent);

    if( myParent.is('p') ){
      myAlt = myImage.attr('alt');
      //console.log('myAlt: ' + myAlt);
      var pattern = /\(src:\s(.+)\)/gi;
      var classname = 'figsource';
      myNewAlt = addClassToPattern(myAlt, pattern, classname)
      $( "<figure></figure>" ).insertAfter( myParent ).append( myImage.clone() ).append( $('<figcaption>' + myNewAlt + '</figcaption>') );
      myParent.remove();
    }
  });
}

$( document ).ready(function() {
  //figureItOut();
});
