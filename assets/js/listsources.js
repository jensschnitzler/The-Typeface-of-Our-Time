console.log('=== listsources.js ===');

function figureItOut(){
  console.log('=== listsources ===');

  var myRefs = $('body').find('a');
  console.log('myRefs: ' + myRefs);
  var myArray = [];

  myRefs.each(function(){
    myRef = $(this);
    console.log('myRef: ' + myRef);
    myRefSrc = myRef.attr('href');
    console.log('myRefSrc: ' + myRefSrc);
    myArray.push(myRefSrc);
  });

  myArray = jQuery.unique( myArray );
  myArray.sort();

  var myFootnoteContainer = $("<div class='footnotes'>Footnotes</div>")
  $("body").append( myFootnoteContainer );

  myArray.each(function(i){
    myFootnote = $(this);
    $( myFootnoteContainer ).append( myFootnote );
  });
}

$( document ).ready(function() {
  //figureItOut();
});
