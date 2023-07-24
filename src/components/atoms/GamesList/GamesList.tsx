import { Typography } from "@mui/material";

import { GameCard } from "../GameCard";
import { useAuth } from "../../../context";
import { listAnimation } from "./animation";
import { AddGamesButton } from "../AddGamesButton";
import { EmptyStateContainer, ListContainer } from "./styles";
import { useUserGames } from "../../../hooks/useUserGames/useUserGames";


export const GamesList = () => {
  const { user } = useAuth();
  const { filteredUserGameList, isError, isLoading } = useUserGames();

  return (
    <>
      <ListContainer
        variants={listAnimation}
        initial="hidden"
        animate="visible"
      >
        {!isError &&
          filteredUserGameList?.map((game, index) => (
            <GameCard key={index} {...{index, game}} />
          ))}
      </ListContainer>
      {!isLoading && isError && (
        <EmptyStateContainer>
          <img src="/images/nurusleep.gif" alt="sign up" />
          <Typography variant="h5" color="white" align="center" margin={4}>
            Este gametag no tiene juegos asociados aún
          </Typography>
          {user?.uid && <AddGamesButton />}
        </EmptyStateContainer>
      )}
    </>
  );
};
