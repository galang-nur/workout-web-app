import { Timer } from 'lucide-react';
import { useWorkoutStore } from '../../../store/workoutStore';
import { REST_INTERVALS } from '../../../data/workout';

export const RestIntervalSelector = () => {
  const { restInterval, setRestInterval } = useWorkoutStore();

  return (
    <div className="bg-white rounded-3xl shadow-md border border-neutral-200 p-6 mb-10">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
          <Timer className="w-5 h-5 text-emerald-600" />
        </div>
        <h2 className="text-lg font-semibold text-neutral-900">Rest Interval</h2>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {REST_INTERVALS.map((interval) => (
          <button
            key={interval}
            onClick={() => setRestInterval(interval)}
            className={`py-3 px-4 rounded-xl font-medium transition-all ${
              restInterval === interval
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200 scale-105'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {interval}s
          </button>
        ))}
      </div>
    </div>
  );
};
