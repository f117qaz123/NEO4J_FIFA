import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

const styles = {
  media: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "70%"
  }
};

const ClubCard = ({ID, Name}: { ID: number, Name: string }) => (
  <Card sx={{width: 200}}>
    <Link href={`/team/${ID}`} underline="none" color='black'>
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
    </Link>
  </Card>
);

export default ClubCard
