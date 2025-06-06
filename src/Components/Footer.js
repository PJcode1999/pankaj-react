import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Pankaj Shinde</h4>
      <h4>Copyright &copy; 2025</h4>
      <div className='footerLinks'>
        <a href="https://github.com/PJcode1999" target='_blank' rel='noopener noreferrer'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/pankaj-shinde-python/" target='_blank' rel='noopener noreferrer'><FaLinkedin/></a>
        <a href='mailTo:shindepankaj562@gmail.com' target='_blank' rel='noopener noreferrer'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer