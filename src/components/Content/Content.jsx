import React from 'react'
import './Content.css'

const Content = () => {
  return (
    <section className="c-wrapper">
        <div className="flexCenter paddings innerWidth c-container">
            <div className="content">
                <div className="c-title">
                    <h1><b>
                    I’m Pratibha, a Product Designer
                     at <a href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjuwsCLr5SBAxW6cGwGHYgvCrwQPAgJ'>
                         Google</a>.<br/> 
                    I enjoy creating user-centric, delightful, and human experiences. 
                    </b></h1>
                </div>
                <div className="c-desc">
                    Previously at Microsoft and ﻿Sprinklr ﻿
                </div>
            </div>
            <div className="flexCenter c-image">
                <div className="profile-img">
                    <img src="./hero-image.png" alt="Profile Pic" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content