import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/material';
import { VisibilityButtonProps } from './types';
import {ColosoleButton} from './styled';

export const VisibilityButton = ({visible, onClick}: VisibilityButtonProps) => {
  return (
    <ColosoleButton aria-label="visibility" {...{onClick}}>
      {visible ? (
        <VisibilityIcon color="secondary" />
      ) : (
        <VisibilityOffIcon color="disabled" />
      )}
    </ColosoleButton>
  );
};