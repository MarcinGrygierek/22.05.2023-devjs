import { Heading } from "@chakra-ui/react"

interface Props {
    text: string;
}

const SecondaryHeader = ({text}: Props) => {
 return <Heading as="h2" fontWeight={500}>{text}</Heading>   
}

export { SecondaryHeader }