import { Box, Button, Flex, Heading, Stack, Text, useColorMode, VStack } from "@chakra-ui/react";
import React from "react";

import { useViewController } from "../ViewController";
import { DownloadIcon } from "./icons/download";
import { UploadIcon } from "./icons/upload";

export const Hero: React.FC = () => {
  const [, setView] = useViewController();

  const { colorMode } = useColorMode();

  return (
    <Flex align={"center"} justify={"center"} flex={1}>
      <Box p={8}>
        <VStack spacing={4}>
          <Heading as={"h1"} fontSize={"6xl"} color={"#00b3d7"} fontWeight={"bold"} lineHeight={"none"}>
            ROCKET SHARE
          </Heading>
          <Heading as={"h2"} fontSize={"3xl"} fontWeight={"normal"}>
            Share files with{" "}
            <Text as={"span"} color={"green.500"} fontWeight={"medium"}>
              anyone,{" "}
            </Text>
            <Text as={"span"} color={"yellow.500"} fontWeight={"medium"}>
              anywhere{" "}
            </Text>
            <Text as={"span"} color={"purple.500"} fontWeight={"medium"}>
              with rocket speeds.
            </Text>
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} pt={6} w={"full"} justify={"center"}>
            <Button
              size={"lg"}
              leftIcon={
                <Box w={5} mr={2}>
                  <UploadIcon sx={{ strokeWidth: 2 }} />
                </Box>
              }
              colorScheme={{ light: "blueGray", dark: "gray" }[colorMode]}
              shadow={"md"}
              onClick={() => setView({ slug: "upload" })}
            >
              Upload file
            </Button>
            <Button
              size={"lg"}
              leftIcon={
                <Box w={5} mr={2}>
                  <DownloadIcon sx={{ strokeWidth: 2 }} />
                </Box>
              }
              colorScheme={{ light: "blueGray", dark: "gray" }[colorMode]}
              shadow={"md"}
              onClick={() => setView({ slug: "download" })}
            >
              Download file
            </Button>
          </Stack>
        </VStack>
      </Box>
    </Flex>
  );
};
