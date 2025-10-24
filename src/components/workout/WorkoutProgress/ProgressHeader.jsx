import { Button } from "../../ui/Button";
import { ArrowLeft, Trash } from "lucide-react";
import { useWorkoutStore } from "../../../store/workoutStore";
import ProgressExport from "./ProgressExport";

export const ProgressHeader = ({ onBack }) => {
  const { workoutHistory, clearHistory } = useWorkoutStore();

  return (
    <div className="flex items-center justify-between mb-8">
        <Button variant="primary" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
        </Button>
        {workoutHistory.length > 0 && (
            <Button
            variant="ghost"
            className="text-red-600 hover:bg-red-50"
            onClick={clearHistory}
            >
            <Trash className="w-4 h-4 mr-2" />
            Clear All
            </Button>
        )}
        <ProgressExport />
    </div>
  );
};
