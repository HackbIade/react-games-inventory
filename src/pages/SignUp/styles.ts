import { Box, Button, TextField } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmailInput = styled(TextField)
  .attrs({
    id: "email",
    name: "email",
    required: true,
    fullWidth: true,
    autoComplete: "email",
    label: "Email Address",
  })
  ``;

export const PasswordInput = styled(TextField)
  .attrs({
    id: "password",
    required: true,
    fullWidth: true,
    type:"password",
    name: "password",
    label: "password",
    autoComplete: "new-password",
  })
  ``;

export const InvitationCodeInput = styled(TextField)
  .attrs({
    id: "code",
    name: "code",
    required: true,
    fullWidth: true,
    autoFocus: true,
     type:"password",
    color: 'warning',
    autoComplete: "code",
    label: "Invitation Code",
  })
  ``;

export const BoxContainer = styled(Box)
  .attrs({
    sx: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }
  })
  ``;

export const SignUpButton = styled(Button)
  .attrs({
    type: "submit",
    fullWidth: true,
    variant: "contained",
    sx: { mt: 3, mb: 2 }
  })
  ``