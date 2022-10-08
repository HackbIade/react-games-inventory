import SdCardIcon from "@mui/icons-material/SdCard";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { CardMedia, Typography, CardContent } from "@mui/material";

import { Container, PlatformContainer } from "./styles";
import { GamesType } from "../../../service/games/types";

export const GameCard = ({
  name,
  cover,
  platform,
  digitalVersion,
}: GamesType) => {
  const getPlatformImage = () => {
    switch (platform) {
      case "Nintendo Switch":
        return { src: "/platforms/nintendo_switch.webp", width: 30 };
      case "PlayStation 4":
        return { src: "/platforms/playstation_4.png", width: 60 };
      case "PlayStation 5":
        return { src: "/platforms/playstation_5.png", width: 60 };
      case "Xbox":
      case "Xbox One":
        return { src: "/platforms/xbox_one.png", width: 60 };
      case "Xbox 360":
        return { src: "/platforms/xbox_360.png", width: 60 };
      case "Xbox Series":
      case "Xbox Series X":
      case "Xbox Series S":
        return { src: "/platforms/xbox_series.png", width: 40 };
    }
  };
  return (
    <Container variant="outlined">
      <PlatformContainer>
        <img {...getPlatformImage()} alt={platform} />
      </PlatformContainer>
      <CardMedia
        height="250"
        component="img"
        alt={`${name}-cover`}
        image={cover || "/images/no-found.png"}
      />
      <CardContent>
        <Typography gutterBottom variant="body1">
          {name || "Pending..."}
        </Typography>

        {digitalVersion ? (
          <QrCode2Icon color="primary" fontSize="small" />
        ) : (
          <SdCardIcon color="primary" fontSize="small" />
        )}
      </CardContent>
    </Container>
  );
};
