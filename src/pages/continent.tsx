import { Flex } from "@chakra-ui/react";
import { Citys } from "../components/common/continent/Citys";
import { ContinentBanner } from "../components/common/continent/ContinentBanner";
import { Highlights } from "../components/common/continent/Highlights";
import { Header } from "../components/Header";

export default function Continent() {
  return (
    <Flex
      flexDir="column"
    >
      
      <ContinentBanner />

      <Highlights />

      <Citys />

    </Flex>
  )
}