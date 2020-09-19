import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../store/context/stateProvider";
import useGoogleSearch from "../hooks/useGoogleSearch";
import Response from "../hooks/response";

function SearchPage() {
  const [{ query }, dispatch] = useStateValue();
  // LIVE API CALL
  // const { data } = useGoogleSearch(query);

  const data = Response;

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
