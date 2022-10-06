import { AppBar, Toolbar, Typography } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import { NavbarProps } from "./types";
import { GameForm } from "../GameForm";

export const AppNavbar = ({ title }: NavbarProps) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <SportsEsportsIcon color="error" sx={{ mr: 2 }} fontSize="large" />
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          {title || "My games Collection"}
        </Typography>
        <GameForm />
      </Toolbar>
    </AppBar>
  );
};
