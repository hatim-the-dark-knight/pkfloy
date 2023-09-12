import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter innerWidth h-container">
            {/* <img className="logo" src='./logo.png' alt='logo' width={40} style={{ filter: 'invert(100%)' }} /> */}
            <div className="flexCenter paddings logo-txt">
              Q
            </div>

            <div className="flexCenter paddings h-menu">
                <a className="highlight-color" href="">HOME</a>
                <a href="">ABOUT</a>
                <a href="">PROJECTS</a>
                <a href="mailto:farsul78@gmail.com">CONTACT</a>
            </div>
        </div>
    </section>
  )
}

export default Header