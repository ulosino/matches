import Link from "next/link";
import { Heading, Text, Box, SimpleGrid, Button } from "@chakra-ui/react";
import { HiArrowNarrowRight } from "react-icons/hi";

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

export default function FreeBSDCard() {
  return (
    <Card>
      <SimpleGrid minChildWidth="240px" spacing={4}>
        <Box>
          <Heading size="md">FreeBSD</Heading>
          <Text fontSize="sm">"All-field OS with an innovative stance"</Text>
          <Text fontSize="xs" display={{ base: "none", sm: "flex" }}>
            Available for the x86, arm, and ia64 platforms
          </Text>
        </Box>
        <Link href="https://www.ulosino.com/browse/freebsd" passHref>
          <Button leftIcon={<HiArrowNarrowRight />}>
            Learn More on ULOSINO
          </Button>
        </Link>
      </SimpleGrid>
    </Card>
  );
}
