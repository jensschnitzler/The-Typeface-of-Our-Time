// create an automatic navigation

function autoNav(){
  console.log('=== autoNav ===');
  var container = $('body').find('.autoNav');
  container.html('');

  var main = $('body').find('main');
  var headlines = main.find('h1,h2,h3,h4,h5,h6');

  headlines.each(function(i){
    //console.log('i: ' + i);
    var count = i + 1;
    container.append('<a class="count">' + count + '</a>');
  });

}

$(document).ready(function() {
  //paragraphCounter();
});
