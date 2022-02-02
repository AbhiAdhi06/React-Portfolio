import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [show, setShow] = React.useState(false);
  
  return (
    <>
      <div className="menu">
        <ul>
          <div className="logo">
            <p>
              <Link to="/">
              <span>A</span>bhi<span>T</span>ech
              </Link>
            </p>
          </div>
          <div className="burger-resp resp-none">
            <i className="bi bi-list" onClick={() => setShow(!show)}></i>
          </div>
          <div className="resp-desktop">
            <li>
              <Link to="/contact">
                <i className="bi bi-phone" />
                Contact Me
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="bi bi-person" />
                About Me
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <i className="bi bi-book" />
                Blog
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="bi bi-house" />
                Home
              </Link>
            </li>
          </div>
          {show ? <div className="resp">
            <li>
              <Link to="/contact">
                <i className="bi bi-phone" />
                Contact Me
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="bi bi-person" />
                About Me
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <i className="bi bi-book" />
                Blog
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="bi bi-house" />
                Home
              </Link>
            </li>
          </div>
           : null}
        </ul>
      </div>
    </>
  );
};

export default Menu;
