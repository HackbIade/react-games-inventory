import { useState } from "react";

import { SearchInput, Container, SubContainer } from "./styles";
import { useGlobalContext } from "../../../context";

export const GameSearchBar = () => {
  const {
    state: { userGameList },
    setFilteredUserGamesList,
  } = useGlobalContext();
  const [search, setSearch] = useState("");

  const handleInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
    const currentFilteredUserGameList = userGameList.filter(
      (game) =>
        game.name?.toLowerCase()?.includes(value.toLowerCase()) ||
        game.platform?.toLowerCase()?.includes(value.toLowerCase())
    );
    setFilteredUserGamesList(currentFilteredUserGameList);
  };

  return (
    <Container>
      <SubContainer>
        <SearchInput
          fullWidth
          type="search"
          value={search}
          id="outlined-search"
          label="Search field"
          onChange={handleInputChange}
        />
      </SubContainer>
    </Container>
  );
};
