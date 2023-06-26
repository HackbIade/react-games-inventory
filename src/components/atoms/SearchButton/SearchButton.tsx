import { SearchButtonProps } from "./types";
import { AnimationWrapper, Container, Text } from "./styles";
import Search from "@mui/icons-material/Search";

export const SearchButton = ({ show, onClick }: SearchButtonProps) => {
  return (
    <AnimationWrapper
      initial={{ scale: 0 }}
      whileTap={{ scale: 0.95 }}
      animate={{ scale: Number(!!show) }}
    >
      <Container color="error" {...{ onClick }} type="submit">
        <Search height={200} color="primary" />
        <Text>Search</Text>
      </Container>
    </AnimationWrapper>
  );
};
