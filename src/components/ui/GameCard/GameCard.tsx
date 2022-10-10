import SdCardIcon from "@mui/icons-material/SdCard";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { CardMedia, Typography, CardContent } from "@mui/material";

import { GamesType } from "../../../types";
import { Container, PlatformContainer } from "./styles";

export const GameCard = ({
  name,
  cover,
  platform,
  digitalVersion,
}: GamesType) => {
  const getPlatformImage = () => {
    switch (platform) {
      case "Nintendo Switch":
        return {
          width: 30,
          bg: "#DD0717",
          src: "/platforms/nintendo_switch.webp",
        };
      case "PlayStation 4":
        return { src: "/platforms/playstation_4_.png", width: 90 };
      case "PlayStation 5":
        return { src: "/platforms/playstation_5.png", width: 90 };
      case "Xbox":
      case "Xbox One":
        return { src: "/platforms/xbox_one.png", width: 80 };
      case "Xbox 360":
        return { src: "/platforms/xbox_360.png", width: 90 };
      case "Xbox Series":
      case "Xbox Series X":
      case "Xbox Series S":
        return { src: "/platforms/xbox_series.png", width: 50, bg: "#11760D" };
    }
  };
  return (
    <Container variant="outlined">
      <PlatformContainer {...getPlatformImage()} alt={platform} />
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
