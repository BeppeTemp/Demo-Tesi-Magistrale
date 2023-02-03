import { useState } from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ImageSelector from "../components/ImageSelector";
import ToggleTheme from "../components/ToogleTheme";

export default function Image() {
  const [correction, enableCorrection] = useState(false);

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={10}
        sx={{
          marginTop: 5,
          padding: 2,
        }}
        align="center"
      >
        <Typography variant="h5" component="h1" marginBottom={1} align="left">
          Sample Image
        </Typography>
        <Typography
              variant="body1"
              component="h2"
              marginY={1}
              align="left"
            >
              Classificata come positiva alla tachicardia.
            </Typography>
        <ImageSelector correction={correction} />
        {/* <Divider
          color="primary.light"
          sx={{ marginBottom: 1, borderWidth: 1, borderRadius: 10 }}
        /> */}
        {correction === true ? (
          <Box>
            <Typography
              variant="body1"
              component="h2"
              marginY={1}
              align="left"
            >
              Trascina il mouse o il dito sull'immagine per tracciare una correzione.
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="info"
              sx={{ height: 70, marginBottom: 1 }}
              onClick={() => {
                enableCorrection(false);
              }}
              fullWidth
            >
              Invia correzione
            </Button>
          </Box>
        ) : (
          <Grid container spacing={2} marginY={1}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                size="large"
                color="error"
                sx={{ height: 70 }}
                fullWidth
                onClick={() => {
                  enableCorrection(true);
                }}
              >
                effettua correzione
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                size="large"
                color="success"
                sx={{ height: 70 }}
                fullWidth
              >
                classificazione corretta
              </Button>
            </Grid>
          </Grid>
        )}
        <ToggleTheme />
      </Paper>
    </Container>
  );
}
