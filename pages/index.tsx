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
  HiOutlineRefresh,
  HiLibrary,
  HiDesktopComputer,
  HiServer,
  HiChip,
  HiTemplate,
  HiAcademicCap,
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
const GardenCard = dynamic(() => import("components/matches/Garden"), {
  loading: () => <Loading />,
});
const FreeBSDCard = dynamic(() => import("components/matches/FreeBSD"), {
  loading: () => <Loading />,
});
const NetBSDCard = dynamic(() => import("components/matches/NetBSD"), {
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
const AntiXCard = dynamic(() => import("components/matches/AntiX"), {
  loading: () => <Loading />,
});
const MXLinuxCard = dynamic(() => import("components/matches/MXLinux"), {
  loading: () => <Loading />,
});
const Q4OSCard = dynamic(() => import("components/matches/Q4OS"), {
  loading: () => <Loading />,
});
const UbuntuMateCard = dynamic(() => import("components/matches/UbuntuMate"), {
  loading: () => <Loading />,
});
const ElementaryCard = dynamic(() => import("components/matches/Elementary"), {
  loading: () => <Loading />,
});
const PopOSCard = dynamic(() => import("components/matches/PopOS"), {
  loading: () => <Loading />,
});
const NitruxCard = dynamic(() => import("components/matches/Nitrux"), {
  loading: () => <Loading />,
});
const SolusCard = dynamic(() => import("components/matches/Solus"), {
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
  const [server, setServer] = useBoolean();
  const [legacyHardware, setLegacyHardware] = useBoolean();
  const [windows, setWindows] = useBoolean();
  const [managed, setManaged] = useBoolean();

  const switchButtonPaddingY = useBreakpointValue({ base: 4, md: 0 });

  const router = useRouter();

  // Begin page
  return (
    <>
      <Head>
        <title>
          ULOSINO Matches &mdash; Find your next open source OS by taking a
          quick quiz
        </title>
        <meta
          property="og:title"
          content="ULOSINO Matches &mdash; Find your next open source OS"
        />
        <meta
          name="description"
          content="Find a Linux-based or BSD-based open source operating system based on your preferences with ULOSINO Matches. Dive deep into different Matches thanks to the power of ULOSINO."
        />
        <meta
          property="og:description"
          content="Find a Linux-based or BSD-based open source operating system based on your preferences."
        />
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
                  <>
                    {gui ? (
                      <Card>
                        <Stack direction="column" spacing={4}>
                          <Text textStyle="secondary" as="h6">
                            Currently BSD with a CLI:
                          </Text>
                          <FreeBSDCard />
                          <NetBSDCard />
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
                  </>
                ) : (
                  <>
                    {gui ? (
                      <Stack direction="column" spacing={4}>
                        <Flex direction={["column", "column", "row"]}>
                          <Stack direction="row" spacing={8}>
                            <Icon
                              as={HiServer}
                              w={12}
                              h={12}
                              aria-label="Layout graphic"
                            />
                            <Stack direction="column">
                              <Text>
                                {server
                                  ? "I'm running a server or IoT deployment"
                                  : "I want something simplistic"}
                              </Text>
                              <Stack direction="row" spacing={2}>
                                <Text fontSize="xs">Switch:</Text>
                                <Text fontSize="xs">
                                  {server
                                    ? "I want something simplistic"
                                    : "I'm running a server or IoT deployment"}
                                </Text>
                              </Stack>
                            </Stack>
                          </Stack>
                          <Spacer />
                          <Button
                            onClick={setServer.toggle}
                            my={switchButtonPaddingY}
                          >
                            Switch
                          </Button>
                        </Flex>
                        {server ? (
                          <Card>
                            <Stack direction="column" spacing={4}>
                              <Text textStyle="secondary" as="h6">
                                Currently Server Linux with a CLI:
                              </Text>
                              <GentooCard />
                              <GardenCard />
                            </Stack>
                          </Card>
                        ) : (
                          <Card>
                            <Stack direction="column" spacing={4}>
                              <Text textStyle="secondary" as="h6">
                                Currently Home Linux with a CLI:
                              </Text>
                              <AlpineCard />
                              <ArchCard />
                            </Stack>
                          </Card>
                        )}
                      </Stack>
                    ) : (
                      <>
                        <Stack direction="column" spacing={4}>
                          <Flex direction={["column", "column", "row"]}>
                            <Stack direction="row" spacing={8}>
                              <Icon
                                as={HiChip}
                                w={12}
                                h={12}
                                aria-label="Layout graphic"
                              />
                              <Stack direction="row" spacing={4}>
                                <Stack direction="column">
                                  <Text>
                                    {legacyHardware
                                      ? "I'm using low-end hardware"
                                      : "I have got modern hardware"}
                                  </Text>
                                  <Stack direction="row" spacing={2}>
                                    <Text fontSize="xs">Switch:</Text>
                                    <Text fontSize="xs">
                                      {legacyHardware
                                        ? "I have got modern hardware"
                                        : "I'm using low-end hardware"}
                                    </Text>
                                  </Stack>
                                </Stack>
                              </Stack>
                            </Stack>
                            <Spacer />
                            <Button
                              onClick={setLegacyHardware.toggle}
                              my={switchButtonPaddingY}
                              id="testing-switchButton"
                            >
                              Switch
                            </Button>
                          </Flex>
                        </Stack>
                        {legacyHardware ? (
                          <Card>
                            <Stack direction="column" spacing={4}>
                              <Text textStyle="secondary" as="h6">
                                Currently Linux for low-end or legacy hardware:
                              </Text>
                              <AntiXCard />
                              <MXLinuxCard />
                              <Q4OSCard />
                              <UbuntuMateCard />
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
                                id="testing-switchButton"
                              >
                                Switch
                              </Button>
                            </Flex>
                            <>
                              {windows ? (
                                <Card>
                                  <Stack direction="column" spacing={4}>
                                    <Text textStyle="secondary" as="h6">
                                      Currently Linux with a macOS-style GUI:
                                    </Text>
                                    <ElementaryCard />
                                    <PopOSCard />
                                    <NitruxCard />
                                  </Stack>
                                </Card>
                              ) : (
                                <Stack direction="column" spacing={4}>
                                  <Flex direction={["column", "column", "row"]}>
                                    <Stack direction="row" spacing={8}>
                                      <Icon
                                        as={HiAcademicCap}
                                        w={12}
                                        h={12}
                                        aria-label="User graphic"
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
                                  <>
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
                                          <SolusCard />
                                        </Stack>
                                      </Card>
                                    )}
                                  </>
                                </Stack>
                              )}
                            </>
                          </Stack>
                        )}
                      </>
                    )}
                  </>
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
