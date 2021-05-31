import React from 'react';
import './SideNav';

export default function SideNav() {
  const menus = [
    { to: '/r/popular', text: 'popular' },
    { to: '/r/all', text: 'all' },
    { to: '/r/random', text: 'random' },
  ];
  const subreddits = [
    'Funny',
    'Cats',
    'Movies',
    'Watercooler chat',
    'Arts',
    'Hobbies',
  ];

  return (
    <div className="sidenav">
      <div className="sidenav__logo">
        <img src="../images/icon.jpeg" />
      </div>
      <div className="sidenav__search">
        <input type="text" name="search" placeholder="search..." />
      </div>
      <div className="sidenav__links">
        <ul className="sidenav__menu">
          {menus.map((menu) => (
            <li>
              <a href={menu.to}>{menu.text}</a>
            </li>
          ))}
        </ul>
        <hr />
        <ul className="sidenav__subreddits">
          {subreddits.map((subreddit) => (
            <li>
              <a href={`/r/${subreddit}`}>{subreddit}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
