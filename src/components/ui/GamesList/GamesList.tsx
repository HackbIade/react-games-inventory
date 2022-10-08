import { GameCard } from "../GameCard";
import { GameListProps } from "./types";
import { CardSkeleton, ListContainer } from "./styles";
import { Typography } from "@mui/material";

export const GamesList = ({ games }: GameListProps) => {
  return (
    <ListContainer>
      {games === undefined &&
        [...Array.from({ length: 12 })].map((_, index) => (
          <CardSkeleton
            width={160}
            height={368}
            variant="rectangular"
            key={`skeleton-${index}`}
          />
        ))}

      {games?.map((game, index) => (
        <GameCard key={index} {...game} />
      ))}

      {games?.length === 0 && (
        <Typography variant="h4" color="white">
          Ups! Nada que mostrar por acá
        </Typography>
      )}
    </ListContainer>
  );
};
