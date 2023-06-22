import { useState } from "react";
import Icon from "@mui/icons-material/Construction";

import { IconButtonWrapper } from "./styles";
import { GamesInfoDialog } from "../GamesInfoDialog";

export const GamesToolsButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => {
    setOpen(false);
  };
  const onClick = () => {
    setOpen(true);
  };

  return (
    <>
      <IconButtonWrapper {...{ onClick }}>
        <Icon />
      </IconButtonWrapper>
      <GamesInfoDialog {...{ open, onClose }} />
    </>
  );
};
