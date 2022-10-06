import { Routes, Route } from "react-router-dom";

import { AppContainer } from "./styles";
import { Home, AddGames } from "../pages";

export const AppRouter = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_games" element={<AddGames />} />
      </Routes>
    </AppContainer>
  );
};
