import React from 'react';
import './footer.scss';
import rsscholl from '../../assets/icons/rsscholl.svg';
import github from '../../assets/icons/github.svg';

const Footer = () => (
  <>
    <footer className="footer">
      <div className="contacts">
        <a href="https://rs.school/js/" className="telegram">
          <img src={rsscholl} alt="RsSchool" />
        </a>
        <span className="rss-year">21</span>
        <a href="https://github.com/MalikImansaparov" className="git">
          <img src={github} alt="GitHub" />
        </a>
      </div>
    </footer>
  </>
);

export default Footer;
