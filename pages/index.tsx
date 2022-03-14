import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import {
  Heading,
  Text,
  Container,
  Flex,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

import EndNavigation from "components/EndNavigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          ULOSINO Matches &mdash; Visit ULOSINO for the supported version
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
            <Button leftIcon={<HiArrowNarrowLeft />} mt={8} isDisabled>
              Use Classic Version
            </Button>
          </nav>
        </Container>
        <Container maxW="container.sm" flex={1}>
          <Stack direction="column" spacing={8}>
            <Stack direction="column" spacing={2}>
              <Heading size="md">
                ULOSINO Matches is now available on ULOSINO.
              </Heading>
              <Text>
                The classic version of ULOSINO Matches has been deprecated. Go
                to the new Matches experience at ULOSINO.com for the latest
                version.
              </Text>
            </Stack>
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
