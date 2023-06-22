
import { CustomDrawer } from "../../atoms"
import { useGamesContext } from "../../../context"
import { GamesFilterBox } from "../GamesFilterBox";

export const FilterGamesDrawer = () => {
  const { state: { showFilterGamesDrawer }, setShowFilterGamesDrawer } = useGamesContext();
  return (
    <CustomDrawer
      anchor="right"
      openDrawer={showFilterGamesDrawer}
      setOpenDrawer={setShowFilterGamesDrawer}
    >
      <GamesFilterBox />
    </CustomDrawer>
  )
}