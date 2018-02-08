$(".submit").click(function(e){
  var input = $(".input").val();
  $(".results").html(breakDownString(input));
});

$(".play").click(function(e){
  var information = $(".results").text();
  //console.log(information);
  var voice = $(".accents").val();
  console.log($(".accents").val());
  
  var rate = $(".rate").val();
  responsiveVoice.speak(information,voice, {rate: rate});
});
//pause the reader
$(".pause").click(function(e){
  responsiveVoice.pause();
});
//resume the reading
$(".resume").click(function(e){
  responsiveVoice.resume();
});
//stop reading
$(".stop").click(function(e){
  responsiveVoice.cancel();
});
//enter key
$(".input").keyup(function(e){
  if(e.which === 13)
    {
      var input = $(".input").val();
      $(".results").html(breakDownString(input));
    }
});

//breakDownString function
function breakDownString(word)
{
  var masterList = $("<div></div>");
  var words = word.split(' ');
  
  $.each(words, function(index, value) {  
      var result = $('<span></span>');
      masterList = masterList.append(result.html('<u>' + value +'</u>' +  " "));
      result.click(function(){
        //console.log(value);
        window.open('http://www.dictionary.com/browse/' + value); 
      });
    });
  return masterList;
}