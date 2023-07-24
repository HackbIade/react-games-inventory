import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import {useNavigate} from 'react-router-dom';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountBox from '@mui/icons-material/AccountBox';
import {useAuth} from '../../../context/AuthContext/AuthContext';

const pages = ['games', 'platforms', 'achievements'];

export const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const {signOutUser, user} = useAuth();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleNavigate = (route: string) => {
    navigate(`/${route}`);
  };

  const goToSigIn = () => {
    navigate('/sign-in');
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pages.map(page => (
              <Button
                key={page}
                onClick={() => handleNavigate(page)}
                sx={{my: 2, color: 'white', display: 'block'}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open options">
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <AccountBox />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))} */}

              {!!user?.uid ? (
                <MenuItem key="logout" onClick={signOutUser}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              ) : (
                <MenuItem key="login" onClick={goToSigIn}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
