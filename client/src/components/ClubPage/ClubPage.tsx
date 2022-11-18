import React from 'react';
import { useClub } from "../../hooks/useClub";
import { Grid } from "@mui/material";
import ClubCard from "../ClubCard/ClubCard";
import ClubPlayersList from "../ClubPlayersList/ClubPlayersList";
import { useParams } from "react-router-dom";
import PowerRadar from "../PowerRadar/PowerRadar";
import { getPowerRadarData } from "../../utils";

const ClubPage = () => {
  const { id } = useParams();

  const { data, loading } = useClub(Number(id));

  if (loading) {
    return <>Loading...</>
  }

  const clubName = data.clubs[0].Name;

  const categoryList = Object.fromEntries(new Map(Object.entries(data.clubs[0]).splice(3,4)));

  const clubData = getPowerRadarData(categoryList, clubName);

  return (
    <>
      <Grid container my={4} mx={10}>
        <Grid item xs={12} sm={6} md={3} my={8}>
          <ClubCard ID={data.clubs[0].ID} Name={data.clubs[0].Name} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} height={280}>
          <PowerRadar data={clubData} name={clubName} />
        </Grid>
      </Grid>
      <ClubPlayersList />
    </>
  );
};

export default ClubPage;
