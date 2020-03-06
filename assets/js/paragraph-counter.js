// count all paragraphs

function paragraphCounter(){
  console.log('paragraphCounter');
  var elements = $('body').find('p');

  elements.each(function(i){
    console.log('i: ' + i);
    var count = i + 1;

    var myCountBox = $(this).children('div.count');
    if( myCountBox.length !== 0 ){
      myCountBox.remove();
    }

    $(this).append('<div class="count">' + count + '</div>');
  });
}

$(document).ready(function() {
  //paragraphCounter();
});
