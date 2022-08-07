import { Flex, Image, Text } from "@chakra-ui/react";

export function Card() {
  return (
    <Flex
      flexDir="column"
      w="256px"
      borderWidth={1}
      borderColor="rgba(255,186,8,0.5)"
      mb="48px"
      borderRadius={4}
    >
      <Image src="/london.png" />
      <Flex
        px="24px"
        justifyContent="space-between"
        alignItems="center"
        mt={18}
        pb={25}
      >
        <div>
          <Text fontWeight="600" fontSize={20} >Londres</Text>
          <Text color="dark.info" fontWeight="500" fontSize={16} >Reino Unido</Text>
        </div>
        <Image src="/reino.png" width={30} h={30} />
      </Flex>
    </Flex>
  )
}