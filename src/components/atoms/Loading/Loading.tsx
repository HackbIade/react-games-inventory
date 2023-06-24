import { Box } from "@mui/system"
import { Container } from "./styles"
import { LinearProgress, Typography } from "@mui/material"

export const Loading = () => {
  return (
    <Container>
      <img src="/images/kojiforge.gif" />
      <Typography variant="h5" color="white">Loading</Typography>
      <Box sx={{ width: '240px' }} >
        <LinearProgress color="primary" />
      </Box>
    </Container>
  )
}