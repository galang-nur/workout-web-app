import { useWorkoutStore } from "./store/workoutStore";
import { HomePage, WorkoutSession, } from "./components/workout";
import "./App.css";


export default function App() {
  const { selectedWorkout } = useWorkoutStore();

  return selectedWorkout ? <WorkoutSession /> : <HomePage />;
}
