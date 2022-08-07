import { Grid, VStack, Text, useBreakpointValue, Center, Flex, Box } from "@chakra-ui/react";
import { Card } from "../../Card";

export function Citys() {

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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid>
        ) : (
          <Flex
            flexDir="column"
            w="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Flex>
        )
      }
    </VStack>
  )
}