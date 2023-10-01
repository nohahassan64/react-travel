import React , { useEffect } from 'react'
import './style.css'
import { dataInfo } from './data'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Info = () => {

  useEffect( () => {
    Aos.init({ duration: 2000 });
  } , [] );

  return (
    <section className='info container section'>

      <div className='infoTitle'>
        <h3 className='title' data-aos='fade-right'>Most Visited Destinations</h3>
      </div>

      <div className='infoContent grid'>
        {dataInfo.map( ({id , img , title , location , grade , fees , description }) => {
          return(
            <div className='infoBox' key={id} data-aos='fade-up'>
              <div className='imgInfo'>
                <img src={img} alt={title} />
              </div>

              <div className='cardInfo'>
                <h4 className='cardTitle'>{title}</h4>
                <span className='continent flex'>
                  <HiOutlineLocationMarker className='icon' />
                  <span className='name'>{location}</span>
                </span>

                <div className='fees flex'>
                  <div className='grade'>
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className='price'>
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className='desc'>
                  <p>{description}</p>
                </div>

                <button className='btn flex'>
                  DETAILS <HiOutlineClipboardCheck className='icon' />
                </button>

              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Info