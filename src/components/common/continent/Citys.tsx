import { Grid, VStack, Text, useBreakpointValue, Center, Flex, Box } from "@chakra-ui/react";
import { City } from "../../../dtos/Continent";
import { Card } from "../../Card";

interface Props {
  citys: City[];
}

export function Citys({ citys }: Props) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <VStack
      px={isWideVersion ? "140px" : 4}
      align="start"
      w="100%"
      pb="35px"
    >
      <Text mb="40px" fontWeight="500" fontSize={36} >Cidades +100</Text>
      {
        isWideVersion ? (
          <Grid w="100%" templateColumns={`repeat(4, 1fr)`} >
            {
              citys.map(city => <Card key={city.name} city={city} />)
            }
          </Grid>
        ) : (
          <Flex
            flexDir="column"
            w="100%"
            alignItems="center"
            justifyContent="center"
          >
            {
              citys.map(city => <Card key={city.name} city={city} />)
            }
          </Flex>
        )
      }
    </VStack>
  )
}