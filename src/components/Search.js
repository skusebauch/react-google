import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
    console.log("You hit search >>", input);

    // todo - something with input
    history.push("/search");
  };

  return (
    // changed "search" to form and assign google search button type="submit" to search with hitting enter as well
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
        // hide button at UI but keep functionality at css display: none
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
