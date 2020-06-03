// make the text nicer

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
      var string = paragraph.text();

      var position = strng.search(/Alvin/i);
      if(position >= 0){
        paragraph.css('background','red');
      }

    });
  });

}
