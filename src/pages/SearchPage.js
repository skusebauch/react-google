import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../store/context/stateProvider";

function SearchPage() {
  const [{ query }, dispatch] = useStateValue();

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{query}</h1>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
