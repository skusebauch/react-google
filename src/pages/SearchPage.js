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
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";

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
            <div className="searchPage__itemsRight">
              <div className="searchPage__item">
                <Link to="/all">Settings</Link>
              </div>
              <div className="searchPage__item">
                <Link to="/all">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for{" "}
            {data?.queries.request[0].searchTerms}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultTitle--sub" href={item.link}>
                {item.displayLink}{" "}
              </a>
              <span className="searchPage__resultMenu">
                <ArrowDropDownOutlinedIcon />
              </span>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
