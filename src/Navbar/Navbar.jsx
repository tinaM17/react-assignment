import React from 'react';
import './navbar.css';
import {AiOutlineStar} from 'react-icons/ai';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-left">
          <img
            src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
            alt=""
          />
        </div>
        <div className="nav-right">
          <ul>
            <li>Explore</li>
            <li>Problems</li>
            <li>Interview</li>
            <li>Contest</li>
          </ul>
        </div>
        <div className="premium">
          <button class="nav-button">
            <AiOutlineStar />
            Premium
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
