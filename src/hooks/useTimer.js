import { useEffect } from 'react';
import { useWorkoutStore } from '../store/workoutStore';

export const useTimer = () => {
  const { remainingTime, decrementTime, isPaused, isResting, completeExercise, nextExercise } = useWorkoutStore();
  
  useEffect(() => {
    if (isPaused || remainingTime === 0) return;
    
    const timer = setInterval(() => {
      decrementTime();
      
      if (remainingTime === 1) {
        if (isResting) {
          nextExercise();
        } else {
          completeExercise();
        }
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [remainingTime, isPaused, isResting, decrementTime, completeExercise, nextExercise]);
};