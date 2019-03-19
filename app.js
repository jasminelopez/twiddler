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
    //console.log(streams.users.shawndrost);
    //creating tweets for home page
    var $tweet = $('<div class="tweets"> <a href="'+ username +'.html" class="' + username + '"> ' + '@' +
                   username  +'</a> <div id="message">' + ': ' + tweet.message + timeStamp() + '</div></div>'); 
    //appending tweets to home page
    $tweet.appendTo( $( '.tweet-container' ) );

    if (username === 'shawndrost') {
      $tweet.appendTo( $('.shawn-tweet-container') );
    } 
    if (username === 'douglascalhoun') {
      $tweet.appendTo( $('.douglas-tweet-container') );
    }
    if (username === 'mracus') {
      $tweet.appendTo( $('.mracus-tweet-container') );
    }
    if (username === 'sharksforcheap') {
      $tweet.appendTo( $('.sharks-tweet-container') );
    }
    index -= 1;
  }

//$(".shawndrost").on('click', function(elem){ //when shawn is clicked on- his tweets are appended to his homepage

  //we want the same tweets from the home page to go into shawns timeline on his homepage                      
  // var i = streams.users.shawndrost.length - 1;
  
  // while(i >= 0){
  //   var userTweet = streams.users.shawndrost[i];
  //   var timelineTweets = $('<div class="shawnTweets">' + userTweet.message  + timeStamp() + '</div>');
  //   timelineTweets.appendTo( $( '.shawn-tweet-container' ) );
  //   i -= 1;
  // }
//});

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