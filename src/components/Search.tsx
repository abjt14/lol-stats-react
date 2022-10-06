import React from 'react';
import { useState } from "react";
import { mainAPI } from "../api/API";
import Match from './Match';

const Search = () => {
  const [query, setquery] = useState('');
  const [matches, setmatches] = useState([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const matchesData = await mainAPI(query);
    setmatches(matchesData);
    console.log(matchesData);
  }

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Doublelift..."
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <button type="submit">&#128269;</button>
      </form>
      <div id="search-results">
        {
          matches.map((match, index) => <Match key={index} match={match} />)
        }
      </div>
    </div>
  )
};

export default Search;