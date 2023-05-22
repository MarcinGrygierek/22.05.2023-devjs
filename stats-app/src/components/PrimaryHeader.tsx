import { Heading } from "@chakra-ui/react"

interface Props {
    text: string;
}

const PrimaryHeader = ({text}: Props) => {
 return <Heading as="h1" fontWeight={900}>{text}</Heading>   
}

export { PrimaryHeader }