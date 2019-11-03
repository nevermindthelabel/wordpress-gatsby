import React from 'react';
import tangoFB from '../images/tango-facebook-icon.svg';
import tangoIG from '../images/tango-instagram-icon.svg';
import tangoLI from '../images/tango-linkedin-icon.svg';
import { FooterWrapper } from './styles/FooterStyles';

const Footer = () => (
  <FooterWrapper>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="whiteText">Contact Us</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h3>Anders Linden</h3>
          <p className="tango-contact">
            <a href="mailto:#">anders@tangobrandalliance.se</a>
          </p>
          <p className="tango-contact">+46 (0) 706 431 992</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/anders-linden-06893316/"
            >
              <img src={tangoLI} alt="linkedin" />
            </a>
          </span>
        </div>
        <div className="col-md-4">
          <h3>Mirelle Andreasson</h3>
          <p className="tango-contact">
            <a href="mailto:#">Mirelle@tangobrandalliance.se</a>
          </p>
          <p className="tango-contact">+46 (0) 708 328 845</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/mirelle-andresson-15ab9b115/"
            >
              <img src={tangoLI} alt="linkedin" />
            </a>
          </span>
        </div>
        <div className="col-md-4">
          <h3>Tango Brand Alliance AN</h3>
          <p className="tango-contact">Box 160, 101 23 Stockholm</p>
          <p className="tango-contact">Visit: Convendum, Vasagatan 16</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com/tangobrandalliance/"
            >
              <img className="facebook" src={tangoFB} alt="tango-fb" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/tangobrandalliance/"
            >
              <img className="instagram" src={tangoIG} alt="tango-instagram" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </FooterWrapper>
);

export default Footer;
