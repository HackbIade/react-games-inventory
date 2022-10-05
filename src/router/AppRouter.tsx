import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AppContainer } from "./styles";

export const AppRouter = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppContainer>
  );
};
