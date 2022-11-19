import React from 'react';
import { usePlayer } from "../../hooks/usePlayer";
import { getPowerRadarData } from "../../utils";
import { Grid } from "@mui/material";
import _ from 'lodash';
import PowerRadar from "../PowerRadar/PowerRadar";
import { useParams } from "react-router-dom";
import PlayerBioCard from "../PlayerBioCard/PlayerBioCard";
import SimilarPlayersList from "../SimilarPlayersList/SimilarPlayersList";
import HighSimilarPlayersList from "../HighSimilarPlayersList/HighSimilarPlayersList";

const PlayerPage = () => {
  const {id} = useParams();

  const { data, loading } = usePlayer(Number(id));

  if (loading) {
    return <>Loading...</>
  }

  const playerBioInfo = _.pick(data.players[0], ['sofifa_id', 'short_name', 'height_cm', 'weight_kg', 'age', 'player_positions', 'overall', 'potential', 'clubs']);

  const similarPlayersInfo = _.pick(data.players[0], ['player_positions']);

  const playerPowerCategory = () => {
    if (data.players[0].pace) {
      return _.pick(data.players[0], ['pace', 'shooting', 'dribbling', 'passing', 'physic', 'defending']);
    }
    return _.pick(data.players[0], ['gk_diving', 'gk_handling', 'gk_kicking', 'gk_positioning', 'gk_reflexes', 'gk_speed']);
  };

  const [{short_name, overall, potential}] = data.players;

  const playerData = getPowerRadarData(playerPowerCategory(), short_name);

  const playerPositionsList = _.words(similarPlayersInfo.player_positions);

  return (
    <>
      <Grid container my={4} mx={10}>
        <Grid item xs={12} sm={4} my={8}>
          <PlayerBioCard data={playerBioInfo} />
        </Grid>
        <Grid item xs={12} sm={8} height={400}>
          <PowerRadar data={playerData} name={short_name} />
        </Grid>
      </Grid>
      {potential > 84 ?
        <HighSimilarPlayersList positions={playerPositionsList[0]}
                                name={short_name} /> :
        <SimilarPlayersList overall={overall} potential={potential} positions={playerPositionsList[0]}
                            name={short_name} />}
    </>
  );
};

export default PlayerPage;
