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

export default function UbuntuMateCard() {
  return (
    <Card>
      <SimpleGrid minChildWidth="240px" spacing={4}>
        <Box>
          <Heading size="md">Ubuntu MATE</Heading>
          <Text fontSize="sm">"Ubuntu with the traditional experience"</Text>
          <Text fontSize="xs" display={{ base: "none", sm: "flex" }}>
            Available for the x86 and arm platforms
          </Text>
        </Box>
        <Link href="https://www.ulosino.com/browse/ubuntu-mate" passHref>
          <Button leftIcon={<HiArrowNarrowRight />}>
            Learn More on ULOSINO
          </Button>
        </Link>
      </SimpleGrid>
    </Card>
  );
}
