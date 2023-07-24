import SearchIcon from "@mui/icons-material/Search";

import { useUserGamesSearch } from "../../../hooks";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

export const GameSearchBar = () => {
  const { search, handleChange } = useUserGamesSearch();
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon color="disabled" />
      </SearchIconWrapper>
      <StyledInputBase
        value={search}
        placeholder="Search…"
        onChange={handleChange}
        inputProps={{'aria-label': 'search'}}
      />
    </Search>
  );
};
