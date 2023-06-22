import { Typography } from "@mui/material";

import { GameCard } from "../GameCard";
import { listAnimation } from "./animation";
import { CardSkeleton, ListContainer } from "./styles";
import { useUserGames } from "../../../hooks/useUserGames/useUserGames";

export const GamesList = () => {
  const { filteredUserGameList, isError, isLoading } = useUserGames();
  return (
    <ListContainer variants={listAnimation} initial="hidden" animate="visible">
      {isLoading &&
        [...Array.from({ length: 12 })].map((_, index) => (
          <CardSkeleton
            width={160}
            height={368}
            variant="rectangular"
            key={`skeleton-${index}`}
          />
        ))}

      {!isLoading &&
        !isError &&
        filteredUserGameList.map((game, index) => (
          <GameCard index={index} key={index} {...game} />
        ))}

      {!isLoading && isError && (
        <Typography variant="h4" color="white">
          Ups! Nada que mostrar por acá
        </Typography>
      )}
    </ListContainer>
  );
};
