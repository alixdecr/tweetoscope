import {Tweet, DisplayTweet} from "./classes/TweetClasses.js";
import genTweetDisplay from "./logic/genTweetDisplay.js";
import Header from "./components/Header.jsx";
import TweetTree from "./components/TweetTree.jsx";


let tweet = new Tweet("Mary Sue", "themarysue", "03/03/2022 at 14:52", "Hello Twitter, this is my first Tweet! So happy to share this moment with you! #noob #firsttweet", [], "root");

let reply1 = new Tweet("Bob Hank", "hankbob123", "03/03/2022 at 14:58", "Hey Mary, great to have you on Twitter. Can't wait to start debating on interesting topics with you!", [], tweet);

let reply2 = new Tweet("Justine Dupont", "dptju2000", "04/03/2022 at 10:15", "Omg Mary hi!!! Great new member for Twitter!", [], tweet);

let reply3 = new Tweet("Hamidoty", "hamidd57", "03/03/2022 at 15:09", "I agree, Bob. Welcome to Twitter Mary Sue!", [], reply1);

let reply4 = new Tweet("Robotott", "robyy", "03/03/2022 at 15:09", "Hello Mary Sue!", [], tweet);

let tweetList = genTweetDisplay(tweet);

console.log(tweetList);

function App() {

  return(
    <div className="App">
      <Header title="Twittoscope Tree Visualization"/>
      <TweetTree tweets={tweetList}/>
    </div>
  );
}

export default App;
