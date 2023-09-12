import React from 'react'
import './Projects.css'
import data from '../../utils/caraousel.json'

const Projects = () => {
  return (
    <section className="p-wrapper">
        <div className="paddings innerWidth p-container">
        <span className='primaryText flexCenter innerWidth paddings'>Projects</span>
          <div className="p-grid">
          Phasellus vehicula, quam at gravida blandit, justo ipsum scelerisque nisi, non posuere elit elit vitae 
            felis. Fusce id lorem eu lectus fringilla pellentesque. Quisque porta, libero eu laoreet tristique, neque dui 
            bibendum tortor, vel scelerisque quam turpis eu nunc.
            {
              data.map((card, i) => {
                return(
                  <div key={i} className="pc-wrapper">
                    <div className='p-card'>
                      <div className="p-card-title">
                      {card.name}
                    </div>
                    <div className="p-card-desc">
                      {card.desc}
                    </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
    </section>
  )
}

export default Projects