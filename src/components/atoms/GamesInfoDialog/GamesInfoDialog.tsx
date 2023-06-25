import { AddGamesButton } from "../AddGamesButton";
import { useGamesContext } from "../../../context";
import { GamesInfoDialogProps } from "./types";
import { FilterGamesButton } from "../../molecules";
import { Container, DialogWrapper, Title, Text } from "./styles";
import { useAuth } from "../../../context/AuthContext/AuthContext";

export const GamesInfoDialog = ({
  open,
  onClose,
}: GamesInfoDialogProps) => {
  const {
    state: { userTotalGames },
  } = useGamesContext();

  return (
    <DialogWrapper {...{ open, onClose }}>
      <Container>
        <Title >
          🛠️ Collecion Tools
        </Title>
        <AddGamesButton {...{ onClose }} />
        <FilterGamesButton {...{ onClose }} />
        <Text >{`Total games: ${userTotalGames} und(s)`}</Text>
      </Container>
    </DialogWrapper>
  );
};
