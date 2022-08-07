import { Box, Flex, VStack, Text, Divider, Center, useBreakpointValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Carousel } from '../components/Carousel'
import { Banner } from '../components/Home/Banner';
import { TravelType } from '../components/Home/TravelType';


const Home: NextPage = () => {

  const travelTypes = [
    {
      icon: "cocktail",
      title: "vida noturna"
    },
    {
      icon: "surf",
      title: "praia"
    },
    {
      icon: "building",
      title: "moderno"
    },
    {
      icon: "museum",
      title: "clássico"
    },
    {
      icon: "earth",
      title: "e mais..."
    }
  ];

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      flexDir="column"
    >
      <Banner />
      
      <Box
        w="100%"
        px={isWideVersion ? 25 : 0}
      >
        <VStack>
          <Flex
            w="100%"
            justifyContent={ isWideVersion ? "space-between" : "center" }
            flexWrap="wrap"
            px={ isWideVersion ? 140 : 50}
            mb={isWideVersion ? 20 : 9}
          >
            {
              travelTypes.map((travelType, index) => 
                <TravelType 
                  key={travelType.title} 
                  title={travelType.title} 
                  icon={travelType.icon} 
                />
              )
            }
          </Flex>

          <Center w="90px" >
            <Divider borderColor="dark.text" borderWidth={2} />
          </Center>
          
          <Box py={isWideVersion ? "52px" : 6 }>
            <Text fontSize={36} fontWeight="500" textAlign="center"   >
              Vamos nessa?
            </Text>
            
            <Text fontSize={36} fontWeight="500" textAlign="center">
              Então escolha seu continente
            </Text>
          </Box>

        </VStack>

        <Box w="100%" pb="40px" >
          <Carousel />
        </Box>
        
      </Box>
    </Flex>
  )
}

export default Home
