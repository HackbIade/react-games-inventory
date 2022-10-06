type Anchor = "top" | "left" | "bottom" | "right";

export interface CustomDrawerProps {
  size?: number;
  open?: boolean;
  anchor?: Anchor;
  setOpen: (open: boolean) => void;
}
