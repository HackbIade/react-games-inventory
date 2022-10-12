import { SearchInput, Container, SubContainer } from "./styles";
import { useUserGamesSearch } from "../../../hooks/useUserGamesSearch";

export const GameSearchBar = () => {
  const { search, handleChange } = useUserGamesSearch();
  return (
    <Container>
      <SubContainer>
        <SearchInput
          fullWidth
          type="search"
          value={search}
          id="outlined-search"
          label="Search field"
          onChange={handleChange}
        />
      </SubContainer>
    </Container>
  );
};
