import React from 'react';
import { PlayerBriefData } from "../PlayerListTable/PlayerListTable";
import { tableCategories } from "../../utils";
import TableCell from "@mui/material/TableCell";
import PlayerTableRow from "../PlayerTableRow/PlayerTableRow";
import TableContainer from "@mui/material/TableContainer";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

const Players = ({playersData}: { playersData: PlayerBriefData[] }) => {
  const tableHeadRowCells = () => {
    return (
      <>
        <TableCell>Name</TableCell>
        {tableCategories.map(({label}) => <TableCell key={label} align="right">{label}</TableCell>)}
        <TableCell align="center">Team</TableCell>
      </>
    );
  };

  const tableRowsCells = playersData.map((playerData: PlayerBriefData) => (
    <PlayerTableRow key={playerData.sofifa_id} playerData={playerData}/>
  ));

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeadRowCells()}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRowsCells}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Players
