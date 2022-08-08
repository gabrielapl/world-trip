import { Flex, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { Info } from "../../Info";

interface Props {
  countrys: string;
  languages: string;
  topOneHundred: string;
  description: string;
}

export function Highlights({ countrys, languages, topOneHundred, description }: Props) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      px={ isWideVersion ? "140px" : 4 }
      my={ isWideVersion ? "80px": 6 }
      justifyContent={ isWideVersion ? "space-between" : "center" }
      flexDir={ isWideVersion ? "row" : "column" }
    >

      <Text
        fontSize={24}
        fontWeight="400"
        textAlign="justify"
        maxW={ isWideVersion ? "50%" : "100%" }
        mb={ isWideVersion ? 0 : 4 }
      >
        {description}
      </Text>

      <HStack justifyContent="space-between" spacing={42} >
        <Info
          title="países"
          description={countrys}
        />
        <Info
          title="línguas"
          description={languages}
        />
        <Info
          title="cidades +100 "
          description={topOneHundred}
          tooltip
        />
      </HStack>

    </Flex>

  )
}