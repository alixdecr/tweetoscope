class Tweet {

  constructor(name, username, date, text, replies, parent) {

    this.name = name;
    this.username = username;
    this.date = date;
    this.text = text;
    this.replies = replies;
    this.parent = parent;

    if(parent !== "root") {
      parent.addReply(this);
    }
  }

  addReply(reply) {

    this.replies.push(reply);
  }
}


class DisplayTweet {

  constructor(name, username, date, text, position) {

    this.name = name;
    this.username = username;
    this.date = date;
    this.text = text;
    this.position = position;
  }
}

export {Tweet, DisplayTweet};
