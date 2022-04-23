import { ChakraProvider, Badge, Box, Image, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
export const EventCard = ({ event }) => {
  const { club_title, description, type, image, subcription_user_id } = event;
  return (
    <ChakraProvider>
      <div style={{ backgroundColor: "#ffffff",width:"20%", borderRadius: "7px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={image} alt={club_title} />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {type}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                Members &bull; {subcription_user_id.length}
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {club_title}
            </Box>

            <Box>
              {description}
              {/* <Box as="span" color="gray.600" fontSize="sm">
              
            </Box> */}
            </Box>

            {/* <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box> */}
            <Box style={{ marginTop: "10px" }}>
              <Button
                borderColor="teal"
                // onClick={}
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
              >
                Join Now
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </ChakraProvider>
  );
};
