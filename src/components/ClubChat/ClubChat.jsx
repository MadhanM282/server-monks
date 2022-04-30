import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const ClubChat = () => {
  return (
    <>
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autocomplete="off" />
        <button>Send</button>
      </form>
    </>
  );
};
