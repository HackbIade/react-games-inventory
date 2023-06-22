import { Container } from "./styles";
import { GamesList, GamesToolsButton } from "../../components/atoms";
import { ResponsiveAppBar, AddGamesDrawer, FilterGamesDrawer } from "../../components/molecules";

export const GamesPage = () => {
  return (
    <Container>
      <ResponsiveAppBar />
      <GamesList />
      <AddGamesDrawer />
      <FilterGamesDrawer />
      <GamesToolsButton />
    </Container>
  );
};