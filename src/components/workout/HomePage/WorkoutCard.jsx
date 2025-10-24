import { Activity } from 'lucide-react';
import { useWorkoutStore } from '../../../store/workoutStore';

export const WorkoutCard = ({ workout }) => {
  const { selectWorkout } = useWorkoutStore();

  return (
    <button
      key={workout.id}
      onClick={() => selectWorkout(workout.id)}
      className="group bg-white rounded-3xl shadow-sm border border-neutral-200 p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 text-left"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 bg-neutral-100 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
          {workout.icon}
        </div>
        <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Activity className="w-4 h-4 text-emerald-600" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-neutral-900 mb-2">{workout.name}</h3>
      <p className="text-neutral-600 text-sm mb-4 leading-relaxed">{workout.description}</p>
      <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
        <span className="text-sm text-neutral-500">
          {workout.exercises.length} exercises
        </span>
        <span className="text-sm font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">
          Start →
        </span>
      </div>
    </button>
  );
};
