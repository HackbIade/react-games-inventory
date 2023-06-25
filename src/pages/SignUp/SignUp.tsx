import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { MainContainer } from './styles';
import { useNavigate } from 'react-router-dom';


export const SignUpPage = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();
    const pass = data.get('password')?.toString();
    // TODO add invitation code validation
    if (!!email && !!pass) {
      try {
        await signUp(email, pass);
      } catch (_) { }
    }
  };

  return (
    <MainContainer>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <img src="/images/nurusleep.gif" alt="sign up" />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link variant="body2" onClick={() => navigate('/sign-in')}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </MainContainer>
  );
}