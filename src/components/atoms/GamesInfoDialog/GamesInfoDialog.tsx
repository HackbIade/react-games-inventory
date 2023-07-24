import { AddGamesButton } from "../AddGamesButton";
import { useGamesContext } from "../../../context";
import { GamesInfoDialogProps } from "./types";
import { FilterGamesButton } from "../../molecules";
import {Container, DialogWrapper, Title, Text} from './styles';

export const GamesInfoDialog = ({
  open,
  onClose,
}: GamesInfoDialogProps) => {
  const {
    state: { userTotalGames },
  } = useGamesContext();

  return (
    <DialogWrapper {...{open, onClose}}>
      <Container>
        <Title>🛠️ Collecion Tools</Title>
        <AddGamesButton />
        <FilterGamesButton />
        <Text>{`Total games: ${userTotalGames} und(s)`}</Text>
      </Container>
    </DialogWrapper>
  );
};
