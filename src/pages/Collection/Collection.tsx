import { Container } from "./styles";
import { GamesList, ResponsiveAppBar } from "../../components/ui";
import { CollectionInfoButton } from "../../components/ui/CollectionInfoButton";

export const Collection = () => {
  return (
    <Container>
      <ResponsiveAppBar />
      <GamesList />
      <CollectionInfoButton />
    </Container>
  );
};
