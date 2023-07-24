import {
  BottomNav,
  AddGamesDrawer,
  ResponsiveAppBar,
  FilterGamesDrawer,
} from '../../components/molecules';
import {Container, Row, BadgeContainer} from './styles';
import {AddGamesButton, GameSearchBar, GamesList} from '../../components/atoms';
import {useGamesContext} from '../../context';
import {Badge} from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import {GamesFilterBox} from '../../components/molecules/GamesFilterBox';

export const GamesPage = () => {
  const {
    state: {userTotalGames},
  } = useGamesContext();
  return (
    <Container>
      <ResponsiveAppBar />
      <Row>
        <AddGamesButton />
        <GameSearchBar />
        <BadgeContainer>
          <Badge badgeContent={userTotalGames} color="primary">
            <SportsEsportsIcon color="action" />
          </Badge>
        </BadgeContainer>
      </Row>
      <GamesFilterBox />
      <GamesList />
      <AddGamesDrawer />
      <FilterGamesDrawer />
      <BottomNav />
    </Container>
  );
};
