// make the text nicer

function stringContainsPattern(str, pattern) {
  var result = pattern.test(str);
  return result;
}

function returnPattern(str, pattern) {
  var result = str.match(pattern);
  console.log('returnPattern: ' + result);
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
      var pattern = /(?<=\[info\:).+?(?=\])/;

      if( stringContainsPattern(str,pattern) ){
        var newText = returnPattern(str,pattern);
        var textAnchor = $('<div class="linked-text-anchor"></div>');
        var linkedText = $('<div class="linked-text margin"></div>');
        var marginEntry = $('<span>' + newText + '</span>');
        console.log('newText: ' + newText);

        textAnchor.insertBefore(paragraph);
        linkedText.appendTo(textAnchor);
        marginEntry.appendTo(linkedText);
        paragraph.remove();
      }
    });
  });

}
