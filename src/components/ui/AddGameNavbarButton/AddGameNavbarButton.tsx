import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

import { GameForm } from "../GameForm";
import { CustomDrawer } from "../CustomDrawer";

export const AddGameNavbarButton = () => {
  const [searchParams] = useSearchParams();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const user = searchParams.get("user") || "";

  const handleOpen = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <CustomDrawer {...{ openDrawer, setOpenDrawer }} anchor="bottom">
        <GameForm {...{ user, setOpenDrawer }} />
      </CustomDrawer>
      {!openDrawer && !!user && (
        <IconButton
          color="secondary"
          onClick={handleOpen}
          aria-label="Add game"
        >
          <AddToPhotosIcon />
        </IconButton>
      )}
    </>
  );
};
