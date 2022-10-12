import { Container } from "./styles";
import { Navbar, GamesList, GameSearchBar } from "../../components/ui";

export const Collection = () => {
  return (
    <Container>
      <Navbar title="Collection" />
      <GameSearchBar />
      <GamesList />
    </Container>
  );
};
