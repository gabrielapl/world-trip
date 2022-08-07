import { Text, useBreakpointValue, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

interface Props {
  icon: string;
  title: string;
}

export function TravelType({ icon, title }: Props) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      gap={ isWideVersion ? "8px" : "6px"}
      flexDir={isWideVersion ? "column" : "row"}
      align="center"
      justifyContent="center"
      mr={ isWideVersion ? 0 : "40px" }
    >
      {
        isWideVersion ?
          <Image src={`/${icon}.svg`} width={85} height={85} /> :
          <Box
            bg="highlight.yellow"
            w={2}
            h={2}
            borderRadius="50%"
          >

          </Box>
      }

      <Text
        color="dark.text"
        fontSize="24px"
        textAlign="center"
        fontWeight="semibold"
      >
        {title}
      </Text>
    </Flex>
  )
}