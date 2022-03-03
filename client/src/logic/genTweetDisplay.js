import {DisplayTweet} from "../classes/TweetClasses.js";


function genTweetDisplay(tweet) {

  let tweetList = [];
  let position = {"x": 50, "y": 100};
  let queue = [tweet];

  // add tweet root first
  tweetList.push(new DisplayTweet(tweet.name, tweet.username, tweet.date, tweet.text, {"x": position.x, "y": position.y}));

  // iterate over all tweets that contain replies
  for(let i = 0; i < queue.length; i++) {
    const currentTweet = queue[i];
    // increment y position when changing depth
    position.y += 120;
    // reset x position when changing depth
    position.x = 50;

    let previousLength = 0;
    for(const reply of currentTweet.replies) {
      tweetList.push(new DisplayTweet(reply.name, reply.username, reply.date, reply.text, {"x": position.x, "y": position.y}));
      previousLength = reply.text.length * 10;
      position.x += previousLength;
      // if the current reply has itself its own replies, add the reply to the queue
      if(reply.replies.length > 0) {
        queue.push(reply);
      }
    }
  }

  return tweetList;
}

export default genTweetDisplay;
