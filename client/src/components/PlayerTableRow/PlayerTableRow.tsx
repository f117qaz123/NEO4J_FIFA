import React from 'react';
import { PlayerBriefData } from "../PlayerListTable/PlayerListTable";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { getClubSrc, getPlayerSrc } from "../../utils";

const PlayerTableRow = ({playerData}: { playerData: PlayerBriefData }) => (
  <TableRow
    key={playerData.sofifa_id}
    sx={{"&:last-child td, &:last-child th": {border: 0}}}
  >
    <TableCell component="th" scope="row">
      <span><img src={getPlayerSrc(playerData.sofifa_id)} alt={playerData.short_name} /></span>
      {playerData.short_name}
    </TableCell>
    <TableCell align="right">{playerData.age}</TableCell>
    <TableCell align="right">{playerData.player_positions}</TableCell>
    <TableCell align="right">{playerData.overall}</TableCell>
    <TableCell align="right">{playerData.potential}</TableCell>
    <TableCell align="center">
      <span><img src={getClubSrc(playerData.clubs.ID)} alt={playerData.clubs.Name} /></span>
      {playerData.clubs.Name}
    </TableCell>
  </TableRow>
);

export default PlayerTableRow;
