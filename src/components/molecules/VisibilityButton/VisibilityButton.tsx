import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/material';
import { VisibilityButtonProps } from './types';

export const VisibilityButton = ({ visible, onClick }: VisibilityButtonProps) => {
  return (
    <IconButton aria-label='visibility' {...{ onClick }}>
      {visible ?
        <VisibilityIcon />
        :
        <VisibilityOffIcon color='disabled' />}
    </IconButton>
  )
}