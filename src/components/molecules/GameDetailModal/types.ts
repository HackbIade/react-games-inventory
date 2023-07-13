import { GamesType } from "../../../types"

export type GameDetailModalProps = {
  game: GamesType;
  open: boolean;
  onClose: () => void;
}