import { Card } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Card)`
  margin: 4px;
  width: 300px;
  max-height: 400px;
  @media (max-width: 400px) {
    width: 80%;
  }
`;
