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

export default function KDENeonCard() {
  return (
    <Card>
      <SimpleGrid minChildWidth="240px" spacing={4}>
        <Box>
          <Heading size="md">Nitrux</Heading>
          <Text fontSize="sm">
            "Contemporary desktop OS, fresh take on Debian"
          </Text>
          <Text fontSize="xs" display={{ base: "none", sm: "flex" }}>
            Exclusive to the x86 platform
          </Text>
        </Box>
        <Link href="https://www.ulosino.com/browse/nitrux" passHref>
          <Button leftIcon={<HiArrowNarrowRight />}>
            Learn More on ULOSINO
          </Button>
        </Link>
      </SimpleGrid>
    </Card>
  );
}
