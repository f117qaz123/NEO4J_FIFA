import React from 'react';
import { useClubPlayers } from "../../hooks/useClubPlayers";
import { useParams } from "react-router-dom";
import PlayersTable from "../PlayersTable/PlayersTable";

const ClubPlayersList = () => {
  const { id } = useParams();

  const {data, loading} = useClubPlayers(Number(id));

  if (loading) {
    return <>Loading...</>
  }

  return (
    <PlayersTable playersData={data.clubs[0].players} />
  );
};

export default ClubPlayersList;
