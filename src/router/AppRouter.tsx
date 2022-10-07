import { Routes, Route } from "react-router-dom";

import { AppContainer } from "./styles";
import { Home, AddGames, Collection } from "../pages";

export const AppRouter = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_games" element={<AddGames />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </AppContainer>
  );
};
