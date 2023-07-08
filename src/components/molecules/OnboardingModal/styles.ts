import { Button, Container, Modal, Select, TextField, Typography } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled(Modal)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubContainer = styled(Container).attrs({
  maxWidth: "xs"
})`
  border-radius: 8px;
  border: 1px solid #FECE03;
  background-color: #000000;
`

export const BoxContainer = styled.div`
  display: flex;
  padding: 24px 8px;
  align-items: center;
  flex-direction: column;
`;

export const FinishOnboardingButton = styled(Button)
  .attrs({
    type: "submit",
    variant: "contained",
  })
  `
  width: 100%;
  margin-bottom: 16px;
  `

export const GametagInput = styled(TextField)
  .attrs({
    id: "gameTag",
    required: true,
    name: "gameTag",
    label: "Game Tag",
    autoComplete: "gameTag",
  })
  `
  min-width:100%;
`;

export const Form = styled.form`
  gap: 16px;
  width: 100%;
  display: flex;
  margin-top: 24px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const CustomSelect = styled(Select)`
  width: 100%;
`;