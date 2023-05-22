import { Flex } from "@chakra-ui/react"

interface Props {
    children: React.ReactNode;
}

const Row = ({ children}: Props) => {
    return <Flex mb={10}>{children}</Flex>
}

export { Row }