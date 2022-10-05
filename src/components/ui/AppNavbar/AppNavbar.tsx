import { AppBar, Toolbar, Typography } from "@mui/material";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

import { NavbarProps } from "./types";

export const AppNavbar = ({ title }: NavbarProps) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <VideogameAssetIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          {title || "My games Collection"}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
