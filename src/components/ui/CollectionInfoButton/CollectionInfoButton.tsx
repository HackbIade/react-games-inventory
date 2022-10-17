import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";

import { IconButtonWrapper } from "./styles";
import { CollectionInfoDialog } from "../CollectionInfoDialog";

export const CollectionInfoButton = () => {
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
        <InfoIcon />
      </IconButtonWrapper>
      <CollectionInfoDialog {...{ open, onClose }} />
    </>
  );
};
