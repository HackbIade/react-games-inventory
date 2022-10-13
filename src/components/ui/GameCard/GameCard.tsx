import { CardContent } from "@mui/material";
import StyleIcon from "@mui/icons-material/Style";

import {
  GAME_IMAGES,
  PLATFORM_BORDER_COLOR,
  PLATFORM_CONTAINER_COLOR,
} from "./utils";
import {
  Name,
  KeyArt,
  Container,
  DigitalIcon,
  PhysicalIcon,
  PlatformImages,
  PlatformContainer,
  AnimationContainer,
} from "./styles";
import { GameCardProps } from "./type";

export const GameCard = ({
  name,
  index,
  cover,
  platform,
  isLimitedRun,
  digitalVersion,
  trandingGameCard,
}: GameCardProps) => {
  return (
    <AnimationContainer
      initial={{ y: 5, opacity: 0 }}
      animate={{
        y: 0.5,
        opacity: 1,
        transition: { delay: index < 10 ? index * 0.2 : 2 },
      }}
    >
      <Container variant="outlined" bc={PLATFORM_BORDER_COLOR[platform]}>
        <PlatformContainer bc={PLATFORM_CONTAINER_COLOR[platform]}>
          <PlatformImages alt={platform} src={GAME_IMAGES[platform]} />
        </PlatformContainer>
        <KeyArt image={cover || "/images/no-found.png"} />
        <CardContent>
          <Name>{name}</Name>
          {digitalVersion ? <DigitalIcon /> : <PhysicalIcon />}
          {trandingGameCard && <StyleIcon color="primary" fontSize="small" />}
          {isLimitedRun && (
            <img src="/images/limited_run_games.png" width={22} />
          )}
        </CardContent>
      </Container>
    </AnimationContainer>
  );
};
