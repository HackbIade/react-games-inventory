import { FilterButton, Text } from "./styles";
import { FilterGamesButtonProps } from "./types";
import { useGamesContext } from "../../../context";

export const FilterGamesButton = ({ onClose }: FilterGamesButtonProps) => {
  const { setShowFilterGamesDrawer } = useGamesContext()
  const onClick = () => {
    setShowFilterGamesDrawer(true);
    onClose();
  };

  return (
    <FilterButton {...{ onClick }} >
      <Text>Filtrar lista de juegos</Text>
    </FilterButton>
  );
}