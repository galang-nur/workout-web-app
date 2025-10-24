import { Play, Pause, CheckCircle } from "lucide-react";
import { useWorkoutStore } from "../../../store/workoutStore";

export const ExerciseDisplay = () => {
  const {
    currentExerciseIndex,
    selectedWorkout,
    isActive,
    isPaused,
    startWorkout,
    pauseWorkout,
    resumeWorkout,
    completeExercise,
    remainingTime,
  } = useWorkoutStore();

  const currentExercise = selectedWorkout.exercises[currentExerciseIndex];

  return (
    <div className="text-center">
      <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">
        💪
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
        {currentExercise.name}
      </h2>

      {currentExercise.type === "time" ? (
        <>
          <div className="text-8xl sm:text-9xl font-bold text-emerald-600 mb-6 tabular-nums">
            {remainingTime}
          </div>
          <p className="text-neutral-600 text-lg mb-10">seconds remaining</p>
        </>
      ) : (
        <>
          <div className="text-8xl sm:text-9xl font-bold text-emerald-600 mb-6 tabular-nums">
            {currentExercise.count}
          </div>
          <p className="text-neutral-600 text-lg mb-10">repetitions</p>
        </>
      )}

      {!isActive ? (
        <button
          onClick={startWorkout}
          className="inline-flex items-center gap-3 bg-emerald-600 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
        >
          <Play className="w-6 h-6" />
          Start Workout
        </button>
      ) : (
        <div className="flex flex-wrap gap-3 justify-center">
          {currentExercise.type === "time" && (
            <button
              onClick={isPaused ? resumeWorkout : pauseWorkout}
              className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-900 px-8 py-4 rounded-xl font-semibold hover:bg-neutral-200 transition"
            >
              {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
              {isPaused ? "Resume" : "Pause"}
            </button>
          )}
          <button
            onClick={completeExercise}
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition"
          >
            <CheckCircle className="w-5 h-5" />
            Done
          </button>
        </div>
      )}
    </div>
  );
};
