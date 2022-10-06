import styled from "styled-components";
import { Box, Button, TextField } from "@mui/material";

export const TextFiledWrapper = styled(TextField)`
  flex: 1;
  width: 100%;
  display: flex;
  min-width: 350px;
  margin-bottom: 8px;
`;

export const ButtonWrapper = styled(Button)`
  width: 100%;
`;

export const BoxWrapper = styled(Box)`
  padding: 24px 12px;
`;

export const InputsGroup = styled.div`
  display: flex;
  list-style: none;
  margin-bottom: 8px;
  align-items: center;
  -webkit-flex-flow: row wrap;
  justify-content: space-evenly;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const Separator = styled.div`
  width: 8px;
  height: 1px;
  @media (max-width: 400px) {
    width: 0px;
  }
`;
