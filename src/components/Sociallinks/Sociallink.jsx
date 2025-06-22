import React from 'react'

import './sociallink.css'
const sociallink = () => {
  return (
    <>
        <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-fill"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-twitter-fill"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-fill"></i>
            </a>
        </div>
    </>
  )
}

export default sociallink