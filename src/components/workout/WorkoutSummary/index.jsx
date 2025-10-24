import { useWorkoutStore } from "../../../store/workoutStore";
import { Home } from "lucide-react";
import { SummaryHeader } from "./SummaryHeader";
import { SummaryCard } from "./SummaryCard";

export const WorkoutSummary = () => {
  const { totalDuration, completedExercises, quitWorkout } = useWorkoutStore();

  const minutes = Math.floor(totalDuration / 60);
  const seconds = totalDuration % 60;
  const estimatedCalories = Math.round(minutes * 5);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-lg border border-neutral-200 p-8 sm:p-12">
          <SummaryHeader />
          <div className="grid grid-cols-3 gap-4 mb-10">
            <SummaryCard
              label="Total Time"
              value={`${minutes}:${seconds.toString().padStart(2, "0")}`}
            />
            <SummaryCard
              label="Exercises"
              value={completedExercises.length}
            />
            <SummaryCard label="Calories" value={`~${estimatedCalories}`} />
          </div>
          <button
            onClick={quitWorkout}
            className="w-full inline-flex items-center justify-center gap-3 bg-emerald-600 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
          >
            <Home className="w-6 h-6" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
