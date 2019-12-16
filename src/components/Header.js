import React from 'react';
import SearchBox from './SearchBox';
import Logo from "../containers/pokemon-go-logo.webp";

const Header = ({onSearchChange}) => {
    return(
        <div className="bg-blue pb2 pb1-m pb1-l">
            <img alt={"Pokemon Go Stats Search"} src={Logo} />
            <div class="tc-l mt4 mt3-m mt3-l ph3">
              <h1 class="f2 f1-l fw2 white-90 mb0 lh-title">
                Search Pokemon Stats Instantly
              </h1>
              <h2 class="fw1 f3 white-80 mt3 mb4">
                The results are filtered as you type
              </h2>
              <SearchBox searchChange={onSearchChange} />
            </div>
          </div>
    )
}

export default Header;