import { Text } from '@chakra-ui/react';

interface Props {
    value: number;
}

const FormattedValue = ({value}: Props) => {
    return <Text fontSize="2.5rem">{value.toFixed(2)}</Text>
}

export { FormattedValue }