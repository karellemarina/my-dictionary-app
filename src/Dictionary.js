import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handlekeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h2>What word do you want to look up? ✍️</h2>
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handlekeywordChange}
          defaultValue={props.defaultKeyword}
        />
      </form>
      <div className="hint">
        <strong>💡Suggested words:</strong> Sunset, Wine, Pop, Raccoon...
      </div>
      {keyword}
      <Results results={results} />
    </div>
  );
}
