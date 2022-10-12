import { motion } from "framer-motion";
import StyleIcon from "@mui/icons-material/Style";
import SdCardIcon from "@mui/icons-material/SdCard";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { CardMedia, Typography, CardContent } from "@mui/material";

import { GAME_IMAGES, PLATFORM_COLOR } from "./utils";
import { GameCardProps } from "./type";
import { Container, PlatformContainer, PlatformImages } from "./styles";

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
    <motion.li
      initial={{ y: 5, opacity: 0 }}
      style={{ listStyleType: "none" }}
      animate={{
        y: 0.5,
        opacity: 1,
        transition: { delay: index < 10 ? index * 0.2 : 2 },
      }}
    >
      <Container variant="outlined" bc={PLATFORM_COLOR[platform]}>
        <PlatformContainer bc={PLATFORM_COLOR[platform]}>
          <PlatformImages alt={platform} src={GAME_IMAGES[platform]} />
        </PlatformContainer>
        <CardMedia
          height="250"
          component="img"
          alt={`${name}-cover`}
          image={cover || "/images/no-found.png"}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            sx={{
              overflow: "hidden",
              WebkitLineClamp: 2,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
            }}
          >
            {name}
          </Typography>
          {digitalVersion ? (
            <QrCode2Icon color="primary" fontSize="small" />
          ) : (
            <SdCardIcon color="primary" fontSize="small" />
          )}
          {trandingGameCard && <StyleIcon color="primary" fontSize="small" />}
          {isLimitedRun && (
            <img src="/images/limited_run_games.png" width={22} />
          )}
        </CardContent>
      </Container>
    </motion.li>
  );
};
