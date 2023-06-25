
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { MainContainer } from './styles';
import { useNavigate } from 'react-router-dom';

export const SignInPage = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();
    const pass = data.get('password')?.toString();
    if (!!email && !!pass) {
      try {
        await signIn(email, pass);
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
          <img src="/images/nurusleep.gif" alt="login" />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
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
        </Box>
      </Container>
    </MainContainer>
  );
}