import React from 'react';
import Header from './header';
import './main.css';
import Posts from './posts';

export default function Main() {
  return (
    <div className="main">
      <Header />
      <Posts />
    </div>
  );
}
