import React from 'react';
import { NavLink } from 'react-router-dom';
import './burger-menu.scss';

const BurgerMenu = ({ menuState, closeMenu }) => {
  let classMenu = '';
  let classItem = '';
  if (menuState) {
    classMenu = ' burger-menu_open';
    classItem = ' navigation__item_open';
  }
  return (
    <div className={`burger-menu${classMenu}`}>
      <ul className="navigation">
        <li className={`navigation__item${classItem}`}>
          <NavLink to="/" exact activeClassName="navigation__item_active" onClick={closeMenu}>Main page</NavLink>
        </li>
        <li className={`navigation__item${classItem}`}>
          <NavLink to="/action-a" activeClassName="navigation__item_active" onClick={closeMenu}>Action(set A)</NavLink>
        </li>
        <li className={`navigation__item${classItem}`}>
          <NavLink to="/action-b" activeClassName="navigation__item_active" onClick={closeMenu}>Action(set B)</NavLink>
        </li>
        <li className={`navigation__item${classItem}`}>
          <NavLink to="/action-c" activeClassName="navigation__item_active" onClick={closeMenu}>Action(set C)</NavLink>
        </li>
        <li className={`navigation__item${classItem}`}>
          <NavLink to="/adjective" activeClassName="navigation__item_active" onClick={closeMenu}>Adjective</NavLink>
        </li>
        <li className={`navigation__item${classItem}`}>
          <NavLink to="/animal-a" activeClassName="navigation__item_active" onClick={closeMenu}>Animal(set A)</NavLink>
        </li>
        <li className={`navigation__item${classItem}`}>
          <NavLink to="/animal-b" activeClassName="navigation__item_active" onClick={closeMenu}>Animal(set B)</NavLink>
        </li>
        <li className={`navigation__item${classItem}`}>
          <NavLink to="/clothes" activeClassName="navigation__item_active" onClick={closeMenu}>Clothes</NavLink>
        </li>
        <li className={`navigation__item${classItem}`}>
          <NavLink to="/emotion" activeClassName="navigation__item_active" onClick={closeMenu}>Emotion</NavLink>
        </li>
        <li className={`navigation__item${classItem}`}>
          <NavLink to="/statistics" activeClassName="navigation__item_active" onClick={closeMenu}>Statistics</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
