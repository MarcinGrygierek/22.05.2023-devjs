import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Button } from "./components/Button";

interface SingleStats {
    day: Date;
    value: number;
}

const Dashboard = () => {
    const [stats, setStats] = useState<SingleStats[]>([]);
    const [average, setAverage] = useState<number>();
    const [total, setTotal] = useState<number>();

    const getStatistics = () => {
        setTimeout(() => {
            const data: SingleStats[] = Array(Math.round(Math.random() * 100)).fill(0).map(_val => ({
                day: new Date(Math.round(Math.random() * 100000000)),
                value: Math.round(Math.random() * 1000),
            }))

            setStats(data);
        }, 2500);
    }

    useEffect(() => {
        getStatistics();
    }, [])

    useEffect(() => {
        const statsTotal = stats.reduce((acc, stat) => acc + stat.value, 0);
        const statsAverage = statsTotal / stats.length;

        setTotal(statsTotal);
        setAverage(statsAverage);

    }, [stats])

    if (average && total && stats.length > 0) {
        return <Container maxW={1200} p={20}>
            <Heading as="h1" fontWeight={900}>Statistics</Heading>
            <Flex mb={10}>
                <Flex w="50%" flexDir="column">
                    <Heading as="h2" fontWeight={500}>Average value</Heading>
                    <Text fontSize="2.5rem">{average.toFixed(2)}</Text>
                </Flex>
                <Flex w="50%" flexDir="column">
                    <Heading as="h2" fontWeight={500}>Total value</Heading>
                    <Text fontSize="2.5rem">{total}</Text>
                </Flex>
            </Flex>
            <Flex justifyContent="flex-end">
                <Button click={getStatistics} label="Refresh" />
            </Flex>
        </Container>
    }

    else return <Container p={20}>
        <Text fontSize="2rem">Waiting for data...</Text>
    </Container>
}

export { Dashboard }