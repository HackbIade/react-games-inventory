import { AccessButtonProps } from "./types";
import { AnimationWrapper, Container, Text } from "./styles";
import { ReactComponent as Union } from "../../../assets/svg/union.svg";

export const AccesButton = ({ show, onClick }: AccessButtonProps) => {
  return (
    <AnimationWrapper
      initial={{ scale: 0 }}
      whileTap={{ scale: 0.95 }}
      animate={{ scale: Number(!!show) }}
    >
      <Container color="error" {...{ onClick }} type="submit">
        <Union width={50} />
        <Text>Access</Text>
      </Container>
    </AnimationWrapper>
  );
};
