import Twitter from 'twitter-lite';

const client = new Twitter({
    consumer_key: process.env.NEXT_PUBLIC_CONSUMER_KEY,
    consumer_secret: process.env.NEXT_PUBLIC_CONSUMER_SECRET,
    access_token_key: process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN_SECRET
  });
  
export async function tweetThread(thread) {
    let lastTweetID = "";
    for (const status of thread) {
      const tweet = await client.post("statuses/update", {
        status: status,
        in_reply_to_status_id: lastTweetID,
        auto_populate_reply_metadata: true
      });
      lastTweetID = tweet.id_str;
      console.info('id',lastTweetID)
    }
  }