import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import NextLink from "next/link";

function FooterLinks({ href, children }) {
  return (
    <NextLink href={href} passHref>
      <Link
        _hover={{
          color: useColorModeValue("pink.500", "white"),
        }}
        color={useColorModeValue("gray.900", "gray.200")}
      >
        {children}
      </Link>
    </NextLink>
  );
}

export default function SmallWithNavigation() {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      borderTop={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <FooterLinks href="/">{t("home")}</FooterLinks>
          <FooterLinks href="#about">{t("about")}</FooterLinks>
          <FooterLinks href="#articles">{t("articles")}</FooterLinks>
          <FooterLinks href="#projects">{t("projects")}</FooterLinks>
          <FooterLinks href="#contact">{t("contact")}</FooterLinks>
        </Stack>
        <Text color={useColorModeValue("gray.600", "gray.200")}>
          © {year} {t("rights")}
        </Text>
      </Container>
    </Box>
  );
}
