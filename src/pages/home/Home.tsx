import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import { getGames } from "../../service";
import { GameCard } from "../../components/ui";
import { ButtonWrapper, Container, ListContainer } from "./styles";
import { GamesType } from "../../service/games/types";

export const Home = () => {
  const [games, setGames] = useState<GamesType[]>([]);

  const fetchGames = async () => {
    const gamesFetchResult = await getGames();

    if (!!gamesFetchResult) {
      const {
        result: { list },
      } = gamesFetchResult;
      setGames(list);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <Container>
      <ButtonWrapper
        disabled
        color="primary"
        variant="outlined"
        startIcon={<AddIcon />}
      >
        Add New Game
      </ButtonWrapper>
      <ListContainer>
        {games?.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </ListContainer>
    </Container>
  );
};
