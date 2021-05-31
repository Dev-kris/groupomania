import React from 'react';
import './postItem.css';

export default function postItem(props) {
  const { title, upvote, image, user, subreddit, comment_count } = props.post;
  return (
    <div className="post">
      <div className="post__left">
        <button onClick="" className="vote">
          <i className="fas fa-caret-up"></i>{' '}
        </button>
        <span>{upvote}</span>
        <button onClick="" className="vote">
          <i className="fas fa-caret-down"></i>{' '}
        </button>
      </div>
      <div className="post__center">
        <img src={image} alt="User Submitted Content" />
      </div>
      <div className="post__right">
        <h3>
          <a href={`/r/${subreddit}/${title}`}>{title}</a>
        </h3>
        <span className="post__info">
          submitted an hour ago by <a href={`/u/${user}`}>{user}</a> to{' '}
          <a href={`/r/${subreddit}`}>{subreddit}</a>
        </span>
        <p className="post__info">
          {comment_count} comments | share | save | hide | report
        </p>
      </div>
    </div>
  );
}
