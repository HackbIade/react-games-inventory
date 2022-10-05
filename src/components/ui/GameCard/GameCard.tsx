import SportsEsports from "@mui/icons-material/SportsEsports";
import { Grid, CardMedia, Typography, CardContent } from "@mui/material";

import { Container } from "./styles";
import { GameCardProps } from "./types";

export const GameCard = ({
  name,
  cover,
  platform,
  description,
}: GameCardProps) => {
  return (
    <Container>
      <CardMedia
        height="250"
        component="img"
        alt={`${name}-cover`}
        image={cover || "/no-found.png"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name || "Pending..."}
        </Typography>
        <Grid container>
          <SportsEsports color="primary" sx={{ mr: 1 }} />
          <Typography color="primary" gutterBottom variant="body1">
            {platform || "Pending"}
          </Typography>
        </Grid>
        {!!description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
    </Container>
  );
};
