console.log('=== listsources.js ===');

function listsources(){
  console.log('=== listsources ===');

  var myRefs = $('main').find('a');
  console.log('myRefs: ' + myRefs);
  var myArray = [];

  myRefs.each(function(){
    myRef = $(this);
    //console.log('myRef: ' + myRef);
    myRefSrc = myRef.attr('href');
    //console.log('myRefSrc: ' + myRefSrc);
    myArray.push(myRefSrc);
  });

  myArray = jQuery.unique( myArray );
  myArray.sort();
  console.log('myArray: ' + myArray);

  $('main').find('.footnotes').last().remove();
  var myFootnoteContainer = $("<div class='footnotes'>Footnotes</div>")
  $('main').append( myFootnoteContainer );

  jQuery.each( myArray, function( i, val ) {
    //console.log(i + ': ' + val);
    var myFootnote = '<div>' + val + '</div>';
    $( myFootnoteContainer ).append( myFootnote );
  });
}

$( document ).ready(function() {
  //listsources();
});
