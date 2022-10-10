import { Container } from "./styles";
import { useUserGames } from "../../hooks/useUserGames";
import { Navbar, GamesList, GameSearchBar } from "../../components/ui";

export const Collection = () => {
  const { filteredUserGameList, isError, isLoading } = useUserGames();

  return (
    <Container>
      <Navbar title="Collection" />
      <GameSearchBar />
      <GamesList {...{ filteredUserGameList, isError, isLoading }} />
    </Container>
  );
};
