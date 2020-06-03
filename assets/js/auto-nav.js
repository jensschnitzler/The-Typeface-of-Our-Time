// create an automatic navigation

function autoNav(){
  console.log('=== autoNav ===');
  var container = $('body').find('.autoNav');
  container.html('');

  var main = $('body').find('main');
  var headlines = main.find('h1, h2, h3, h4, h5, h6');

  headlines.each(function(i){

    console.log('i: ' + i);
    
    var hCount = i + 1;
    var hType = $(this).prop('nodeName');
    var hContent = $(this).text();
    var hId = $(this).attr('id');

    var navItem = '<a>' + hContent + '</a>';

    container.append(navItem);

    navItem.addClass('navItem');
    navItem.attr('data-count',hCount);
    navItem.attr('data-type',hType);
    navItem.attr('href','#' + hId);
  });

}

$(document).ready(function() {
  //paragraphCounter();
});
