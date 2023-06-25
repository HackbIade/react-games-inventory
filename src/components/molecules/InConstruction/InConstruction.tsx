import { Button } from "@mui/material";
import { Container, Subtitle, Title } from "./styles";
import { useNavigate } from "react-router-dom";

export const InConstruction = () => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate(-1)
  }
  return (
    <Container>
    <Title>This section is being built</Title>
    <Subtitle>come back soon</Subtitle>
      <Button {...{ onClick }}>Back</Button>
    </Container>
  )
}
