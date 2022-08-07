import { Center, Heading, Text } from "@chakra-ui/react";

interface Continent {
  banner: string;
}

interface Props {
 data: Continent;
}

export function Slide({ data }: Props) {
  return (
    <Center
      backgroundImage={`url('${data.banner}')`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width='100%'
      height={450}
      flexDir="column"
      as={"a"}
      href="/continent"
    >
      <Heading color="light.text" mb="16px">Europa</Heading>
      <Text color="light.info" fontWeight="bold" >O continente mais antigo.</Text>
    </Center>
  )
}