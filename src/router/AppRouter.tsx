import { Routes, Route } from "react-router-dom";

import { AppContainer } from "./styles";
import { HomePage, GamesPage } from "../pages";

export const AppRouter = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
      </Routes>
    </AppContainer>
  );
};
