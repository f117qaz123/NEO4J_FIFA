import React from 'react';
import { useSimilarPlayer } from '../../hooks/useSimilarPlayers';
import PlayersTable from "../PlayersTable/PlayersTable";
import Typography from "@mui/material/Typography";

const SimilarPlayersList = ({overall, potential, positions, name}: { overall: number, potential: number, positions: string, name: string }) => {
  const { data, loading } = useSimilarPlayer(overall, potential, positions, name);

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

export default SimilarPlayersList;
