import React from 'react';
import { usePlayer } from "../../hooks/usePlayer";
import { getPowerRadarData } from "../../utils";
import { Grid } from "@mui/material";
import _ from 'lodash';
import PowerRadar from "../PowerRadar/PowerRadar";
import { useParams } from "react-router-dom";
import PlayerBioCard from "../PlayerBioCard/PlayerBioCard";

const PlayerPage = () => {
  const {id} = useParams();

  const { data, loading } = usePlayer(Number(id));

  if (loading) {
    return <>Loading...</>
  }

  const playerBioInfo = _.pick(data.players[0], ['sofifa_id', 'short_name', 'height_cm', 'weight_kg', 'age', 'player_positions', 'overall', 'potential', 'clubs']);

  const playerPowerCategory = () => {
    if (data.players[0].pace) {
      return _.pick(data.players[0], ['pace', 'shooting', 'dribbling', 'passing', 'physic', 'defending']);
    }
    return _.pick(data.players[0], ['gk_diving', 'gk_handling', 'gk_kicking', 'gk_positioning', 'gk_reflexes', 'gk_speed']);
  }

  const playerName = data.players[0].short_name;

  const playerData = getPowerRadarData(playerPowerCategory(), playerName);

  return (
    <>
      <Grid container my={4} mx={10}>
        <Grid item xs={12} sm={4} my={8}>
          <PlayerBioCard data={playerBioInfo} />
        </Grid>
        <Grid item xs={12} sm={8} height={400}>
          <PowerRadar data={playerData} name={playerName} />
        </Grid>
      </Grid>
    </>
  );
};

export default PlayerPage;
