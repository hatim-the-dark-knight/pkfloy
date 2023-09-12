import React from 'react'
import './Content.css'

const Content = () => {
  return (
    <section className="c-wrapper">
        <div className="flexCenter paddings innerWidth c-container">
            <div className="content">
                <div className="c-title">
                    <div className="profile-img">
                    <img src="./pic.jpg" alt="Profile Pic" />
                    </div>
                    Zibber-wibber flibber-flop, snicker-snack, wobble-dobble zoodle-zap! Blibber-blubber, 
                    fiddle-faddle, poodle-doodle, wobble-wabble, zibber-zabber <a className='highlight-color'href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjuwsCLr5SBAxW6cGwGHYgvCrwQPAgJ'>
                        Google.
                    </a>
                    Gobble-gibber, flibber-flop, snicker-snack, wobble-dobble dribble-drabble, zippity-zappity, noodle-noodle, wobble-wobble, flibber-flabber, zigzag-zog!
                </div>
                <div className="c-desc">
                    Previously at Microsoft and Sprinklr
                </div>
            </div>
            {/* <div className="flexCenter c-image">
                <div className="profile-img">
                    <img src="./pic.jpg" alt="Profile Pic" />
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default Content