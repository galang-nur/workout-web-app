import { Home } from "lucide-react";
import { useWorkoutStore } from "../../../store/workoutStore";

export const SessionHeader = () => {
  const { quitWorkout, selectedWorkout, currentExerciseIndex } = useWorkoutStore();

  return (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={quitWorkout}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition"
      >
        <Home className="w-4 h-4" />
        <span className="font-medium">Quit</span>
      </button>
      <div className="px-4 py-2 rounded-xl bg-white border border-neutral-200">
        <span className="text-sm font-medium text-neutral-900">
          {currentExerciseIndex + 1} / {selectedWorkout.exercises.length}
        </span>
      </div>
    </div>
  );
};
