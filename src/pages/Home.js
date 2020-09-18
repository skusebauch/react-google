import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <h1>This is homepage</h1>
      <div className="home__header">
        <div className="home__header--left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__header--right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body"></div>
    </div>
  );
}

export default Home;
