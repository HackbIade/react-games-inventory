import { Typography } from "@mui/material";

import { useGlobalContext } from "../../../context";
import { Container, DialogWrapper } from "./styles";
import { CollectionInfoDialogProps } from "./types";

export const CollectionInfoDialog = ({
  open,
  onClose,
}: CollectionInfoDialogProps) => {
  const {
    state: { userTotalGames },
  } = useGlobalContext();

  return (
    <DialogWrapper {...{ open, onClose }}>
      <Container>
        <Typography variant="h5" color="primary">
          Info
        </Typography>
        <Typography variant="body2">{`Total Games: ${userTotalGames} und(s)`}</Typography>
      </Container>
    </DialogWrapper>
  );
};
