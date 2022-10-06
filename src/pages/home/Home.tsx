import { Container } from "./styles";
import { MainLayout } from "../../components/layouts/MainLayout";
import { Typography } from "@mui/material";

export const Home = () => {
  return (
    <MainLayout>
      <Container>
        <Typography variant="h4" color="primary">
          Work in progress
        </Typography>
        <img src="/working.gif" />
      </Container>
    </MainLayout>
  );
};
