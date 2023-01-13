import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <Box
        w="100%"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        className="test"
      >
        <Text fontSize="7xl">Home:</Text>
        <Text fontSize="3xl">Page</Text>
      </Box>
    </>
  );
}

export default Home;
