import { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

import {
  EmailInput,
  BoxContainer,
  SignUpButton,
  MainContainer,
  PasswordInput,
  InvitationCodeInput,
} from './styles';
import { useAuth, useGlobalContext } from '../../context';
import { OnboardingModal } from '../../components/molecules';


export const SignUpPage = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    code: '',
    email: '',
    password: '',
  });
  const [open, setOpen] = useState<boolean>(false);
  const { setLoading, state: { loading } } = useGlobalContext()
  const [snackMessage, setSnackMessage] = useState<string>("Error")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)
    const { code, email, password } = formState;

    if (!!email && !!password && !!code && code === "123456") {
      try {
        await signUp(email, password);
      } catch (error) {
        const { message } = error as Error;
        if (message?.includes("Firebase: Error (auth/email-already-in-use)")) {
          setSnackMessage("Email already in use");
        }
        setOpen(true)
      }
      finally {
        setLoading(false)
      }
    }

  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { code, email, password } = formState;
  const isButtonDisabled = !code ||
    !email ||
    !password ||
    password.length <= 5 ||
    code !== "123456" ||
    loading

  return (
    <MainContainer>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <BoxContainer>
          <img src="/images/nurusleep.gif" alt="sign up" />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Snackbar open={open} autoHideDuration={5000}>
            <Alert severity='error'>
              {snackMessage}
            </Alert>
          </Snackbar>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InvitationCodeInput onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12}>
                <EmailInput onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12}>
                <PasswordInput onChange={handleInputChange} />
              </Grid>
            </Grid>
            <SignUpButton disabled={isButtonDisabled}>
              Sign Up
            </SignUpButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link variant="body2" onClick={() => navigate('/sign-in')}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </BoxContainer>
      </Container>
      <OnboardingModal />
    </MainContainer>
  );
}