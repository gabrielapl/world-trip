import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";

export function ContinentBanner() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  
  return (
    <Flex
        w="100%"
        h={isWideVersion ? "500px" : "263px"}
        backgroundImage={`url('/EXdXLrZXS9Q.png')`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        alignItems={ isWideVersion ? "flex-end" : "center"}
        justifyContent={ isWideVersion ? "start" : "center"}
      >
        <Heading 
          color="light.text" 
          fontWeight="600" 
          fontSize={40}
          mb={ isWideVersion ? 59 : 0 }
          ml={ isWideVersion ? 140 : 0 }
        >
          Europa
        </Heading>
      </Flex>
  )
}