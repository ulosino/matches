import { GetStaticProps } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import dynamic from "next/dynamic";

import {
  Container,
  Flex,
  Spacer,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiChevronLeft } from "react-icons/hi";

import Loading from "components/Loading";
const ULOSINOLink = dynamic(() => import("components/ULOSINOLink"), {
  loading: () => <Loading />,
});
const EndNavigation = dynamic(() => import("components/EndNavigation"), {
  loading: () => <Loading />,
});

// Pages can use the following components if needed
const Link = dynamic(() => import("next/link"));

const availableComponents = [Link];

export default function MDXHostPage({ source, metadata, componentNames }) {
  const components = {
    ...availableComponents,
    Link: componentNames.includes("Link") ? Link : null,
  };
  return (
    <>
      <Head>
        <title>ULOSINO Matches &mdash; {metadata.title}</title>
        <meta
          property="og:title"
          content="{metadata.title} on ULOSINO Matches"
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
              <Link href="/" passHref>
                <Button
                  leftIcon={<HiChevronLeft />}
                  mt={8}
                  as="a"
                  textDecoration="none"
                >
                  Back to Matches
                </Button>
              </Link>
              <Spacer />
              <ULOSINOLink />
            </Flex>
          </nav>
        </Container>
        <Container maxW="container.lg" flex={1}>
          <MDXRemote {...source} components={components} />
        </Container>
        <Container maxW="container.lg">
          <EndNavigation />
        </Container>
      </Flex>
    </>
  );
}

interface PathProps {
  params: {
    slug: string[];
  };
}

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
  const filePath = path.join(`public/content/`, `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath);

  const { content, data } = matter(source);

  const componentNames = [/<Link/.test(content) ? "Link" : null].filter(
    Boolean
  );

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      metadata: data,
      componentNames,
    },
  };
};

export const getStaticPaths = async () => {
  const pageDataPath = path.join(process.cwd(), "public/content");

  const pageFilePaths = fs
    .readdirSync(pageDataPath)
    .filter((path) => /\.mdx?$/.test(path));

  const paths = pageFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
