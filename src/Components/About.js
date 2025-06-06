import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Pankaj Shinde</b> and I am from New Delhi, India.
            I'm a <b>MERN stack web developer</b> and a final year college student pursuing <b>BTech in CSE</b>. <br/><br/>
            I have done an internship as a <b>software developer</b> at GoalFi which is a fintech startup.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do photography, you can check out some of my shots here <a href="https://www.instagram.com/devansh_sahni_/?hl=en" target='_blank' rel='noopener noreferrer'>Instagram.</a>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Python' />
        <Skills skill='JavaScript'/>
        <Skills skill='Django'/>
        <Skills skill='DRF'/>
        <Skills skill='FastAPI'/>
        <Skills skill='Flask'/>
        <Skills skill='PyQT'/>
        <Skills skill='Postgresql' />
        <Skills skill='Mysql'/>
        <Skills skill='MongoDb' />
        <Skills skill='DBeaver' />
        <Skills skill='SQLAlchemy'/>
        <Skills skill='ElasticSearch'/>
        <Skills skill='Cassandra'/>
        <Skills skill='Vercel' />
        <Skills skill='Docker'/>
        <Skills skill='Kubernetes'/>
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Gitlab'/>
        <Skills skill='Postman' />
        <Skills skill='VScode'/>
        <Skills skill='Bootstrap'/>
        <Skills skill='Html'/>
        <Skills skill='CSS'/>
        <Skills skill='Linux'/>
        <Skills skill='Windows'/>
        <Skills skill='Redis'/>
        <Skills skill='Socketio'/>
        <Skills skill='SQLite'/>
      </div>
    </>
  )
}

export default About