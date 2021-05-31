import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <ul>
          <li>
            <a href="/r/popular" class="active">
              popular
            </a>
          </li>
          <li>
            <a href="/r/hot">hot</a>
          </li>
          <li>
            <a href="/r/rising">rising</a>
          </li>
          <li>
            <a href="/r/controversial">controversial</a>
          </li>
          <li>
            <a href="/r/gilded">gilded</a>
          </li>
        </ul>
      </div>
      <div className="header__right">
        <i className="fas fa-bell"></i>
        <img
          src="https://avatars.githubusercontent.com/u/61651282?v=4"
          alt="User Avatar"
        />
        <div className="header__user">
          <span>Kris</span> <i className="fas fa-caret-down"></i>
        </div>
      </div>
    </div>
  );
}
