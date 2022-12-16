import React from 'react'
import '../scss/components/head.scss'
import image from "../assets/bcq.jpg";

const Head = () => {
  return (
    <div className="head__conted">
      <div className="head__conted--items">
        <div className="img__conted">
          <img src={image} alt="" />
        </div>

        <div className="head__conted--items--text">
          <span> Recetas</span>
          <span> para todos! </span>
        </div>

      </div>
    </div>
  )
}

export default Head