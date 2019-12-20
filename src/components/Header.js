import React from "react";
import SearchBox from "./SearchBox";
import PokeBallIcon from "./img/pokeball.png";

const Header = ({ onSearchChange }) => {
  return (
    <div>
      <nav className="flex justify-between bb b--white-10 bg-purple">
        <a
          className="link washed-green hover-white no-underline flex items-center pa3"
          href="/"
        >
          Home
        </a>
        <div className="flex-grow pa3 flex items-center">
          <a
            className="f6 link dib washed-green dim mr3 mr4-ns"
            href="https://blake-enloe.com"
          >
            Contact me
          </a>
        </div>
      </nav>
      <header className="tc pv4 pv5-ns bg-washed-green">
        <img
          src={PokeBallIcon}
          className="br-100 pa1 ba b--black-10 bg-white h3 w3"
          alt="PokeStatsIcon"
        />
        <h1 className="f5 f4-ns fw6 purple">Search Pokemon Go Stats</h1>
        <h2 className="f6 fw2 ttu tracked purple">
          The list updates as you type!
        </h2>
        <SearchBox searchChange={onSearchChange} />
      </header>
    </div>
  );
};

export default Header;
