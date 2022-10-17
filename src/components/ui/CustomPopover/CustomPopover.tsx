import { Popover, Typography } from "@mui/material";

import { CustomPopoverProps } from "./types";

export const CustomPopover = ({
  name,
  open,
  anchorEl,
  onMouseLeave,
}: CustomPopoverProps) => {
  return (
    <Popover
      id="mouse-over-popover"
      sx={{
        pointerEvents: "none",
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      onClose={onMouseLeave}
      disableRestoreFocus
    >
      <Typography sx={{ p: 1 }}>{name}</Typography>
    </Popover>
  );
};
