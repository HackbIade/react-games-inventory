import { useGamesContext } from "../../../context"
import { CustomDrawer, GameForm } from "../../atoms"

export const AddGamesDrawer = () => {
  const { state:
    { showAddGamesDrawer },
    setShowAddGamesDrawer } = useGamesContext();

  return (
    <CustomDrawer
      anchor="bottom"
      openDrawer={showAddGamesDrawer}
      setOpenDrawer={setShowAddGamesDrawer}
    >
      <GameForm />
    </CustomDrawer>
  )
}