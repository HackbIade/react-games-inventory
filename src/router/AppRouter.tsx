import { Routes, Route } from "react-router-dom";

import { AppContainer } from "./styles";
import { Loading } from "../components/atoms";
import { useGlobalContext } from "../context";
import { HomePage, GamesPage, PlatformPage, SignInPage, SignUpPage } from "../pages";

export const AppRouter = () => {
  const { state: { loading } } = useGlobalContext()
  return (
    <AppContainer>
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/platforms" element={<PlatformPage />} />
      </Routes>
    </AppContainer>
  );
};
