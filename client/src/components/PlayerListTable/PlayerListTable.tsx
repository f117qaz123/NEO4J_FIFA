import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { usePlayers } from "../../hooks/usePlayers";
import { tableCategories } from "../../utils";
import PlayerTableRow from "../PlayerTableRow/PlayerTableRow";
import { Paper } from "@mui/material";

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

  const tableHead = tableCategories.map((tableCategories) => {
    return <TableCell key={tableCategories.label} align="right">{tableCategories.label}</TableCell>;
  });

  if (loading) {
    return <div>Loading...</div>
  }

  const tableRows = data.players.map((playerData: PlayerBriefData) => (
    <PlayerTableRow key={playerData.sofifa_id} playerData={playerData} />
  ));

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            {tableHead}
            <TableCell align="center">Team</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlayersListTable;
