import { useNavigate } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/system/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import ToggleTheme from "../components/ToogleTheme";
import { Navigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

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
        <Typography variant="h3" component="h1" marginBottom={5}>
          Human in the Loop Portal
        </Typography>
        <Avatar
          alt=""
          // TODO Controlla il copyright dell'immagine
          src="https://cdn-icons-png.flaticon.com/512/194/194915.png"
          sx={{ width: 200, height: 200, marginBottom: 5 }}
        />
        <Typography
          variant="body1"
          component="h2"
          marginBottom={1}
          align="left"
        >
          Per favore inserisci la password:
        </Typography>
        <Box component="form">
          <TextField
            label="Password"
            type="password"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
          />
        </Box>
        <Button
          variant="contained"
          size="large"
          sx={{ marginBottom: 1 }}
          onClick={() => {
            navigate({
              pathname: "image",
            });
          }}
          fullWidth
        >
          Login
        </Button>
        <ToggleTheme />
      </Paper>
    </Container>
  );
}
