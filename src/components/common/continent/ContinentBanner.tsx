import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";

interface Props {
  title: string;
  banner: string;
}

export function ContinentBanner({ title, banner }: Props) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  
  
  return (
    <Flex
        w="100%"
        h={isWideVersion ? "500px" : "263px"}
        backgroundImage={`url('/continents/${banner}')`}
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
          {title}
        </Heading>
      </Flex>
  )
}