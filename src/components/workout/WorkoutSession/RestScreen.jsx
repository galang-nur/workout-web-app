import { SkipForward } from "lucide-react";
import { useWorkoutStore } from "../../../store/workoutStore";

export const RestScreen = () => {
  const { remainingTime, skipRest } = useWorkoutStore();

  return (
    <div className="text-center">
      <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">
        😌
      </div>
      <h2 className="text-3xl font-bold text-neutral-900 mb-4">Rest Time</h2>
      <div className="text-8xl font-bold text-emerald-600 mb-8 tabular-nums">
        {remainingTime}
      </div>
      <p className="text-neutral-600 mb-8 text-lg">
        Get ready for the next exercise
      </p>
      <button
        onClick={skipRest}
        className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
      >
        <SkipForward className="w-5 h-5" />
        Skip Rest
      </button>
    </div>
  );
};
