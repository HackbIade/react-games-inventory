import { useNavigate } from "react-router-dom";

import { variants } from "./animation";
import { useGlobalContext } from "../../context";
import { AccesButton } from "../../components/atoms";
import { Title, UserInput, Container, Description } from "./styles";

export const HomePage = () => {
  const navigate = useNavigate();
  const {
    setUser,
    state: { user },
  } = useGlobalContext();

  const inputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUser(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/games?user=${user}`);
  };

  return (
    <Container {...{ variants }} initial="hidden" animate="visible">
      <Title>Inventory</Title>
      <Description>TO GAMES & CONSOLES</Description>
      <form {...{ onSubmit }}>
        <UserInput autoComplete="off" value={user} onChange={inputChange} />
        <AccesButton show={!!user} />
      </form>
    </Container>
  );
};
