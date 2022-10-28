import React from 'react';
import PlayersListTable from "./components/PlayerListTable/PlayerListTable";
import ClubList from "./components/ClubList/ClubList";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<PlayersListTable />} />
      <Route path="/teams" element={<ClubList />} />
    </Routes>
  </>
);

export default App;
