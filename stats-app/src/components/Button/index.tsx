import { Button as ChakraButton, ButtonProps, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

interface Props extends ButtonProps {
    label: string;
    click?: () => void;
    to?: string;
    href?: string;
}

const Button = ({
    click,
    to,
    href,
    label,
    ...rest
}: Props) => {
    if (click) {
        return <ChakraButton onClick={click} {...rest}>{label}</ChakraButton>
    } 
    
    if(to) {
        return <Link as={NavLink} to={to} variant={rest.variant}>{label}</Link>
    }

    if(href) {
        return <Link href={to} variant={rest.variant}>{label}</Link>
    }

    return null;
}

export { Button }