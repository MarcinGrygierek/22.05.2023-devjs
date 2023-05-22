import { Button } from "./components/Button";
import { useStats } from "./hooks/useStats";
import { PrimaryHeader } from "./components/PrimaryHeader";
import { SecondaryHeader } from "./components/SecondaryHeader";
import { Row } from "./components/Row";
import { ButtonsContainer } from "./components/ButtonsContainer";
import { Column } from "./components/Columns";
import { Container } from "./components/Container";
import { FormattedValue } from "./components/FormattedValue";


const Dashboard = () => {
    const { average, total, loading, getStatistics } = useStats();

    if (loading) return <p>Waiting for data...</p>

    return <Container>
        <PrimaryHeader text="Statistics" />
        <Row>
            <Column>
                <SecondaryHeader text="Average" />
                <FormattedValue value={average} />
            </Column>
            <Column>
                <SecondaryHeader text="Average" />
                <FormattedValue value={total} />
            </Column>
        </Row>
        <ButtonsContainer>
            <Button click={getStatistics} label="Refresh" />
        </ButtonsContainer>
    </Container>
}

export { Dashboard }