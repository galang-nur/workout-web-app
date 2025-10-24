import { useWorkoutStore } from "../../../store/workoutStore";

export const NextExercisePreview = () => {
  const { currentExerciseIndex, selectedWorkout, isResting } = useWorkoutStore();

  if (currentExerciseIndex >= selectedWorkout.exercises.length - 1 || isResting)
    return null;

  return (
    <div className="mt-6 text-center bg-white rounded-2xl border border-neutral-200 p-4">
      <p className="text-sm text-neutral-500 mb-1">Next up</p>
      <p className="font-semibold text-neutral-900">
        {selectedWorkout.exercises[currentExerciseIndex + 1].name}
      </p>
    </div>
  );
};
