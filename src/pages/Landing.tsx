import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/landing.css';
import { FiArrowRight } from 'react-icons/fi';
import LogoImage from '../images/logo.svg';

function Landing() {
  return (
    <div id='page-landing'>
      <div className='content-wrapper'>
        <img src={LogoImage} alt='logo' />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>

          <div className='location'>
            <strong>São Paulo</strong>
            <span>SP</span>
          </div>

          <Link to='/orfanatos' className='enter-app'>
            <FiArrowRight size={26} color='rgba(0,0,0,0.4)' />
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Landing;
