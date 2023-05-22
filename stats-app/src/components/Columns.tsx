import { Flex } from "@chakra-ui/react"

interface Props {
    children: React.ReactNode;
}

const Column = ({ children}: Props) => {
    return <Flex flex={1} flexDirection="column">{children}</Flex>
}

export { Column }