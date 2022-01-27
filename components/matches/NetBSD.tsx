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

export default function NetBSDCard() {
  return (
    <Card>
      <SimpleGrid minChildWidth="240px" spacing={4}>
        <Box>
          <Heading size="md">NetBSD</Heading>
          <Text fontSize="sm">"Widely ported BSD"</Text>
          <Text fontSize="xs" display={{ base: "none", sm: "flex" }}>
            Available for the x86, arm, ppc, mips, and sparc platforms
          </Text>
        </Box>
        <Link href="https://www.ulosino.com/browse/netbsd" passHref>
          <Button leftIcon={<HiArrowNarrowRight />}>
            Learn More on ULOSINO
          </Button>
        </Link>
      </SimpleGrid>
    </Card>
  );
}
