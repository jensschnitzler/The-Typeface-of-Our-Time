// count all paragraphs

function paragraphCounter(){
  console.log('=== paragraphCounter ===');
  var containers = $('body').find('.js-count-paragraphs');
  containers.each(function(j){
    var container = $(this);

    var elements = container.find('p');

    elements.each(function(i){
      //console.log('i: ' + i);
      var count = i + 1;

      var myCountBox = $(this).children('div.count');
      if( myCountBox.length !== 0 ){
        myCountBox.remove();
      }

      $(this).prepend('<div class="count">' + count + '</div>');
    });
  });
}

$(document).ready(function() {
  //paragraphCounter();
});
