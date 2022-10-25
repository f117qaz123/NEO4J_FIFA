import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const styles = {
  media: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "70%"
  }
};

const ClubCard = ({ID, Name}: { ID:number, Name: string }) => (
  <Card sx={{ width: 200 }}>
    <CardMedia
      style={styles.media}
      component="img"
      image={`https://cdn.sofifa.net/teams/${ID}/360.png`}
      alt={Name}
    />
    <CardContent>
      <Typography align="center" gutterBottom variant="body2">
        {Name}
      </Typography>
    </CardContent>
  </Card>
);

export default ClubCard
