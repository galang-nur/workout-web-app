import { useState } from "react";
import { ProgressHeader } from "./ProgressHeader";
import { ProgressStats } from "./ProgressStats";
import { ProgressChart } from "./ProgressChart";
import { ProgressList } from "./ProgressList";

export const WorkoutProgress = ({ onBack }) => {
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white p-6">
      <div className="max-w-3xl mx-auto">
        <ProgressHeader onBack={onBack} />
        <h1 className="text-3xl font-bold text-neutral-900 mb-6">
          Workout Progress
        </h1>
        <ProgressStats onFilterChange={setFilteredData} />
        <ProgressChart filteredData={filteredData} />
        <ProgressList />
      </div>
    </div>
  );
};
