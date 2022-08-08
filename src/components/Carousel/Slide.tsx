import { Center, Heading, Text } from "@chakra-ui/react";
import { Continent } from "../../dtos/Continent";

interface Props {
 data: Continent;
}

export function Slide({ data }: Props) {
  return (
    <Center
      backgroundImage={`url('/continents/${data.banner}')`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width='100%'
      height={450}
      flexDir="column"
      as={"a"}
      href={`/continent/${data.id}`}
    >
      <Heading color="light.text" mb="16px">{data.name}</Heading>
    </Center>
  )
}