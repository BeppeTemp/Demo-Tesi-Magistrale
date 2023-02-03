import { useDispatch } from "react-redux";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useTheme from "@mui/material/styles/useTheme";

import { toggleTheme } from "../app/theme/themeSlice";

export default function ToggleTheme() {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "right",
      }}
    >
      {theme.palette.mode === "dark" ? (
        <Typography>Modalità scura</Typography>
      ) : (
        <Typography>Modalità chiara</Typography>
      )}
      <IconButton color="inherit" onClick={() => dispatch(toggleTheme())}>
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}
