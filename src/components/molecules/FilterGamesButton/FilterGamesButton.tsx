import {FilterButton, Text} from './styles';
import {useGamesContext} from '../../../context';

export const FilterGamesButton = () => {
  const {setShowFilterGamesDrawer} = useGamesContext();
  const onClick = () => {
    setShowFilterGamesDrawer(true);
  };

  return (
    <FilterButton {...{onClick}}>
      <Text>Filter game list</Text>
    </FilterButton>
  );
};
