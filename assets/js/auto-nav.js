// create an automatic navigation

function autoNav(){
  console.log('=== autoNav ===');
  var container = $('body').find('.autoNav');
  container.html('');

  var main = $('body').find('main');
  var headlines = main.find('h1,h2,h3,h4,h5,h6');

  elements.each(function(i){
    //console.log('i: ' + i);
    var count = i + 1;

    var myCountBox = $(this).children('div.count');
    if( myCountBox.length !== 0 ){
      myCountBox.remove();
    }

    $(this).prepend('<div class="count">' + count + '</div>');
  });

}

$(document).ready(function() {
  //paragraphCounter();
});
