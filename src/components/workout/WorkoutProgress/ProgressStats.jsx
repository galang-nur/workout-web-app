import { useState, useMemo } from "react";
import { Card } from "../../ui/Card";
import { useWorkoutStore } from "../../../store/workoutStore";

export const ProgressStats = ({ onFilterChange }) => {
  const { workoutHistory } = useWorkoutStore();
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    const now = new Date();
    if (filter === "week") {
      const oneWeekAgo = new Date(now.setDate(now.getDate() - 7));
      return workoutHistory.filter(
        (s) => new Date(s.date) >= oneWeekAgo
      );
    }
    if (filter === "month") {
      const oneMonthAgo = new Date(now.setMonth(now.getMonth() - 1));
      return workoutHistory.filter(
        (s) => new Date(s.date) >= oneMonthAgo
      );
    }
    return workoutHistory;
  }, [workoutHistory, filter]);

  const totalSessions = filtered.length;
  const totalDuration = filtered.reduce((sum, s) => sum + s.duration, 0);
  const avgDuration = totalSessions ? Math.round(totalDuration / totalSessions / 60) : 0;
  const totalMinutes = Math.round(totalDuration / 60);

  onFilterChange(filtered);

  return (
    <div className="mb-10">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-neutral-900">
          Workout Summary
        </h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-neutral-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-emerald-500"
        >
          <option value="all">All</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-emerald-600 mb-1">
            {totalSessions}
          </div>
          <p className="text-sm text-neutral-600">Sessions</p>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-emerald-600 mb-1">
            {totalMinutes} min
          </div>
          <p className="text-sm text-neutral-600">Total Time</p>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-emerald-600 mb-1">
            {avgDuration} min
          </div>
          <p className="text-sm text-neutral-600">Average</p>
        </Card>
      </div>
    </div>
  );
};
