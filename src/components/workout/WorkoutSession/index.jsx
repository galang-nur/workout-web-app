import { useWorkoutStore } from "../../../store/workoutStore";
import { useTimer } from "../../../hooks/useTimer";
import { SessionHeader } from "./SessionHeader";
import { ProgressBar } from "../../ui/ProgressBar";
import { RestScreen } from "./RestScreen";
import { ExerciseDisplay } from "./ExerciseDisplay";
import { NextExercisePreview } from "./NextExercisePreview";
import { WorkoutSummary } from "../WorkoutSummary";

export const WorkoutSession = () => {
  const { selectedWorkout, currentExerciseIndex, isActive, isResting } = useWorkoutStore();

  useTimer();

  if (!selectedWorkout) return null;

  const progress =
    ((currentExerciseIndex + 1) / selectedWorkout.exercises.length) * 100;
  const isComplete =
    !isActive && currentExerciseIndex === selectedWorkout.exercises.length - 1;

  if (isComplete) return <WorkoutSummary />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SessionHeader />
        <ProgressBar progress={progress} />
        <div className="bg-white rounded-3xl shadow-md border border-neutral-200 p-8 sm:p-12">
          {isResting ? <RestScreen /> : <ExerciseDisplay />}
        </div>
        <NextExercisePreview />
      </div>
    </div>
  );
};
