import React from 'react';
import Lottie from  "lottie-react";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import coffee from '../LottieFiles/coffee.json';
import workboy from "../LottieFiles/workboy.json";
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Pankaj Shinde</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={workboy} 
          loop={true} 
        />
                
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love transforming ideas into impactful web applications that solve real problems and add value.
            I'm passionate about writing clean, scalable code and constantly pushing myself to improve as a developer.

            I'm fluent in <b>Python</b>, with solid experience in <b>Django</b>, <b>Django REST Framework</b>.
            I've also worked on projects involving <b>Flask</b>, <b>MySQL</b>, <b>SQLite</b>, and <b>Bootstrap</b>, and recently started exploring <b>React</b> for front-end development.
            <br /><br />
            I'm currently enhancing my skills in <b>Data Structures & Algorithms</b>, and plan to dive deeper into <b>Python</b>, <b>FastAPI</b>, and modern frontend tools soon.
            <br /><br />
            And yes — <b>coffee</b> fuels my code! <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <Lottie 
            className="Avatar" 
            animationData={coffee} 
            loop={true} 
          />
        </Tilt>
      </div>
    </div>
  )
}

export default Home