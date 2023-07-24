import {useEffect} from 'react';

import {ConsoleFilter} from '../../../types';
import {useUserConsoles} from '../../../hooks';
import {useGamesContext} from '../../../context';
import {VisibilityButton} from '../VisibilityButton';
import {Container, ConsoleButton, Subtitle, Text, Title} from './styles';

export const GamesFilterBox = () => {
  const {userConsolesList} = useUserConsoles();
  const {
    setConsolesFilterApplied,
    state: {consolesFilterApplied},
  } = useGamesContext();

  useEffect(() => {
    if (userConsolesList && consolesFilterApplied?.length === 0) {
      const initialConsoleFilterList: ConsoleFilter[] = userConsolesList.map(
        ({name}) => ({
          name,
          shown: true,
        })
      );
      setConsolesFilterApplied(initialConsoleFilterList);
    }
  }, [userConsolesList]);

  const handleShow = (nameToChange: string) => {
    let consoleToApply = consolesFilterApplied.find(
      ({name}) => name === nameToChange
    );
    if (consoleToApply) consoleToApply.shown = !consoleToApply?.shown;
    const listWithoutConsoleToApply: ConsoleFilter[] =
      consolesFilterApplied?.filter(({name}) => name !== nameToChange);
    const newList: ConsoleFilter[] = consoleToApply
      ? [consoleToApply, ...listWithoutConsoleToApply]
      : listWithoutConsoleToApply;
    const sortedNewList = newList.sort((a, b) =>
      a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
    );
    setConsolesFilterApplied(sortedNewList);
  };

  return (
    <Container>
      {consolesFilterApplied?.map(({name, shown}) => (
        <ConsoleButton
          key={`filter-console-${name}`}
          onClick={() => handleShow(name)}
          startIcon={<VisibilityButton visible={shown} />}
        >
          {name}
        </ConsoleButton>
      ))}
    </Container>
  );
};
