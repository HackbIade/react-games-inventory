import SportsEsports from "@mui/icons-material/SportsEsports";
import { CardMedia, Typography, CardContent } from "@mui/material";

import { GameCardProps } from "./types";
import { Container, PlatformContainer } from "./styles";

export const GameCard = ({
  name,
  cover,
  platform,
  description,
}: GameCardProps) => {
  const getColor = () => {
    switch (platform) {
      case "Nintendo Switch":
        return "error";
      case "Play Station 4":
      case "Play Station 5":
        return "info";
      case "Xbox":
      case "Xbox One":
      case "Xbox Series":
      default:
        return "success";
    }
  };
  return (
    <Container variant="outlined">
      <PlatformContainer>
        <SportsEsports fontSize="small" color={getColor()} />
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
        <Typography color="GrayText" gutterBottom variant="body2">
          {platform || "Pending"}
        </Typography>
        {!!description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
    </Container>
  );
};
