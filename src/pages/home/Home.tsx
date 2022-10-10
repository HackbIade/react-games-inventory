import { useNavigate } from "react-router-dom";

import { variants } from "./animation";
import { useGlobalContext } from "../../context";
import { AccesButton } from "../../components/ui";
import { Title, UserInput, Container, Description } from "./styles";

export const Home = () => {
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

  const handleAccess = () => {
    navigate(`/collection?user=${user}`);
  };

  return (
    <Container {...{ variants }} initial="hidden" animate="visible">
      <Title>Inventory</Title>
      <Description>TO GAMES & CONSOLES</Description>
      <UserInput autoComplete="off" value={user} onChange={inputChange} />
      <AccesButton show={!!user} onClick={handleAccess} />
    </Container>
  );
};
