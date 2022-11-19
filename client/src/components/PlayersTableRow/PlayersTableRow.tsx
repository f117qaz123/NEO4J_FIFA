import React from 'react';
import { PlayerBriefData } from "../PlayersList/PlayersList";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { getClubSrc, getPlayerSrcId } from "../../utils";
import { Link } from "@mui/material";

const PlayersTableRow: React.FC<PlayerBriefData> = ({sofifa_id, short_name, age, player_positions, overall, potential, clubs}) => {
  const playerSrc = `https://cdn.sofifa.net/players/${getPlayerSrcId(sofifa_id)}/23_60.png`;

  return (
    <TableRow sx={{"&:last-child td, &:last-child th": {border: 0}}}>
      <TableCell component="th" scope="row">
        <Link href={`/player/${sofifa_id}`} underline="none" color='black'>
        <span><img src={playerSrc}
                   alt={short_name} /></span>
          {short_name}
        </Link>
      </TableCell>
      <TableCell align="right">{age}</TableCell>
      <TableCell align="right">{player_positions}</TableCell>
      <TableCell align="right">{overall}</TableCell>
      <TableCell align="right">{potential}</TableCell>
      <TableCell align="center">
        <img src={getClubSrc(clubs.ID)} alt={clubs.Name}/>
        <div>{clubs.Name}</div>
      </TableCell>
    </TableRow>
  );
};

export default PlayersTableRow;
