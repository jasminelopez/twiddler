$(document).ready(function(){
    //var $body = $('body');
    //$body.html('');
  var timeStamp = function(){
    var time = new Date().getTime()
    var date = new Date(time)
    return date.getMinutes() + ' minutes ago';
  }

  var allTweets = [];
  var index = streams.home.length - 1;
  while(index >= 0) {
    var tweet = streams.home[index];
    var username = tweet.user;
    //creating tweets for home page
    var $tweet = $('<div class="tweets"> <a href="javascript:void(0);"' + username +'.html" class="' + username + '"> ' + '@' +
                   username  +'</a> <div id="message">' + tweet.message + '<div>' + ' ' + timeStamp() + '</div></div></div>'); 
    //push all of the tweets into an array to access and filter for each page
    allTweets.push(tweet);
    $tweet.appendTo( $( '.tweet-container' ) );
    // if (username === 'shawndrost') {
    //   $tweet.appendTo( $('.shawn-tweet-container'));
    // } 
    // if (username === 'douglascalhoun') {
    //   $tweet.appendTo( $('.douglas-tweet-container'));
    // }
    // if (username === 'mracus') {
    //   $tweet.appendTo( $('.mracus-tweet-container'));
    // }
    // if (username === 'sharksforcheap') {
    //   $tweet.appendTo( $('.sharks-tweet-container'));
    // }
    index -= 1;
  }

   $('.newtweets').on('click', function() {
     var index = streams.home.length - 1;
     while(index >= 0){
       var tweet = streams.home[index];
       var username = tweet.user;
       var $tweet = $('<div class="tweets"> <a href="javascript:void(0);"'+ username +'.html" class="' + username + '"> ' + '@' +
                   username  +'</a> <div id="message">' + tweet.message + '<div>' + ' ' + timeStamp() + '</div></div></div>'); 
       allTweets.push(tweet);
       $tweet.appendTo( $( '.tweet-container' ) );
     index -= 1;
     } 
   });
   console.log(allTweets);

  $( '.shawndrost' ).on('click', function () {
    var shawnsTweets = allTweets.filter(function(tweet) {
      return tweet.user === 'shawndrost';
    });
    console.log(shawnsTweets);
    for(var i = 0; i < shawnsTweets.length; i++) {
      console.log(shawnsTweets[i]);
      var hisTweets = $('<div class="tweets"> <a href="javascript:void(0);"'+ shawnsTweets[i].user +'.html" class="' + shawnsTweets[i].user  + '"> ' + '@' +
                 shawnsTweets[i].user   +'</a> <div id="message">' + shawnsTweets[i].message + '<div>' + ' ' + timeStamp() + '</div></div></div>'); 
      console.log(hisTweets);
      $( ".tweets" ).remove();
      hisTweets.appendTo( $('.tweet-container') );
    }
  });

});
















