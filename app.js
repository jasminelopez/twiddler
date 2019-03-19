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
                   username  +'</a> <div id="message">' + ': ' + tweet.message + '<div>' + ' ' + timeStamp() + '</div></div></div>'); 
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

   $(".newtweets").on("click", function(){
     var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var username = tweet.user;
    var $tweet = $('<div class="tweets"> <a href="'+ username +'.html" class="' + username + '"> ' + '@' +
                   username  +'</a> <div id="message">' + ': ' + tweet.message + '<div>' + ' ' + timeStamp() + '</div></div></div>'); 
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
 });
});