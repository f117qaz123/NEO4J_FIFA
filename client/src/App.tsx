import React from 'react';
import PlayersListTable from "./components/PlayersList/PlayersList";
import ClubsList from "./components/ClubsList/ClubsList";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import ClubPage from "./components/ClubPage/ClubPage";
import PlayerPage from "./components/PlayerPage/PlayerPage";

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<PlayersListTable />} />
      <Route path="/teams" element={<ClubsList />} />
      <Route path="/team/:id" element={<ClubPage />} />
      <Route path="/player/:id" element={<PlayerPage />} />
    </Routes>
  </>
);

export default App;
