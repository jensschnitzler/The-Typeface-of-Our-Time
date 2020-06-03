console.log('=== listSources.js ===');

function unique(list) {
  var result = [];
  $.each(list, function(i, e) {
    if ($.inArray(e, result) == -1) result.push(e);
  });
  return result;
}

function listSources(){
  console.log('=== listsources ===');

  var myRefs = $('main').children('div').find('a');
  //console.log('myRefs: ' + myRefs);
  var myArray = [];

  myRefs.each(function(){
    myRef = $(this);
    //console.log('myRef: ' + myRef);
    myRefSrc = myRef.attr('href');
    var myRefSrc = myRefSrc.replace(/(:(.?[0-9]+)+)$/gi, ''); // remove page numbers at the end of the entry
    //console.log('myRefSrc: ' + myRefSrc);
    myArray.push(myRefSrc);
  });

  myArray.sort();
  myArray = unique( myArray );

  //console.log('myArray: ' + myArray);

  $('main').find('#footnotes').last().remove();
  var myFootnoteContainer = $("<div id='footnotes'>Footnotes</div>")
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
