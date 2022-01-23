import { GetStaticProps } from "next";

import Head from "next/head";
import { useRouter } from "next/router";

import {
  Heading,
  Text,
  Icon,
  Button,
  Box,
  Stack,
  Flex,
  Spacer,
  Container,
  useBoolean,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  HiLibrary,
  HiDesktopComputer,
  HiOutlineRefresh,
  HiTemplate,
  HiUser,
} from "react-icons/hi";

import dynamic from "next/dynamic";
import Loading from "components/Loading";
const EndNavigation = dynamic(() => import("components/EndNavigation"), {
  loading: () => <Loading />,
});
const ULOSINOLink = dynamic(() => import("components/ULOSINOLink"), {
  loading: () => <Loading />,
});
const GuidesLink = dynamic(() => import("components/GuidesLink"), {
  loading: () => <Loading />,
});

// OS cards
const AlpineCard = dynamic(() => import("components/matches/Alpine"), {
  loading: () => <Loading />,
});
const ArchCard = dynamic(() => import("components/matches/Arch"), {
  loading: () => <Loading />,
});
const GentooCard = dynamic(() => import("components/matches/Gentoo"), {
  loading: () => <Loading />,
});
const FreeBSDCard = dynamic(() => import("components/matches/FreeBSD"), {
  loading: () => <Loading />,
});
const MidnightBSDCard = dynamic(
  () => import("components/matches/MidnightBSD"),
  {
    loading: () => <Loading />,
  }
);
const GhostBSDCard = dynamic(() => import("components/matches/GhostBSD"), {
  loading: () => <Loading />,
});
const ElementaryCard = dynamic(() => import("components/matches/Elementary"), {
  loading: () => <Loading />,
});
const PopOSCard = dynamic(() => import("components/matches/PopOS"), {
  loading: () => <Loading />,
});
const FedoraCard = dynamic(() => import("components/matches/Fedora"), {
  loading: () => <Loading />,
});
const ZorinCard = dynamic(() => import("components/matches/Zorin"), {
  loading: () => <Loading />,
});
const UbuntuCard = dynamic(() => import("components/matches/Ubuntu"), {
  loading: () => <Loading />,
});
const LinuxMintCard = dynamic(() => import("components/matches/LinuxMint"), {
  loading: () => <Loading />,
});
const KDENeonCard = dynamic(() => import("components/matches/KDENeon"), {
  loading: () => <Loading />,
});
const ManjaroCard = dynamic(() => import("components/matches/Manjaro"), {
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

  const switchButtonPaddingY = useBreakpointValue({ base: 4, md: 0 });

  const router = useRouter();

  // Page
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
                <Flex>
                  <Text textStyle="secondary" as="h6">
                    Find a Match
                  </Text>
                  <Spacer />
                  <Button
                    leftIcon={<HiOutlineRefresh />}
                    size="sm"
                    onClick={() => router.reload()}
                  >
                    Refresh
                  </Button>
                </Flex>
                <Flex direction={["column", "column", "row"]}>
                  <Stack direction="row" spacing={8}>
                    <Icon
                      as={HiLibrary}
                      w={12}
                      h={12}
                      aria-label="Core architecture graphic"
                    />
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
                  </Stack>
                  <Spacer />
                  <Button onClick={setLinux.toggle} my={switchButtonPaddingY}>
                    Switch
                  </Button>
                </Flex>
                <Flex direction={["column", "column", "row"]}>
                  <Stack direction="row" spacing={8}>
                    <Icon
                      as={HiDesktopComputer}
                      w={12}
                      h={12}
                      aria-label="Computer display graphic"
                    />
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
                  </Stack>
                  <Spacer />
                  <Button onClick={setGui.toggle} my={switchButtonPaddingY}>
                    Switch
                  </Button>
                </Flex>
                {linux ? (
                  <Box>
                    {gui ? (
                      <Card>
                        <Stack direction="column" spacing={4}>
                          <Text textStyle="secondary" as="h6">
                            Currently BSD with a CLI:
                          </Text>
                          <FreeBSDCard />
                        </Stack>
                      </Card>
                    ) : (
                      <Card>
                        <Stack direction="column" spacing={4}>
                          <Text textStyle="secondary" as="h6">
                            Currently BSD with a GUI:
                          </Text>
                          <GhostBSDCard />
                          <MidnightBSDCard />
                        </Stack>
                      </Card>
                    )}
                  </Box>
                ) : (
                  <Box>
                    {gui ? (
                      <Card>
                        <Stack direction="column" spacing={4}>
                          <Text textStyle="secondary" as="h6">
                            Currently Linux with a CLI:
                          </Text>
                          <AlpineCard />
                          <ArchCard />
                          <GentooCard />
                        </Stack>
                      </Card>
                    ) : (
                      <Stack direction="column" spacing={4}>
                        <Flex direction={["column", "column", "row"]}>
                          <Stack direction="row" spacing={8}>
                            <Icon
                              as={HiTemplate}
                              w={12}
                              h={12}
                              aria-label="Layout graphic"
                            />
                            <Stack direction="row" spacing={4}>
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
                            </Stack>
                          </Stack>
                          <Spacer />
                          <Button
                            onClick={setWindows.toggle}
                            my={switchButtonPaddingY}
                          >
                            Switch
                          </Button>
                        </Flex>
                        <Box>
                          {windows ? (
                            <Card>
                              <Stack direction="column" spacing={4}>
                                <Text textStyle="secondary" as="h6">
                                  Currently Linux with a macOS-style GUI:
                                </Text>
                                <ElementaryCard />
                                <PopOSCard />
                              </Stack>
                            </Card>
                          ) : (
                            <Stack direction="column" spacing={4}>
                              <Flex direction={["column", "column", "row"]}>
                                <Stack direction="row" spacing={8}>
                                  <Icon
                                    as={HiUser}
                                    w={12}
                                    h={12}
                                    aria-label="Layout graphic"
                                  />
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
                                </Stack>
                                <Spacer />
                                <Button
                                  onClick={setManaged.toggle}
                                  my={switchButtonPaddingY}
                                >
                                  Switch
                                </Button>
                              </Flex>
                              <Box>
                                {managed ? (
                                  <Card>
                                    <Stack direction="column" spacing={4}>
                                      <Text textStyle="secondary" as="h6">
                                        Currently unmanaged Linux with a
                                        Windows-style GUI:
                                      </Text>
                                      <ManjaroCard />
                                      <KDENeonCard />
                                    </Stack>
                                  </Card>
                                ) : (
                                  <Card>
                                    <Stack direction="column" spacing={4}>
                                      <Text textStyle="secondary" as="h6">
                                        Currently managed Linux with a
                                        Windows-style GUI:
                                      </Text>
                                      <LinuxMintCard />
                                      <UbuntuCard />
                                      <ZorinCard />
                                      <FedoraCard />
                                    </Stack>
                                  </Card>
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
            <GuidesLink />
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
