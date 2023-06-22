import { DrawerContainer } from "./styles";
import { CustomDrawerProps } from "./types";

export const CustomDrawer: React.FC<
  React.PropsWithChildren<CustomDrawerProps>
> = ({
  size,
  children,
  setOpenDrawer,
  anchor = "bottom",
  openDrawer = false,
}) => {
    const onClose = () => {
      setOpenDrawer(false);
    };

    return (
      <DrawerContainer {...{ anchor, open: openDrawer, onClose, size }}>
        {children}
      </DrawerContainer>
    );
  };
