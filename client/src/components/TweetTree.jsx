import propTypes from "prop-types";
import Tweet from "./Tweet.jsx"

function TweetTree({ tweets }) {
  return(
    <div className="tweet-tree">
      {tweets.map(tweet => <Tweet data={tweet} className="tweet"/>)}
    </div>
  );
}

export default TweetTree;
