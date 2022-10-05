import { useEffect, useState } from "react";

import { Container } from "./styles";
import { getGames } from "../../service";
import { GamesType } from "../../service/games/types";
import { GameForm } from "../../components/ui/GameForm";
import { GamesList } from "../../components/ui/GamesList";

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
    // fetchGames();
  }, []);

  return (
    <Container>
      <GameForm />
      <GamesList {...{ games }} />
    </Container>
  );
};
