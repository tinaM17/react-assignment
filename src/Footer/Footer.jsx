import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <p>Copyright © 2023 LeetCode</p>
        </div>
        <div className="footer-right">
          <ul>
            <li>Help Center |</li>
            <li>Jobs |</li>
            <li>Bug Bounty |</li>
            <li>Interview</li>
          </ul>
        </div>
        <div className="country">
          <div class="country-logo">
            <img
              src="https://leetcode.com/static/images/region/us.svg"
              alt=""
            />
          </div>
          <div className='text'>
            <p>United State</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
