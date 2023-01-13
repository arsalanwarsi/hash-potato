import { Box, Text } from "@chakra-ui/react";
import React from "react";

function NotFound() {
  return (
    <>
      <Box
        w="100%"
        h="90vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text fontSize="5rem" margin="0px">
          404:
        </Text>
        <Text fontSize="2rem">Page Not Found</Text>
      </Box>
    </>
  );
}

export default NotFound;
