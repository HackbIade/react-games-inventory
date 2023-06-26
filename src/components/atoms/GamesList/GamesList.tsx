import { Typography } from "@mui/material";

import { GameCard } from "../GameCard";
import { ListContainer } from "./styles";
import { listAnimation } from "./animation";
import { useUserGames } from "../../../hooks/useUserGames/useUserGames";

export const GamesList = () => {
  const { filteredUserGameList, isError, isLoading } = useUserGames();
  return (
    <ListContainer variants={listAnimation} initial="hidden" animate="visible">
      {
        !isError &&
        filteredUserGameList?.map((game, index) => (
          <GameCard index={index} key={index} {...game} />
        ))
      }
      {!isLoading && isError && (
        <Typography variant="h4" color="white">
          Ups! Nada que mostrar por acá
        </Typography>
      )}
    </ListContainer>
  );
};
