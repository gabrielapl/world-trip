import { Flex, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { Info } from "../../Info";

export function Highlights() {

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
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      <HStack justifyContent="space-between" spacing={42} >
        <Info
          title="países"
          description="50"
        />
        <Info
          title="línguas"
          description="60"
        />
        <Info
          title="cidades +100 "
          description="27"
          tooltip
        />
      </HStack>

    </Flex>

  )
}