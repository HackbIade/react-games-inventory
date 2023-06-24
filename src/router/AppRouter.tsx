import { Routes, Route } from "react-router-dom";

import { AppContainer } from "./styles";
import { Loading } from "../components/atoms";
import { useGlobalContext } from "../context";
import { HomePage, GamesPage, ConsolesPage } from "../pages";

export const AppRouter = () => {
  const { state: { loading } } = useGlobalContext()
  return (
    <AppContainer>
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/consoles" element={<ConsolesPage />} />
      </Routes>
    </AppContainer>
  );
};
