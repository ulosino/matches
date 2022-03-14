import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Heading,
  Text,
  Container,
  Flex,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  HiOutlineRefresh,
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
} from "react-icons/hi";

import EndNavigation from "components/EndNavigation";

export default function Custom500() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>ULOSINO Matches &mdash; 500</title>
      </Head>

      <Flex
        display="flex"
        minH="100vh"
        direction="column"
        bg={useColorModeValue("gray.50", "inherit")}
      >
        <Container maxWidth="container.lg" mb={12}>
          <nav>
            <Button leftIcon={<HiArrowNarrowLeft />} mt={8} isDisabled>
              Use Classic Version
            </Button>
          </nav>
        </Container>
        <Container maxW="container.sm" flex={1}>
          <Stack direction="column" spacing={8}>
            <Stack direction="column" spacing={2}>
              <Heading size="md">Something went wrong.</Heading>
              <Text>
                It appears that the server is experiencing problems. No further
                details are available.
              </Text>
              <Text>
                Go to the new Matches experience at ULOSINO.com for the latest
                version.
              </Text>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Button
                leftIcon={<HiOutlineRefresh />}
                size="lg"
                onClick={() => router.reload()}
                isDisabled
              >
                Try Again
              </Button>
              <Link href="https://www.ulosino.com/matches" passHref>
                <Button
                  leftIcon={<HiArrowNarrowRight />}
                  size="lg"
                  as="a"
                  textDecoration="none"
                >
                  Continue to Matches
                </Button>
              </Link>
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
