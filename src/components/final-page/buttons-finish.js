import React from 'react';
import { Link } from 'react-router-dom';
import './buttons-finish.scss';

const ButtonsFinish = ({ page }) => (
  <div className="final-page__buttons">
    <Link to={`/${page}`} className="new-game">New</Link>
    <MainMenu />
  </div>
);

const MainMenu = () => (
  <Link to="/" className="main-menu">Menu</Link>
);

export default ButtonsFinish;
export { MainMenu };
