import { WORKOUT_DATA } from '../../../data/workout';
import { HomeHeader } from './HomeHeader';
import { RestIntervalSelector } from './RestIntervalSelector';
import { WorkoutCard } from './WorkoutCard';
import { WorkoutProgress } from "../WorkoutProgress/WorkoutProgress";
import { useState } from "react";
import { Button } from "../../ui/Button";
import { Container } from '../../layout/Container';
import { PageWrapper } from '../../layout/PageWrapper';

export const HomePage = () => {
    const [showProgress, setShowProgress] = useState(false);

    if (showProgress) return <WorkoutProgress onBack={() => setShowProgress(false)} />;
    return (
        <PageWrapper>         
            <Container>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <HomeHeader />
                <RestIntervalSelector />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.values(WORKOUT_DATA).map((workout) => (
                    <WorkoutCard key={workout.id} workout={workout} />
                    ))}
                </div>
                </div>
                <Button
                    variant="primary"
                    className="mb-6"
                    onClick={() => setShowProgress(true)}
                >
                    View Progress
                </Button>
            </Container>
        </PageWrapper>
    )
};
