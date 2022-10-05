import styled from "styled-components";
import { Box, Button, TextField } from "@mui/material";

export const TextFiledWrapper = styled(TextField)`
  min-width: 350px;
  margin-bottom: 8px;
  @media (max-width: 400px) {
    width: 80%;
  }
`;

export const ButtonWrapper = styled(Button)`
  width: 80%;
  margin-bottom: 8px;
`;

export const BoxWrapper = styled(Box)`
  width: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  -webkit-flex-flow: row wrap;
  justify-content: space-evenly;
`;
