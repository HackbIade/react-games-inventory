
import { useSearchParams } from "react-router-dom";

import { AddButton, Text } from "./styles";
import { AddGamesButtonProps } from "./types";
import { useGamesContext } from "../../../context";

export const AddGamesButton = ({ onClose }: AddGamesButtonProps) => {
  const [searchParams] = useSearchParams();
  const user = searchParams.get("user") || "";
  const { setShowAddGamesDrawer } = useGamesContext()

  const onClick = () => {
    setShowAddGamesDrawer(true);
    onClose();
  };

  return (
    !!user ? (
      <AddButton {...{ onClick }}>
        <Text>Add new game</Text>
      </AddButton>
    ) : null
  )
};
