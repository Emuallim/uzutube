import React, { useState } from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
// paused at 00:58:30
function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon/>
        <Link to="/">
          <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="youtube-logo" />
        </Link>
      </div>
      <div className="header__input">
        <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <a href="https://www.youtube.com/c/Emuallim/videos?view=0&sort=p&flow=grid">
          <Avatar alt="Muhiddin" src="https://yt3.ggpht.com/a/AATXAJzUwcqYv7QuqEB4JYR7yye9D6Gsw-O9oL0-ZNZ5Ig=s176-c-k-c0x00ffffff-no-rj-mo"/>
        </a>
      </div>
    </div>
    
  )
}

export default Header
