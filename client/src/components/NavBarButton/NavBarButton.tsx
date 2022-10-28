import React from 'react';
import { NavBarOption } from "../NavBar/NavBar";
import { Button } from "@mui/material";

const NavBarButton = ({content}: { content: NavBarOption }) => (
  <Button href={`${content.path}`} sx={{ my: 2, color: "white", display: "block" }}>{content.label}</Button>
);

export default NavBarButton;
