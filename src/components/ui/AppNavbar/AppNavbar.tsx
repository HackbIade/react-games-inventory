import { useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

import { NavbarProps } from "./types";
import { AddGameNavbarButton } from "../AddGameNavbarButton";

export const AppNavbar = ({ title }: NavbarProps) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <AppBar enableColorOnDark position="sticky">
      <Toolbar>
        <Button
          variant="text"
          onClick={goHome}
          sx={{ flex: 1, justifyContent: "flex-start" }}
        >
          <Typography variant="h6" color="secondary">
            {title || "Games Inventory"}
          </Typography>
        </Button>
        <AddGameNavbarButton />
      </Toolbar>
    </AppBar>
  );
};
