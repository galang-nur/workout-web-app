import { useWorkoutStore } from "../../../store/workoutStore";
import { ProgressCard } from "./ProgressCard";

export const ProgressList = () => {
  const { workoutHistory } = useWorkoutStore();

  if (workoutHistory.length === 0) {
    return (
      <p className="text-neutral-500 text-center py-12">
        No workout history available.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {workoutHistory.map((session) => (
        <ProgressCard key={session.id} session={session} />
      ))}
    </div>
  );
};
