import { useState } from "react";

import { useSearchParams } from "react-router-dom";

import { GameForm } from "../GameForm";
import { CustomDrawer } from "../CustomDrawer";
import { AddButton, Text } from "./styles";

export const AddGamesButton = () => {
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
      {!!user && (
        <AddButton color="primary" onClick={handleOpen} aria-label="Add game">
          <Text>Agregar Juego</Text>
        </AddButton>
      )}
    </>
  );
};
