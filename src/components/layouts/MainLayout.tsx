import { AppNavbar } from "../ui";
import { Container } from "./styles";
import { MainLayoutProps } from "./types";

export const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = ({
  title,
  children,
}) => {
  return (
    <>
      <AppNavbar {...{ title }} />
      <Container>{children}</Container>
    </>
  );
};
