import { Container as ChakraContainer } from "@chakra-ui/react"

interface Props {
    children: React.ReactNode;
}

const Container = ({ children}: Props) => {
    return <ChakraContainer maxW="1200" p={5}>{children}</ChakraContainer>
}

export { Container }