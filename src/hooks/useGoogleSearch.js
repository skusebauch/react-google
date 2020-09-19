import { useState, useEffect } from "react";
import * as key from "../Keys/keys";

// custom hook to get data - async fetch
const useGoogleSearch = (query) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${key.API_KEY}&cx=${key.CONTEXT_KEY}&q=${query}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [query]);
  return { data };
};

export default useGoogleSearch;
