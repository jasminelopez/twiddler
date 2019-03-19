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
    var username = tweet.user;
    var $tweet = $('<div class="tweets"> <a href="'+ username +'.html" class="' + username + '"> ' + '@' + username  +'</a> <div id="message">' + ': ' + tweet.message + timeStamp() + '</div></div>');

    $tweet.appendTo( $( '.tweet-container' ) );
    index -= 1;
  }

$(".shawndrost").on('click', function(elem){
  if (elem.target == this) {
    var text = $(this).text(); //we are trying to access the username text                         
  }
    
  var i = streams.users.shawndrost.length - 1;
  while(i >= 0){
    var userTweet = streams.users.shawndrost[i];
    var timelineTweets = $('<div class="shawnTweets">' + userTweet.message  + '</div>');
    timelineTweets.appendTo( $( '.shawn-tweet-container' ) );
    i -= 1;
  }
});

   $(".newtweets").on("click", function(){
     var index = streams.home.length - 1;
      while(index >= 0){
        var tweet = streams.home[index];
        var $tweet = $('<div class="tweets"><div class="username"> ' + tweet.user + '</    </div>');

        $tweet.text('@' + tweet.user + ': ' + tweet.message + timeStamp()); 
        $tweet.appendTo(".tweet-container" );
        index -= 1;
      }  
   });

   //console.log(streams.home);


});