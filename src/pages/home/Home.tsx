import { useNavigate } from "react-router-dom";

import { variants } from "./animation";
import { useGlobalContext } from "../../context";
import { SearchButton } from "../../components/atoms";
import { Title, UserInput, Container, WrappedForm, Description, GoToSigInButton } from "./styles";


export const HomePage = () => {
  const {
    setGameTag,
    state: { gameTag },
  } = useGlobalContext();
  const navigate = useNavigate();

  const inputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setGameTag(value);
  };

  const goToSignIn = () => {
    navigate('/sign-in')
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/games?gameTag=${gameTag}`);
  };

  return (
    <Container {...{ variants }} initial="hidden" animate="visible">
      <Title>Inventory</Title>
      <WrappedForm {...{ onSubmit }}>
        <UserInput autoComplete="off" value={gameTag} onChange={inputChange} />
        {!!gameTag && <SearchButton show={!!gameTag} />}
      </WrappedForm>
      <GoToSigInButton onClick={goToSignIn}>
        <Description>sign In / sign Up</Description>
      </GoToSigInButton>
    </Container>
  );
};
