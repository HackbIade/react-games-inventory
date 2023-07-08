import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

import {
  EmailInput,
  SignInButton,
  BoxContainer,
  MainContainer,
  PasswordInput,
} from './styles';
import { useGlobalContext } from '../../context';
import { OnboardingModal } from '../../components/molecules';
import { useAuth } from '../../context/AuthContext/AuthContext';

export const SignInPage = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const { setLoading, state: { loading } } = useGlobalContext()

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true)
    const { email, password } = formState;
    if (!!email && !!password) {
      try {
        await signIn(email, password);
      } catch (_) {
        //TODO add invalid email & invalid password flows
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


  const { email, password } = formState;
  const isButtonDisabled =
    !email ||
    !password ||
    password.length <= 5 ||
    email.length <= 3 ||
    loading

  return (
    <MainContainer>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <BoxContainer>
          <img src="/images/nurusleep.gif" alt="login" />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <EmailInput onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12}>
                <PasswordInput onChange={handleInputChange} />
              </Grid>
            </Grid>
            <SignInButton disabled={isButtonDisabled}>
              Sign In
            </SignInButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link variant="body2" onClick={() => navigate('/sign-up')}>
                  {"Don't have an account? Sign Up"}
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