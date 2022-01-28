import Link from "next/link";
import {
  Heading,
  Text,
  Box,
  SimpleGrid,
  Button,
  DarkMode,
} from "@chakra-ui/react";
import { HiOutlineGlobe } from "react-icons/hi";

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

export default function GuidesLink() {
  return (
    <Card bg="secondary" color="white">
      <DarkMode>
        <SimpleGrid minChildWidth="240px" spacing={10}>
          <Box>
            <Text textStyle="secondary" as="h6">
              Need more help?
            </Text>
            <Text>
              Learn Unix, Linux, and other computing concepts for free with
              ULOSINO's learning companion. Jump into definitions or learn how
              to install your Match.
            </Text>
          </Box>
          <Link href="https://guides.ulosino.com" passHref>
            <Button leftIcon={<HiOutlineGlobe />}>Visit ULOSINO Guides</Button>
          </Link>
        </SimpleGrid>
      </DarkMode>
    </Card>
  );
}
