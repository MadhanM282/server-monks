// import { ChakraProvider, Badge, Box, Image, Button, Img } from "@chakra-ui/react";

import { Box, Button } from "@mui/material";

// import { AddIcon } from "@chakra-ui/icons";
export const EventCard = ({ event }) => {
  const { club_title, description, type, image, subcription_user_id } = event;
  return (
      <Box>
        <img src={image} alt="" />
      </Box>
  );
};
