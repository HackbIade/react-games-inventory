import SearchIcon from "@mui/icons-material/Search";

import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import { useUserGamesSearch } from "../../../hooks/useUserGamesSearch";

export const GameSearchBar = () => {
  const { search, handleChange } = useUserGamesSearch();
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={search}
        placeholder="Search…"
        onChange={handleChange}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};
