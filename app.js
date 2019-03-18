$(document).ready(function(){
    //var $body = $('body');
    //$body.html('');

    var timeStamp = function(){
      var time = new Date().getTime()
      var date = new Date(time)
      return date.toString();
    }

    var index = streams.home.length - 1;

    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweets"></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + timeStamp());
      $tweet.appendTo( $( '.tweet-container' ) );
      index -= 1;
     }

     $(".newtweets").on("click", function(){
      var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweets"></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + timeStamp());
      $tweet.appendTo( $( '.tweet-container') );
      index -= 1;
     }


     })

});