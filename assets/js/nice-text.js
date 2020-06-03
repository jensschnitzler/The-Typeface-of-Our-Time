// make the text nicer

function stringContainsPattern(str, pattern) {
  //var str = "Hello world!";

  // look for "Hello"
  //var patt = /Hello/g;
  var result = pattern.test(str);
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
      var pattern = /^\[info:.+\]$/i;

      if( stringContainsPattern(str,pattern) ){

        var marginItem = $('<div/>');
        paragraph.css('background','red');
        marginItem.addClass('margin');
        paragraph.appendTo(marginItem);

      }

    });
  });

}
