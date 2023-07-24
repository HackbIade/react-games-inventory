import * as React from 'react';
import Box from '@mui/material/Box';
import {Paper} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import GamepadIcon from '@mui/icons-material/Gamepad';
import BottomNavigation from '@mui/material/BottomNavigation';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const pages = ['games', 'platforms', 'achievements'];

export const BottomNav = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{width: '100%', pb: 7, display: {xs: 'flex', md: 'none'}}}>
      <Paper
        elevation={3}
        sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
            navigate(`/${pages[newValue]}`);
          }}
        >
          <BottomNavigationAction label="games" icon={<SportsEsportsIcon />} />
          <BottomNavigationAction label="platform" icon={<GamepadIcon />} />
          <BottomNavigationAction
            label="achievements"
            icon={<EmojiEventsIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
