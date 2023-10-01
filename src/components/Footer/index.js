import React , { useEffect } from 'react'
import './style.css'
import video from '../../assets/footer.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect( () => {
    Aos.init({ duration: 2000 });
  } , [] );

  return (
    <section className='footer'>
      <div className='videoBox'>
        <video src={video} muted autoPlay loop typeof='video/mp4'></video>
      </div>
      <div className='footContent container'>
        <div className='contactInfo flex'>
          <div className='text' data-aos='fade-up'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>
          <div className='inputContent flex'>
            <input type='text' placeholder='Enter Email Address' data-aos='fade-up' />
            <button type='submit' className='btn flex' data-aos='fade-up'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>
        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logo'>
              <a href='#' className='logoIcon flex'>
                <MdOutlineTravelExplore className='icon'/>
                Travel.
              </a>
            </div>
            <div className='footerParagraph' data-aos='fade-up'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit ab dicta maxime id facere, molestiae laboriosam et perferendis beatae
              maiores ipsa, dolores quae doloribus optio fuga ipsam sint atque repudiandae.
            </div>
            <div className='footerSocials flex' data-aos='fade-up'>
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>

          </div>

          <div className='footerLinks grid'>
            <div className='linkGroup' data-aos='fade-up' data-aos-duration='3000'>
              <span>OUR AGENCY</span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Insurance
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>

            <div className='linkGroup' data-aos='fade-up' data-aos-duration='4000'>
              <span>PARTNERS</span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Bookings
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Rentcars
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Hostelworld
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Trivago
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>
            </div>

            <div className='linkGroup' data-aos='fade-up' data-aos-duration='5000'>
              <span>LAST MIMUTE</span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                London
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                California
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Indonesia
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Europe
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Oseanis
              </li>
            </div>

          </div>

          <div className='footerCopy flex'>
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ISRATECH 2023</small>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Footer