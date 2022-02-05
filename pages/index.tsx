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
  const [legacyHardware, setLegacyHardware] = useBoolean();
  const [managed, setManaged] = useBoolean();
  const [windows, setWindows] = useBoolean();

  const switchButtonSize = useBreakpointValue({ base: "md", md: "sm" });
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
            {/* Preferences switching area */}
            <Stack direction="column" spacing={4}>
              <Flex>
                <Text textStyle="secondary" as="h6">
                  Find your Match
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
              {/* Linux/BSD */}
              <Flex direction={["column", "column", "row"]}>
                <Stack direction="row" spacing={4}>
                  <Icon
                    as={HiLibrary}
                    w={8}
                    h={8}
                    aria-label="Library graphic"
                  />
                  <Text pt={1}>
                    Using {linux ? "BSD descendants" : "the Linux kernel"}
                  </Text>
                </Stack>
                <Spacer />
                <Button
                  onClick={setLinux.toggle}
                  size={switchButtonSize}
                  mt={switchButtonPaddingY}
                >
                  Switch to {linux ? "Linux" : "BSD"}
                </Button>
              </Flex>
              {/* GUI/CLI */}
              <Flex direction={["column", "column", "row"]}>
                <Stack direction="row" spacing={4}>
                  <Icon
                    as={HiDesktopComputer}
                    w={8}
                    h={8}
                    aria-label="Display interface graphic"
                  />
                  <Text pt={1}>
                    Using {gui ? "a CLI" : "graphical interfaces"}
                  </Text>
                </Stack>
                <Spacer />
                <Button
                  onClick={setGui.toggle}
                  size={switchButtonSize}
                  mt={switchButtonPaddingY}
                >
                  Switch to a {gui ? "GUI" : "CLI"}
                </Button>
              </Flex>
              {linux ? (
                ""
              ) : (
                <>
                  {gui ? (
                    ""
                  ) : (
                    <>
                      {/* Modern/low-end hardware */}
                      <Flex direction={["column", "column", "row"]}>
                        <Stack direction="row" spacing={4}>
                          <Icon
                            as={HiChip}
                            w={8}
                            h={8}
                            aria-label="CPU graphic"
                          />
                          <Text pt={1}>
                            Using {legacyHardware ? "older" : "modern"} hardware
                          </Text>
                        </Stack>
                        <Spacer />
                        <Button
                          onClick={setLegacyHardware.toggle}
                          size={switchButtonSize}
                          mt={switchButtonPaddingY}
                        >
                          Switch to {legacyHardware ? "modern" : "older"}{" "}
                          hardware
                        </Button>
                      </Flex>
                    </>
                  )}
                  {legacyHardware ? (
                    ""
                  ) : (
                    <>
                      {/* Managed/advanced systems */}
                      <Flex direction={["column", "column", "row"]}>
                        <Stack direction="row" spacing={4}>
                          <Icon
                            as={HiAcademicCap}
                            w={8}
                            h={8}
                            aria-label="Academic cap graphic"
                          />
                          <Text pt={1}>
                            Using {managed ? "advanced" : "managed"} systems
                          </Text>
                        </Stack>
                        <Spacer />
                        <Button
                          onClick={setManaged.toggle}
                          size={switchButtonSize}
                          mt={switchButtonPaddingY}
                        >
                          Switch to {managed ? "managed" : "advanced"} systems
                        </Button>
                      </Flex>
                    </>
                  )}
                  {gui ? (
                    ""
                  ) : (
                    <>
                      {managed ? (
                        ""
                      ) : (
                        <>
                          {legacyHardware ? (
                            ""
                          ) : (
                            <>
                              {/* Windows/macOS style interface */}
                              <Flex direction={["column", "column", "row"]}>
                                <Stack direction="row" spacing={4}>
                                  <Icon
                                    as={HiTemplate}
                                    w={8}
                                    h={8}
                                    aria-label="Layout graphic"
                                  />
                                  <Text pt={1}>
                                    Using {windows ? "macOS" : "Windows"} style
                                    interfaces
                                  </Text>
                                </Stack>
                                <Spacer />
                                <Button
                                  onClick={setWindows.toggle}
                                  size={switchButtonSize}
                                  mt={switchButtonPaddingY}
                                  id="testing-switchButton"
                                >
                                  Switch to {windows ? "Windows" : "macOS"}{" "}
                                  style interfaces
                                </Button>
                              </Flex>
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </Stack>

            {/* Result console */}
            <Card>
              <Stack direction="column" spacing={2}>
                <Text textStyle="secondary" as="h6">
                  Found Matches
                </Text>
                {linux ? (
                  <>
                    {gui ? (
                      // BSD CLI
                      <Stack direction="column" spacing={2}>
                        <FreeBSDCard />
                        <NetBSDCard />
                      </Stack>
                    ) : (
                      // BSD GUI
                      <Stack direction="column" spacing={2}>
                        <GhostBSDCard />
                        <MidnightBSDCard />
                        <FreeBSDCard />
                      </Stack>
                    )}
                  </>
                ) : (
                  <>
                    {gui ? (
                      <>
                        {managed ? (
                          // Advanced Linux CLI
                          <Stack direction="column" spacing={2}>
                            <GentooCard />
                            <GardenCard />
                          </Stack>
                        ) : (
                          // Managed Linux CLI
                          <Stack direction="column" spacing={2}>
                            <AlpineCard />
                            <ArchCard />
                          </Stack>
                        )}
                      </>
                    ) : (
                      <>
                        {legacyHardware ? (
                          // Linux for older hardware
                          <Stack direction="column" spacing={2}>
                            <AntiXCard />
                            <MXLinuxCard />
                            <Q4OSCard />
                            <UbuntuMateCard />
                          </Stack>
                        ) : (
                          <>
                            {managed ? (
                              // Advanced Linux
                              <Stack direction="column" spacing={2}>
                                <ManjaroCard />
                                <KDENeonCard />
                              </Stack>
                            ) : (
                              <>
                                {windows ? (
                                  // Managed macOS-style Linux
                                  <Stack direction="column" spacing={2}>
                                    <ElementaryCard />
                                    <PopOSCard />
                                    <NitruxCard />
                                    <UbuntuCard />
                                  </Stack>
                                ) : (
                                  // Managed Windows-style Linux
                                  <Stack direction="column" spacing={2}>
                                    <LinuxMintCard />
                                    <ZorinCard />
                                    <UbuntuCard />
                                    <SolusCard />
                                  </Stack>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </Stack>
            </Card>

            {/* Link to ULOSINO Guides */}
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
