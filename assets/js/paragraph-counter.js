// count all paragraphs

function paragraphCounter(){
  console.log('paragraphCounter');
  var elements = $('body').find('p');

  elements.each(function(i){
    console.log('i: ' + i);
    var count = i + 1;
    $(this).append('<div class="count">' + count + '</div>');
  });
}

$(document).ready(function() {
  //paragraphCounter();
});
