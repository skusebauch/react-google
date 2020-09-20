import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../store/context/stateProvider";
import * as actionTypes from "../store/actions/actionTypes";

import "./Search.css";

import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");

  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    // to debug search hitting with enter
    // console.log("You hit search >>", input);

    dispatch({
      type: actionTypes.SET_SEARCH_QUERY,
      query: input,
    });

    // todo - something with input
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon />
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search_buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search_buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
