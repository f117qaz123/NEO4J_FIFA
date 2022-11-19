import React from 'react';
import { useSimilarPlayerHigh } from "../../hooks/useSimilarPlayersHigh";
import Typography from "@mui/material/Typography";
import PlayersTable from "../PlayersTable/PlayersTable";

const HighSimilarPlayersList = ({positions, name}: { positions: string, name: string }) => {
  const { data, loading } = useSimilarPlayerHigh(positions, name);

  if (loading) {
    return <>Loading...</>
  }

  return (
    <>
      <Typography variant="h5">
        Similar Players
      </Typography>;
      <PlayersTable playersData={data.players} />
    </>
  );
};

export default HighSimilarPlayersList;
