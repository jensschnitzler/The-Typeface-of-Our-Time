// create an automatic navigation

function autoNav(){
  console.log('=== autoNav ===');
  var container = $('body').find('.autoNav');
  container.html('');

  var main = $('body').find('main');
  var headlines = main.find('h2, h3, h4, h5, h6');

  headlines.each(function(i){

    console.log('i: ' + i);

    var headline = $(this);

    var hCount = i + 1;
    var hType = headline.prop('nodeName');
    var hContent = headline.text();
    var hId = headline.attr('id');

    var navItem = $('<a>' + hContent + '</a>');

    container.append(navItem);

    navItem.addClass('navItem');

    navItem.attr('data-count',hCount);
    navItem.attr('data-type',hType);
    navItem.attr('href','#' + hId);

    // level
    if      ( headline.is('h2') ){ var hLevel = 1; }
    else if ( headline.is('h3') ){ var hLevel = 2; }
    else if ( headline.is('h4') ){ var hLevel = 3; }

    if (!!hLevel) {
      navItem.addClass('level-' + hLevel);
    }
  });

}

$(document).ready(function() {
  //paragraphCounter();
});
