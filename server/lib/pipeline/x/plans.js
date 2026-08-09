/**
 * Extraction plans for the X API v2.
 *
 * Unlike Substack's, these endpoints are documented and versioned, so the
 * repair agent matters less here — it is a safety net for shape drift and for
 * anyone pointing this at a proxy or mirror, not a load-bearing part of the
 * design. The plans still exist so both platforms share one extraction path and
 * one validation story.
 *
 * See ../plans.js for the plan language.
 */

export const X_PLANS = {
  user: {
    list: null,
    fields: {
      id: ['data.id'],
      username: ['data.username'],
      name: ['data.name'],
      bio: ['data.description'],
      location: ['data.location'],
      joined: ['data.created_at'],
      followers: ['data.public_metrics.followers_count'],
      following: ['data.public_metrics.following_count'],
      posts: ['data.public_metrics.tweet_count'],
      pinned: ['data.pinned_tweet_id'],
      verified: ['data.verified'],
    },
  },

  tweets: {
    list: 'data',
    fields: {
      id: ['id'],
      text: ['note_tweet.text', 'text'],
      date: ['created_at'],
      likes: ['public_metrics.like_count'],
      reposts: ['public_metrics.retweet_count'],
      replies: ['public_metrics.reply_count'],
      quotes: ['public_metrics.quote_count'],
      conversation: ['conversation_id'],
      replyToUser: ['in_reply_to_user_id'],
      referenced: ['referenced_tweets'],
      lang: ['lang'],
    },
  },
};

/**
 * `text` prefers `note_tweet.text` over `text`.
 *
 * Long posts (the ones formerly capped at 280 characters) arrive with `text`
 * truncated and an ellipsis, and the full body only in `note_tweet.text`. Since
 * the longest things someone writes are exactly where their argument lives,
 * reading `text` first would systematically discard the most valuable items in
 * the corpus.
 */

/** Fields the repair agent is told about, if it ever has to remap a timeline. */
export const TWEET_FIELD_DESCRIPTIONS = [
  { name: 'id', description: 'stable post identifier' },
  { name: 'text', description: 'the full text as written; prefer any untruncated long-form variant' },
  { name: 'date', description: 'when it was posted' },
  { name: 'likes', description: 'like count' },
  { name: 'reposts', description: 'repost/retweet count' },
  { name: 'replies', description: 'reply count' },
  { name: 'quotes', description: 'quote-post count' },
  { name: 'conversation', description: 'id grouping a post with its thread' },
  { name: 'replyToUser', description: 'user id this post replies to, if any' },
  { name: 'referenced', description: 'array of referenced posts, each with a type and an id' },
  { name: 'lang', description: 'language code' },
];
