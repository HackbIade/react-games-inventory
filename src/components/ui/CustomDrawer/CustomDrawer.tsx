import { DrawerContainer } from "./styles";
import { CustomDrawerProps } from "./types";

export const CustomDrawer: React.FC<
  React.PropsWithChildren<CustomDrawerProps>
> = ({ size, setOpen, children, open = false, anchor = "bottom" }) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <DrawerContainer {...{ anchor, open, onClose, size }}>
      {children}
    </DrawerContainer>
  );
};
