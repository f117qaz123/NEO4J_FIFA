import React, { useEffect, useState } from 'react';
import { Autocomplete, Link, TextField } from "@mui/material";
import { useSearchPlayers } from "../../hooks/useSearchPlayers";
import './SearchBar.scss';

interface Player {
  long_name: string;
  short_name: string;
  sofifa_id: number;
}

const SearchBar = () => {
  const [term, setTerm] = useState<string>('');


  useEffect(() => {
    if (term !== '') {
      const timerId = setTimeout(() => {
        getSearchPlayers();
      }, 300);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [term]);

  const { getSearchPlayers, data, loading } = useSearchPlayers(term);

  return (
    <div className="searchBarContainer">
      <Autocomplete
        freeSolo
        filterOptions={(x) => x}
        options={!loading && data && term ? data.players : []}
        loading={!!term && loading}
        getOptionLabel={(option: any) => option.long_name}
        renderOption={(props, option: Player) => (
          <Link key={option.sofifa_id} href={`/player/${option.sofifa_id}`} underline="none" color='black'>
            <li {...props}>
              {option.short_name}
            </li>
          </Link>
        )}
        renderInput={(params) => (
          <TextField {...params} onChange={(e)=> setTerm(e.target.value)} value={term} label="Search players" variant="filled" />
        )}
      />
    </div>
  );
};

export default SearchBar;
