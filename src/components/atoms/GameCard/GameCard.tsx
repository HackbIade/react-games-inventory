import { useState } from "react";
import StyleIcon from "@mui/icons-material/Style";

import {
  Name,
  KeyArt,
  Container,
  CardBadges,
  DigitalIcon,
  PhysicalIcon,
  PlatformImages,
  PlatformContainer,
  AnimationContainer,
  WrappedCardContent,
} from "./styles";

import { GameCardProps } from "./type";
import { CustomPopover } from "../CustomPopover";
import { GAME_IMAGES, PLATFORM_BORDER_COLOR, PLATFORM_CONTAINER_COLOR } from "../../../constants/games";
import { useGamesContext } from "../../../context";
import { GameDetailModal } from "../../molecules";

export const GameCard = ({
  game,
  index,
}: GameCardProps) => {
const [detailOpen, setDetailOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { name, platform, cover, digitalVersion, trandingGameCard, isLimitedRun } = game;
  const onMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const onClick = () => {
    setDetailOpen(true);
  };

  const onClose = ()=>{
    setDetailOpen(false);
  }

  return (
    <AnimationContainer
      initial={{ y: 5, opacity: 0 }}
      animate={{
        y: 0.5,
        opacity: 1,
        transition: { delay: index < 10 ? index * 0.2 : 2 },
      }}
    >
      <Container {...{ onClick }} variant="outlined" bc={PLATFORM_BORDER_COLOR[platform]}>
        <PlatformContainer bc={PLATFORM_CONTAINER_COLOR[platform]}>
          <PlatformImages alt={platform} src={GAME_IMAGES[platform]} />
        </PlatformContainer>
        <KeyArt image={cover || "/images/no-found.png"} />
        <WrappedCardContent>
          <Name {...{ onMouseEnter, onMouseLeave }}>{name}</Name>
          <CustomPopover {...{ name, open, anchorEl, onMouseLeave }} />
          <CardBadges>
            {digitalVersion ? <DigitalIcon /> : <PhysicalIcon />}
            {trandingGameCard && <StyleIcon color="primary" fontSize="small" />}
            {isLimitedRun && (
              <img src="/images/limited_run_games.png" width={22} />
            )}
          </CardBadges>
        </WrappedCardContent>
      </Container>
      <GameDetailModal {...{ game, open: detailOpen, onClose }} />
    </AnimationContainer>
  );
};
