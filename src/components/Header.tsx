import { Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Image from "next/image";

export function Header() {

  const { asPath } = useRouter();

  const isNeedBackButton = asPath !== "/";

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      align="center"
      justifyContent="center"
      py={isWideVersion ? "27px" : "15px"}
    >
      { isNeedBackButton &&
        <IconButton
          aria-label="back button"
          icon={<ChevronLeftIcon />}
          as="a"
          href="/"
          position="absolute"
          left={ isWideVersion ? "140" : 4 }
        />}

        <Image src="/Logo.svg" width={186.7} height={45.92} />
    </Flex>
  )
}