import { Box, Text } from "@chakra-ui/react";
import React from "react";

function NotFound() {
  return (
    <>
      <Box
        w="80%"
        h="90vh"
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        flexDirection="column"
        color="white"
      >
        <Text fontSize="5rem" margin="0px">
          404:
        </Text>
        <Text fontSize="2rem" margin="0px">
          Page Not Found
        </Text>
      </Box>
    </>
  );
}

export default NotFound;
