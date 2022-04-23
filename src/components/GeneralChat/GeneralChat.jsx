import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const GeneralChat = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid white",
        p: 2,
      }}
    >
      <TextField
        sx={{ bgcolor: "white", width: "60%", mr: "20px" }}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  );
};