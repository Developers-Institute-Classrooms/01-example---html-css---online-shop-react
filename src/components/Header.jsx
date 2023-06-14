import logo from "../images/logo.png";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a className="header--link" href="/">
        <img
          className="header--img"
          src={logo}
          alt="Plants and Things Logo"
          width="1200"
          height="1200"
        />
      </a>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <a className="header__nav-list--link link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="header__nav-list--link link" href="/contact.html">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
