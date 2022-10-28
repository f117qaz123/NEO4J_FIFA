import React from 'react';
import { useClubs } from "../../hooks/useClubs";
import { Grid } from "@mui/material";
import ClubCard from "../ClubCard/ClubCard";

const ClubList = () => {
  const { loading, data } = useClubs();

  if (loading) {
    return <>Loading...</>
  }

  const clubCards = data && data.clubs.map(({ID, Name}: { ID: number, Name: string }) => (
    <Grid item key={ID} xs={6} md={3} lg={"auto"}>
      <ClubCard ID={ID} Name={Name} />
    </Grid>
  ));

  return (
    <Grid container spacing={3} justifyContent="center">
      {clubCards}
    </Grid>
  );
};

export default ClubList;
