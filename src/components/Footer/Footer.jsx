import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="paddings h-footer">
        <div className="h-container">
            <div className="flexCenter innerWidth f-desc">
              <div className='f-desc footer-txt'>
                Let's Connect! 
              </div>
              <div className='innerWidth'>
                Feel free to reach out for collaborations or just a friendly hello 😀
              </div>
            </div>
            <div className="flexCenter innerWidth paddings h-menu">
                <a href=""><img src='./facebook.png' alt='A' width={25}></img></a>
                <a href=""><img src='./discord.png' alt='A' width={25}></img></a>
                <a href=""><img src='./gmail.png' alt='A' width={25}></img></a>
                <a href=""><img src='./instagram.png' alt='A' width={25}></img></a>
                <a href=""><img src='./linkedin.png' alt='A' width={25}></img></a>
            </div>
        </div>
    </section>
  )
}

export default Footer