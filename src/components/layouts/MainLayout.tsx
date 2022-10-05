import { AppNavbar } from "../ui";
import { MainLayoutProps } from "./types";

export const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = ({
  title,
  children,
}) => {
  return (
    <>
      <AppNavbar {...{ title }} />
      <main>{children}</main>
    </>
  );
};
