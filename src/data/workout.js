export const WORKOUT_DATA = {
  core: {
    id: 'core',
    name: 'Core Workout',
    description: 'Strengthen your abs, obliques, and lower back',
    icon: '🎯',
    exercises: [
      { id: 'c1', name: 'Plank Hold', type: 'time', duration: 30 },
      { id: 'c2', name: 'Crunches', type: 'reps', count: 20 },
      { id: 'c3', name: 'Russian Twists', type: 'reps', count: 30 },
      { id: 'c4', name: 'Leg Raises', type: 'reps', count: 15 },
      { id: 'c5', name: 'Mountain Climbers', type: 'time', duration: 30 },
      { id: 'c6', name: 'Bicycle Crunches', type: 'reps', count: 20 },
      { id: 'c7', name: 'Side Plank (Left)', type: 'time', duration: 20 },
      { id: 'c8', name: 'Side Plank (Right)', type: 'time', duration: 20 },
    ]
  },
  upper: {
    id: 'upper',
    name: 'Upper Body',
    description: 'Build strength in chest, shoulders, and arms',
    icon: '💪',
    exercises: [
      { id: 'u1', name: 'Push-ups', type: 'reps', count: 15 },
      { id: 'u2', name: 'Diamond Push-ups', type: 'reps', count: 10 },
      { id: 'u3', name: 'Pike Push-ups', type: 'reps', count: 12 },
      { id: 'u4', name: 'Tricep Dips', type: 'reps', count: 15 },
      { id: 'u5', name: 'Arm Circles', type: 'time', duration: 30 },
      { id: 'u6', name: 'Plank to Down Dog', type: 'reps', count: 10 },
      { id: 'u7', name: 'Wall Push-ups', type: 'reps', count: 20 },
    ]
  },
  lower: {
    id: 'lower',
    name: 'Lower Body',
    description: 'Tone legs, glutes, and improve mobility',
    icon: '🦵',
    exercises: [
      { id: 'l1', name: 'Squats', type: 'reps', count: 20 },
      { id: 'l2', name: 'Lunges', type: 'reps', count: 16 },
      { id: 'l3', name: 'Glute Bridges', type: 'reps', count: 20 },
      { id: 'l4', name: 'Wall Sit', type: 'time', duration: 30 },
      { id: 'l5', name: 'Calf Raises', type: 'reps', count: 25 },
      { id: 'l6', name: 'Jump Squats', type: 'reps', count: 15 },
      { id: 'l7', name: 'Side Leg Raises', type: 'reps', count: 20 },
      { id: 'l8', name: 'Single Leg Deadlifts', type: 'reps', count: 12 },
    ]
  },
  full: {
    id: 'full',
    name: 'Full Body',
    description: 'Complete workout targeting all major muscle groups',
    icon: '⚡',
    exercises: [
      { id: 'f1', name: 'Burpees', type: 'reps', count: 10 },
      { id: 'f2', name: 'Push-ups', type: 'reps', count: 15 },
      { id: 'f3', name: 'Squats', type: 'reps', count: 20 },
      { id: 'f4', name: 'Plank Hold', type: 'time', duration: 30 },
      { id: 'f5', name: 'Jumping Jacks', type: 'time', duration: 30 },
      { id: 'f6', name: 'Lunges', type: 'reps', count: 16 },
      { id: 'f7', name: 'Mountain Climbers', type: 'time', duration: 30 },
      { id: 'f8', name: 'Tricep Dips', type: 'reps', count: 12 },
      { id: 'f9', name: 'High Knees', type: 'time', duration: 30 },
      { id: 'f10', name: 'Superman Hold', type: 'time', duration: 20 },
    ]
  }
};

export const REST_INTERVALS = [5, 10, 15, 20];