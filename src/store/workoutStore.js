import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WORKOUT_DATA } from "../data/workout";

export const useWorkoutStore = create(
  persist(
    (set, get) => ({
      restInterval: 10,
      setRestInterval: (interval) => set({ restInterval: interval }),

      selectedWorkout: null,
      currentExerciseIndex: 0,
      isActive: false,
      isResting: false,
      isPaused: false,
      remainingTime: 0,
      completedExercises: [],
      startTime: null,
      totalDuration: 0,

      // 🧠 NEW: Simpan semua progress latihan
      workoutHistory: [],

      selectWorkout: (workoutId) => {
        const workout = WORKOUT_DATA[workoutId];
        set({
          selectedWorkout: workout,
          currentExerciseIndex: 0,
          isActive: false,
          isResting: false,
          isPaused: false,
          remainingTime: 0,
          completedExercises: [],
          startTime: null,
          totalDuration: 0,
        });
      },

      startWorkout: () => {
        const { selectedWorkout } = get();
        const firstExercise = selectedWorkout.exercises[0];
        set({
          isActive: true,
          isPaused: false,
          startTime: Date.now(),
          remainingTime:
            firstExercise.type === "time" ? firstExercise.duration : 0,
        });
      },

      pauseWorkout: () => set({ isPaused: true }),
      resumeWorkout: () => set({ isPaused: false }),

      completeExercise: () => {
        const {
          currentExerciseIndex,
          selectedWorkout,
          restInterval,
          completedExercises,
        } = get();
        const currentExercise = selectedWorkout.exercises[currentExerciseIndex];

        set({
          completedExercises: [...completedExercises, currentExercise.id],
          isResting: true,
          remainingTime: restInterval,
        });
      },

      nextExercise: () => {
        const { currentExerciseIndex, selectedWorkout } = get();
        const nextIndex = currentExerciseIndex + 1;

        if (nextIndex >= selectedWorkout.exercises.length) {
          const { startTime, completedExercises, workoutHistory } = get();
          const duration = Math.floor((Date.now() - startTime) / 1000);

          // 🆕 Tambahkan ke riwayat workout
          const newRecord = {
            id: Date.now(),
            workoutName: selectedWorkout.name,
            duration,
            completedExercises: completedExercises.length,
            date: new Date().toISOString(),
          };

          set({
            isActive: false,
            isResting: false,
            totalDuration: duration,
            workoutHistory: [newRecord, ...workoutHistory],
          });
        } else {
          const nextExercise = selectedWorkout.exercises[nextIndex];
          set({
            currentExerciseIndex: nextIndex,
            isResting: false,
            remainingTime:
              nextExercise.type === "time" ? nextExercise.duration : 0,
          });
        }
      },

      skipRest: () => {
        get().nextExercise();
      },

      quitWorkout: () => {
        set({
          selectedWorkout: null,
          currentExerciseIndex: 0,
          isActive: false,
          isResting: false,
          isPaused: false,
          remainingTime: 0,
          completedExercises: [],
          startTime: null,
          totalDuration: 0,
        });
      },

      decrementTime: () => {
        const { remainingTime } = get();
        if (remainingTime > 0) {
          set({ remainingTime: remainingTime - 1 });
        }
      },

      // 🧹 Opsional: clear semua progress
      clearHistory: () => set({ workoutHistory: [] }),
    }),
    {
      name: "workout-storage", // localStorage key
    }
  )
);
