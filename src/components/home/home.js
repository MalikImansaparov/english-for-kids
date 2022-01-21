import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

const Home = () => (
  <div className="main">
    <div className="menu">
        <Link className="menu-item" to="/action-a" >
          <img  className="menu-item__image" src="./images/categories/actionA.jpg" alt="Action A" />
          <div className="menu-item__name">Action(set A)</div>
        </Link>
        <Link className="menu-item" to="/action-b" >
          <img  className="menu-item__image" src="./images/categories/actionB.jpg" alt="Action B" />
          <div className="menu-item__name">Action(set B)</div>
        </Link>
        <Link className="menu-item" to="/action-c" >
          <img className="menu-item__image" src="./images/categories/actionC.jpg" alt="Action C" />
          <div className="menu-item__name">Action(set C)</div>
        </Link>
        <Link className="menu-item" to="/adjective" >
          <img className="menu-item__image" src="./images/categories/adjective.jpg" alt="Adjective" />
          <div className="menu-item__name">Adjective</div>
        </Link>
        <Link className="menu-item" to="/animal-a" >
          <img className="menu-item__image" src="./images/categories/animalA.jpg" alt="Animal A" />
          <div className="menu-item__name">Animal(set A)</div>
        </Link>
        <Link className="menu-item" to="/animal-b" >
          <img className="menu-item__image" src="./images/categories/animalB.jpg" alt="Animal B" />
          <div className="menu-item__name">Animal(set B)</div>
        </Link>
        <Link className="menu-item" to="/clothes" >
          <img className="menu-item__image" src="./images/categories/clothes.jpg" alt="Clothes" />
          <div className="menu-item__name">Clothes</div>
        </Link>

        <Link className="menu-item" to="/emotion" >
          <img className="menu-item__image" src="./images/categories/emotion.jpg" alt="Emotion" />
          <div className="menu-item__name">Emotion</div>
        </Link>
    </div>
  </div>
);

export default Home;
