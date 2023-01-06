import React from 'react';
import { AppBar, Box, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import NavBarButton from "../NavBarButton/NavBarButton";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SearchBar from "../SearchBar/SearchBar";

export interface NavBarOption {
  label: string;
  path: string;
}

const navBarOptions: NavBarOption[] = [
  {
    label: 'PLAYERS',
    path: '/'
  },
  {
    label: 'TEAMS',
    path: '/teams'
  }
];

const NavBar = () => {
  const navBarButtons = navBarOptions.map((option) => {
    return (
      <NavBarButton key={option.label} content={option} />
    )
  })

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <SportsSoccerIcon sx={{ display: { md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            FIFADB
          </Typography>
          {navBarButtons}
          <SearchBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
