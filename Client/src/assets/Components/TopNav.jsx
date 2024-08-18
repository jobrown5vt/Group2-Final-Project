import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <div className="navbar">
    <Link className="main" to="/Hangman">Hangman</Link>
    <Link to="/LeaderBoard">Leaderboard </Link>
    <div class="topnav-right">
      <Link to="/">LOGOUT</Link>
    </div>
  </div>
  );
};
//add click event to link and inside event handler clear the user session and redirect to page. 
export default TopNav;