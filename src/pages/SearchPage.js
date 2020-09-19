import React from "react";
import { Link } from "react-router-dom";

import "./SearchPage.css";
import { useStateValue } from "../store/context/stateProvider";
import useGoogleSearch from "../hooks/useGoogleSearch";
import Response from "../hooks/response";
import Search from "../components/Search";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ query }, dispatch] = useStateValue();
  // LIVE API CALL
  // const { data } = useGoogleSearch(query);

  // mock API CALL development purpose
  const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__items">
            <div className="searchPage__itemsLeft">
              <div className="searchPage__item">
                <SearchOutlinedIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__item">
                <ImageOutlinedIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="searchPage__item">
                <DescriptionOutlinedIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="searchPage__item">
                <LocalOfferOutlinedIcon />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="searchPage__item">
                <RoomOutlinedIcon />
                <Link to="/all">Maps</Link>
              </div>
              <div className="searchPage__item">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="searchPage__itemsRight"></div>
          </div>
        </div>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
