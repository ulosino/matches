import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import {
  Heading,
  Text,
  Button,
  Box,
  Stack,
  Flex,
  Spacer,
  Container,
  useBoolean,
  useColorModeValue,
} from "@chakra-ui/react";

import dynamic from "next/dynamic";
import Loading from "components/Loading";
const EndNavigation = dynamic(() => import("components/EndNavigation"), {
  loading: () => <Loading />,
});
const ULOSINOLink = dynamic(() => import("components/ULOSINOLink"), {
  loading: () => <Loading />,
});

import { useStyleConfig } from "@chakra-ui/react";
function Card(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default function Home() {
  // Quiz preferences
  const [linux, setLinux] = useBoolean();
  const [gui, setGui] = useBoolean();
  const [windows, setWindows] = useBoolean();
  const [managed, setManaged] = useBoolean();

  return (
    <>
      <Head>
        <title>
          ULOSINO Matches &mdash; Find your next open source OS by taking a
          quick quiz
        </title>
      </Head>

      <Flex
        display="flex"
        minH="100vh"
        direction="column"
        bg={useColorModeValue("gray.50", "inherit")}
      >
        <Container maxWidth="container.lg" mb={12}>
          <nav>
            <Flex>
              <Heading size="md" mt={8}>
                ULOSINO Matches
              </Heading>
              <Spacer />
              <ULOSINOLink />
            </Flex>
          </nav>
        </Container>
        <Container maxW="container.lg" flex={1}>
          <Stack direction="column" spacing={10}>
            {/* Begin the quiz */}
            <Stack direction="column" spacing={8}>
              <Stack direction="column" spacing={4}>
                <Text textStyle="secondary" as="h6">
                  Set your Primary Preferences
                </Text>
                {/* Architecture */}
                <Flex>
                  <Stack direction="column">
                    <Text>
                      {linux
                        ? "I want something based on BSD"
                        : "I want something with the Linux kernel"}
                    </Text>
                    <Stack direction="row" spacing={2}>
                      <Text fontSize="xs">Switch:</Text>
                      <Text fontSize="xs">
                        {linux
                          ? "I want something with the Linux kernel"
                          : "I want something based on BSD"}
                      </Text>
                    </Stack>
                  </Stack>
                  <Spacer />
                  <Button size="sm" onClick={setLinux.toggle}>
                    Switch
                  </Button>
                </Flex>
                {/* User interface method */}
                <Flex>
                  <Stack direction="column">
                    <Text>
                      {gui
                        ? "I want a text or terminal interface"
                        : "I want a graphical interface"}
                    </Text>
                    <Stack direction="row" spacing={2}>
                      <Text fontSize="xs">Switch:</Text>
                      <Text fontSize="xs">
                        {gui
                          ? "I want a graphical interface"
                          : "I want a text or terminal interface"}
                      </Text>
                    </Stack>
                  </Stack>
                  <Spacer />
                  <Button size="sm" onClick={setGui.toggle}>
                    Switch
                  </Button>
                </Flex>
              </Stack>
              <Stack direction="column" spacing={4}>
                <Text textStyle="secondary" as="h6">
                  Currently {linux ? "not Linux" : "Linux"} and with a{" "}
                  {gui ? "CLI" : "GUI"}
                </Text>
                {linux ? (
                  <Box>
                    {gui ? <Card>FreeBSD</Card> : <Card>GhostBSD</Card>}
                  </Box>
                ) : (
                  <Box>
                    {gui ? (
                      <Card>Alpine, Arch</Card>
                    ) : (
                      <Stack direction="column" spacing={4}>
                        <Flex>
                          <Stack direction="column">
                            <Text>
                              {windows
                                ? "I want a dock and a top panel"
                                : "I want an app menu and a bottom panel"}
                            </Text>
                            <Stack direction="row" spacing={2}>
                              <Text fontSize="xs">Switch:</Text>
                              <Text fontSize="xs">
                                {windows
                                  ? "I want an app menu and a bottom panel"
                                  : "I want a dock and a top panel"}
                              </Text>
                            </Stack>
                          </Stack>
                          <Spacer />
                          <Button size="sm" onClick={setWindows.toggle}>
                            Switch
                          </Button>
                        </Flex>
                        <Box>
                          {windows ? (
                            <Card>Pop!_OS, elementary OS</Card>
                          ) : (
                            <Stack direction="column" spacing={4}>
                              <Flex>
                                <Stack direction="column">
                                  <Text>
                                    {managed
                                      ? "I want something I can manage myself"
                                      : "I want something that works in the background"}
                                  </Text>
                                  <Stack direction="row" spacing={2}>
                                    <Text fontSize="xs">Switch:</Text>
                                    <Text fontSize="xs">
                                      {managed
                                        ? "I want something that works in the background"
                                        : "I want something I can manage myself"}
                                    </Text>
                                  </Stack>
                                </Stack>
                                <Spacer />
                                <Button size="sm" onClick={setManaged.toggle}>
                                  Switch
                                </Button>
                              </Flex>
                              <Box>
                                {managed ? (
                                  <Card>Manjaro</Card>
                                ) : (
                                  <Card>Linux Mint</Card>
                                )}
                              </Box>
                            </Stack>
                          )}
                        </Box>
                      </Stack>
                    )}
                  </Box>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Container>
        <Container maxW="container.lg">
          <EndNavigation />
        </Container>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
