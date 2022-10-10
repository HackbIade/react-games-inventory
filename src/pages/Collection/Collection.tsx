import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { GamesType } from "../../types";
import { getGamesService } from "../../service";
import { Container, Description, Navbar } from "./styles";
import { AddGamesButton, GamesList } from "../../components/ui";

export const Collection = () => {
  const [searchParams] = useSearchParams();
  const [games, setGames] = useState<GamesType[]>();

  const fetchGames = async () => {
    const user = searchParams.get("user") || "";
    const gamesFetchResult = await getGamesService({ user });

    if (!!gamesFetchResult) {
      const { result: list } = gamesFetchResult;
      setGames(list);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <Container>
      <Navbar>
        <Description>Collection</Description>
        <AddGamesButton />
      </Navbar>
      <GamesList {...{ games }} />
    </Container>
  );
};
