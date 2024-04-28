import React from "react"
import Heading from "../../common/heading/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO BRAIN BRUSTER ACADEMIA' title='Best Online Education Expertise' />
            <p>A Learning Management System (LMS) is a software application or web-based platform that facilitates the management, delivery, and tracking of educational courses and training programs. LMSs are commonly used in educational institutions, corporate training settings, and other organizations to administer and monitor learning activities.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
