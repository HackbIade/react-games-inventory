
import { useSearchParams } from "react-router-dom";

import { AddButton, Text } from "./styles";
import { AddGamesButtonProps } from "./types";
import { useGamesContext } from "../../../context";
import { useAuth } from "../../../context/AuthContext/AuthContext";

export const AddGamesButton = ({ onClose }: AddGamesButtonProps) => {
  const { user } = useAuth();
  const { setShowAddGamesDrawer } = useGamesContext()

  const onClick = () => {
    setShowAddGamesDrawer(true);
    onClose();
  };

  return (
    <AddButton {...{ onClick }} disabled={!user?.uid}>
      <Text disabled={!user?.uid}>Add new game</Text>
    </AddButton>
  )
};
