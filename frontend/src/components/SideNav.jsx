import React from 'react';
import './SideNav.css';

export default function SideNav() {
  const menus = [
    { to: '/r/popular', text: 'popular' },
    { to: '/r/all', text: 'all' },
    { to: '/r/random', text: 'random' },
  ];
  const subreddits = [
    'Funny',
    'Cats',
    'Dogs',
    'Movies',
    'Watercooler chat',
    'Arts',
    'Hobbies',
  ];

  return (
    <div className="sidenav">
      <div className="sidenav__logo">
        <img
          src="https://github.com/Dev-kris/groupomania/blob/master/frontend/src/images/icon.png?raw=true"
          alt="Groupomania Company Logo"
        />
      </div>
      <div className="sidenav__search">
        <input type="text" name="search" placeholder="search..."></input>
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
