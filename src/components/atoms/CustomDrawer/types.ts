type Anchor = "top" | "left" | "bottom" | "right";

export type CustomDrawerProps = {
  size?: number;
  anchor?: Anchor;
  openDrawer?: boolean;
  setOpenDrawer: (open: boolean) => void;
};
