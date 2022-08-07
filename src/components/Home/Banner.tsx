import { Box, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  
  return (
    <Flex
      w="100%"
      h={ isWideVersion ? "335px" : "263px"}
      backgroundImage="url('/Background.png')"
      backgroundRepeat="no-repeat"
      backgroundSize='cover'
      justifyContent={ isWideVersion ? "space-between" : "start"}
      align="center"
      px={ isWideVersion ? 140 : 4 }
      mb={ isWideVersion ? 20 : 9  }
    >
      <Box>
        <Heading color="light.text" fontSize={36} fontWeight="medium">
          5 Continentes,
        </Heading>
        <Heading color="light.text" fontSize={36} fontWeight="medium" mb="5">
          infinitas possibilidades.
        </Heading>

        <Text color="light.info" fontSize={20} fontWeight="regular">
         Chegou a hora de tirar do papel a viagem que você
        </Text>

        <Text color="light.info" fontSize={20} fontWeight="regular">
          sempre sonhou.
        </Text>
      </Box>
      {
        isWideVersion && <Image mt="76px" src="/Airplane.svg" />
      }
      
    </Flex>
  )
}