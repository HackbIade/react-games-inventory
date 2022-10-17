import { Container } from "./styles";
import { Navbar, GamesList, GameSearchBar } from "../../components/ui";
import { CollectionInfoButton } from "../../components/ui/CollectionInfoButton";

export const Collection = () => {
  return (
    <Container>
      <Navbar title="Collection" />
      <GameSearchBar />
      <GamesList />
      <CollectionInfoButton />
    </Container>
  );
};
