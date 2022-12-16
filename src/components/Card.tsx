import React, { useContext } from 'react'
import '../scss/components/card.scss'

import Star from '../assets/icons/ic_star.svg'
import Favorite from '../assets/icons/ic-favorite.svg'

import Ic_portion from '../assets/icons/ic_portion.svg'
import Ic_time from '../assets/icons/ic_time.svg'
import Ic_chef from '../assets/icons/ic_chef.svg'
import { DatosContext } from '../context/Context'




const Card = () => {

  const data = useContext(DatosContext)

  console.log(data);


  return (
    <div className='card__conted' >
      <div className="card__conted--items">

        {
          data.map((e, i) =>

            <div className="card__conted--items--item">

              <div className="imagen__conted">
                <img src={e.image} alt="" />
              </div>

              <div className="titles__contem">
                {e.title.split(' ').slice(0, 1).map(e => <span className='title1' >{e.slice(0, 9)} </span>)}
                {e.title.split(' ').slice(1, 2).map(e => <span className='title2' >{e.slice(0, 5) + ' ...'} </span>)}
              </div>

              <div className="rating__info">
                <div className="rating">
                  <span> {e.weightWatcherSmartPoints} </span>
                  <img src={Star} alt="" />
                </div>
                <img src={Favorite} alt="" />
              </div>


              <div className="info">
                <img src={Ic_portion} alt="" />
                <span className='info__title' > Tamaño de la porción   </span   >
                <span> 4    Raciones </span>

                <img src={Ic_time} alt="" />
                <span className='info__title'    > Tiempo de preparación   </span   >
                <span>  {e.readyInMinutes + ' min' }  </span>

                <img src={Ic_chef} alt="" />
                <span className='info__title'  > Dificultad </span   >
                <span> Facil </span>

              </div>

            </div>
          )
        }




      </div>
    </div>
  )
}

export default Card