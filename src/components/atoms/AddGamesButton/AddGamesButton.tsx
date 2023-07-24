import {AddButton} from './styles';
import {useGamesContext} from '../../../context';

import {useAuth} from '../../../context/AuthContext/AuthContext';
import {AddBox} from '@mui/icons-material';

export const AddGamesButton = () => {
  const {user} = useAuth();
  const {setShowAddGamesDrawer} = useGamesContext();

  const onClick = () => {
    setShowAddGamesDrawer(true);
  };

  return (
    <AddButton {...{onClick}} disabled={!user?.uid}>
      <AddBox color="secondary" />
    </AddButton>
  );
};
