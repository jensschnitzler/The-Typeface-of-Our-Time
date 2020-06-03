// make the text nicer

function stringContainsPattern(str, pattern) {
  var result = pattern.test(str);
  return result;
}

function returnPattern(str, pattern) {
  var result = str.match(pattern);
  return result;
}


function niceText(){
  console.log('=== niceText ===');
  var containers = $('body').find('.js-nice-text');

  containers.each(function(j){
    var container = $(this);

    var paragraphs = container.find('p');

    paragraphs.each(function(i){
      //console.log('i: ' + i);
      var count = i + 1;
      var paragraph = $(this);
      var str = paragraph.text();
      //var pattern = /^\[info:.+\]$/i;
      var pattern = /(?<=\[info:).+?(?=\])/i;
      if( stringContainsPattern(str,pattern) ){
        var newText = returnPattern(str,pattern);
        var marginItem = $('<div></div>');
        var marginEntry = $('<span>' + newText + '</span>');

        marginItem.addClass('margin');
        marginItem.insertBefore(paragraph);
        marginEntry.appendTo(marginItem);
        paragraph.remove();
      }
    });
  });

}
