import { Flex } from "@chakra-ui/react"

interface Props {
    children: React.ReactNode;
}

const ButtonsContainer = ({children}: Props) => {
    return <Flex justifyContent="flex-end">
        {children}
    </Flex>
}

export { ButtonsContainer }