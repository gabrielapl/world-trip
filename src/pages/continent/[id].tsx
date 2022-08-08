import { Center, Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Citys } from "../../components/common/continent/Citys";
import { ContinentBanner } from "../../components/common/continent/ContinentBanner";
import { Highlights } from "../../components/common/continent/Highlights";
import { Continent as ContinentProps } from "../../dtos/Continent";
import { api } from "../../services/api";

export default function Continent() {

  const { query } = useRouter();
  const { id } = query;

  const [continent, setContinent] = useState<ContinentProps>({} as ContinentProps);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getContinent() {
      const response = await api.get(`/continents/${id}`);

      setContinent(response.data);
      setLoading(false);
    }

    if(id != undefined) getContinent();
  }, [id]);

  return (
    <Flex
      flexDir="column"
    >
      {
        loading ? (
          <Center>
            <Spinner size='xl' />
          </Center>
        ) : (
          <>
            <ContinentBanner title={continent.name} banner={continent.banner} />

            <Highlights 
              countrys="20"
              languages="3"
              topOneHundred="10"
              description={continent.description}
            />

            <Citys citys={continent.citys} />
          </>
        )
      }


    </Flex>
  )
}
