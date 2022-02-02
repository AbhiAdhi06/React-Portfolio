import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Menu />
      <section className="container">
        <div className="name">
          <h1>Hey there I'm Abhisek</h1>
        </div>
        <div className="animation-text">
          <p>I'm a </p>
          <ul className="options">
            <li>
              <span>Programmer</span>
            </li>
            <li>
              <span>3D Artist</span>
            </li>
            <li>
              <span>App Developer</span>
            </li>
            <li>
              <span>Web Developer</span>
            </li>
          </ul>
        </div>
        <div className="btns">
          <Link
            id="btn1"
            to="/contact"
          >
            Hire Me
            <i className="bi" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
