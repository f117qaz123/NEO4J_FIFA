import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { styles } from "../ClubCard/ClubCard";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { getPlayerSrcId } from "../../utils";
import { PlayerBriefData } from "../PlayersList/PlayersList";

const PlayerBioCard = ({data}: { data: PlayerBriefData }) => {
  const playerSrcId = getPlayerSrcId(data.sofifa_id);

  interface BioInfo {
    label: string;
    value: string | number | undefined;
  }

  const bioList: BioInfo[] = [
    {
      label: 'Name',
      value: data.short_name
    },
    {
      label: 'Age',
      value: data.age
    },
    {
      label: 'Positions',
      value: data.player_positions
    },
    {
      label: 'Height(cm)',
      value: data.height_cm
    },
    {
      label: 'Weight(kg)',
      value: data.weight_kg
    },
    {
      label: 'Overall Rating',
      value: data.overall
    },
    {
      label: 'Potential',
      value: data.potential
    }
  ];

  const playerBio = bioList.map((info) => (
    <Typography key={data.short_name} align="left" gutterBottom variant="body2">
      {info.label}: {info.value}
    </Typography>
  ));

  return (
    <Card sx={{width: 350}}>
      <CardMedia
        style={styles.media}
        component="img"
        image={`https://cdn.sofifa.net/players/${playerSrcId}/23_360.png`}
        alt={data.short_name}
      />
      <CardContent>
        <Grid container>
          <Grid item>
            <img src={`https://cdn.sofifa.net/teams/${data.clubs.ID}/120.png`}
                 alt={data.clubs.Name}/>
          </Grid>
          <Grid item mx={2}>
            {playerBio}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PlayerBioCard;
