import { Divider } from "@mui/material";
import { useEffect } from "react";

import { GameSearchBar } from "../../atoms";
import { ConsoleFilter } from "../../../types";
import { useUserConsoles } from "../../../hooks";
import { useGamesContext } from "../../../context";
import { VisibilityButton } from "../VisibilityButton";
import { Container, Row, Subtitle, Text, Title } from "./styles";

export const GamesFilterBox = () => {
  const { userConsolesList } = useUserConsoles();
  const { state: { consolesFilterApplied }, setConsolesFilterApplied } = useGamesContext();

  useEffect(() => {
    if (userConsolesList && consolesFilterApplied?.length === 0) {
      const initialConsoleFilterList: ConsoleFilter[] = userConsolesList.map(({ name, }) => ({
        name,
        shown: true
      }))
      setConsolesFilterApplied(initialConsoleFilterList)
    }
  }, [userConsolesList])

  const handleShow = (nameToChange: string) => {
    let consoleToApply = consolesFilterApplied.find(({ name }) => name === nameToChange)
    if (consoleToApply) consoleToApply.shown = !consoleToApply?.shown;
    const listWithoutConsoleToApply: ConsoleFilter[] = consolesFilterApplied?.filter(({ name }) => name !== nameToChange)
    const newList: ConsoleFilter[] = consoleToApply ? [consoleToApply, ...listWithoutConsoleToApply] : listWithoutConsoleToApply
    const sortedNewList = newList.sort((a, b) =>
      a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
    setConsolesFilterApplied(sortedNewList);
  }

  return (
    <Container>
      <Title>Filter options:</Title>
      <>
        <Subtitle>Search by keyword:</Subtitle>
        <GameSearchBar />
      </>
      <Divider />
      <>
        <Subtitle>Sort by:</Subtitle>
        <Text>Ascendant</Text>
        <Text>Descending</Text>
      </>
      <Divider />
      <>
        <Row>
          <Subtitle>Show/Hide:</Subtitle>
        </Row>
        <>
          {
            consolesFilterApplied?.map(({ name, shown }) => (
              <Row key={`filter-console-${name}`}>
                <Text>{name}</Text>
                <VisibilityButton visible={shown} onClick={() => handleShow(name)} />
              </Row>
            ))
          }
        </>
      </>
    </Container>
  )
}