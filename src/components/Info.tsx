import { Flex, IconButton, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

interface Props {
  title: string;
  description: string;
  tooltip?: boolean;
}

export function Info({ title, description, tooltip = false }: Props) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      flexDir="column"
      align={ isWideVersion ? "center" : "start"}
    >
      <Text
        color="highlight.yellow"
        fontSize={36}
        fontWeight="semibold"
      >
        {description}
      </Text>
      <Text
        fontSize={24}
        fontWeight={ isWideVersion ? "semibold" : "400"}
      >
        {title}
        {
          tooltip && (
            <Tooltip label='Hover me'>
              <InfoIcon w="13.33px" h="13.33px" />
            </Tooltip>
          )
        }
      </Text>
    </Flex>
  )
}