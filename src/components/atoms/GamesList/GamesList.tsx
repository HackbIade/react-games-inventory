import { Typography } from "@mui/material";

import { GameCard } from "../GameCard";
import { EmptyStateContainer, ListContainer, MainContainer } from "./styles";
import { listAnimation } from "./animation";
import { useUserGames } from "../../../hooks/useUserGames/useUserGames";
import { AddGamesButton } from "../AddGamesButton";

export const GamesList = () => {
  const { filteredUserGameList, isError, isLoading } = useUserGames();
  return (
    <MainContainer>
      <ListContainer variants={listAnimation} initial="hidden" animate="visible">
        {
          !isError &&
          filteredUserGameList?.map((game, index) => (
            <GameCard index={index} key={index} {...game} />
          ))
        }
      </ListContainer>
      {!isLoading && isError && (
        <EmptyStateContainer>
          <img src="/images/nurusleep.gif" alt="sign up" />
          <Typography variant="h5" color="white" align="center" margin={4}>
            Este gametag no tiene juegos asociados aún
          </Typography>
          <AddGamesButton onClose={() => null} />
        </EmptyStateContainer>
      )}
    </MainContainer>
  );
};
