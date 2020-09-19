import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../store/context/stateProvider";
import useGoogleSearch from "../hooks/useGoogleSearch";

function SearchPage() {
  const [{ query }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(query);

  console.log(data);

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
