import { GameCard } from "../GameCard";
import { GameListProps } from "./types";
import { CardSkeleton, ListContainer } from "./styles";

export const GamesList = ({ games }: GameListProps) => {
  return (
    <ListContainer>
      {games.length > 0
        ? games.map((game, index) => <GameCard key={index} {...game} />)
        : [...Array.from({ length: 4 })].map((_, index) => (
            <CardSkeleton
              width={180}
              height={400}
              variant="rectangular"
              key={`skeleton-${index}`}
            />
          ))}
    </ListContainer>
  );
};
