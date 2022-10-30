import React from 'react';
import { usePlayers } from "../../hooks/usePlayers";
import Players from "../Players/Players";

interface Club {
  ID: number;
  Name: string;
}

export interface PlayerBriefData {
  age: number;
  clubs: Club;
  overall: number;
  player_positions: string;
  potential: number;
  short_name: string;
  sofifa_id: number;
}

const PlayersListTable = () => {
  const {loading, data} = usePlayers();

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Players playersData={data.players} />
  );
};

export default PlayersListTable;
