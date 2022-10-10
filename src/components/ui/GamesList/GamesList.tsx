import { Typography } from "@mui/material";

import { GameCard } from "../GameCard";
import { GameListProps } from "./types";
import { CardSkeleton, ListContainer } from "./styles";

export const GamesList = ({
  isError,
  isLoading,
  filteredUserGameList,
}: GameListProps) => {
  return (
    <ListContainer>
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
          <GameCard key={index} {...game} />
        ))}

      {!isLoading && isError && (
        <Typography variant="h4" color="white">
          Ups! Nada que mostrar por acá
        </Typography>
      )}
    </ListContainer>
  );
};
