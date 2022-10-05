import { GameCard } from "../GameCard";
import { GameListProps } from "./types";
import { CardSkeleton, ListContainer } from "./styles";

export const GamesList = ({ games }: GameListProps) => {
  return (
    <ListContainer>
      {games.length > 0
        ? games.map((game, index) => <GameCard key={index} {...game} />)
        : [...Array.from({ length: 3 })].map((index) => (
            <CardSkeleton variant="rectangular" width={300} height={400} />
          ))}
    </ListContainer>
  );
};
