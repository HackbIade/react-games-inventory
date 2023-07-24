import {
  BottomNav,
  AddGamesDrawer,
  ResponsiveAppBar,
  FilterGamesDrawer,
} from '../../components/molecules';
import {Container, Row} from './styles';
import {AddGamesButton, GameSearchBar, GamesList} from '../../components/atoms';

export const GamesPage = () => {
  return (
    <Container>
      <ResponsiveAppBar />
      <Row>
        <AddGamesButton />
        <GameSearchBar />
      </Row>
      <GamesList />
      <AddGamesDrawer />
      <FilterGamesDrawer />
      <BottomNav />
    </Container>
  );
};
