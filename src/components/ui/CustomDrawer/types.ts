type Anchor = "top" | "left" | "bottom" | "right";

export interface CustomDrawerProps {
  size?: number;
  anchor?: Anchor;
  openDrawer?: boolean;
  setOpenDrawer: (open: boolean) => void;
}
