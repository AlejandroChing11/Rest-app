import React from 'react'
import footer from '../assets/Grupo 7610.png';

import '../scss/components/footer.scss'


const Footer = () => {
  return (
    <footer className='footer__conted' >
      <div className="footer__conted--item">
        <span> Con el Patrocinio de </span>
        <img src={footer} alt="" />
      </div>
    </footer>
  )
}

export default Footer