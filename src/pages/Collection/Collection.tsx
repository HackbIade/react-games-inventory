import { useEffect, useState } from "react";

import { Container } from "./styles";
import { getGamesService } from "../../service";
import { GamesType } from "../../service/games/types";
import { GamesList } from "../../components/ui/GamesList";
import { MainLayout } from "../../components/layouts/MainLayout";

export const Collection = () => {
  const [games, setGames] = useState<GamesType[]>([]);

  const fetchGames = async () => {
    const gamesFetchResult = await getGamesService();

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
    <MainLayout>
      <Container>
        <GamesList {...{ games }} />
      </Container>
    </MainLayout>
  );
};
