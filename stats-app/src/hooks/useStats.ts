import { useEffect, useState } from "react";
import { SingleStats } from "../types";

interface UseStats {
    average: number;
    total: number;
    loading: boolean;
    getStatistics: () => void;
}

const useStats = (): UseStats => {
    const [stats, setStats] = useState<SingleStats[]>([]);
    const [average, setAverage] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const calculateMetrics = (data: SingleStats[]) => {
        const statsTotal = data.reduce((acc, stat) => acc + stat.value, 0);
        const statsAverage = statsTotal / stats.length;

        setTotal(statsTotal);
        setAverage(statsAverage);
    }

    const getStatistics = () => {
        setLoading(true);
        setTimeout(() => {
            const data: SingleStats[] = Array(Math.round(Math.random() * 100)).fill(0).map(_val => ({
                day: new Date(Math.round(Math.random() * 100000000)),
                value: Math.round(Math.random() * 1000),
            }))

            setStats(data);
            calculateMetrics(data);
            setLoading(false);
        }, 2500);
    }

    useEffect(() => {
        getStatistics();
    }, [])


    return {
        average, 
        total,
        loading,
        getStatistics
    }
}

export { useStats }