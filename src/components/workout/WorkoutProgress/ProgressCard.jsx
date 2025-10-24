import { Card } from "../../ui/Card";

export const ProgressCard = ({ session }) => {
    const hours = Math.floor(session.duration / 3600);
  const minutes = Math.floor(session.duration / 60);
  const seconds = session.duration % 60;

  return (
    <Card className="p-6 flex justify-between items-center hover:shadow-md transition">
      <div>
        <h3 className="font-semibold text-lg text-neutral-900">
          {session.workoutName}
        </h3>
        <p className="text-neutral-600 text-sm">
          {new Date(session.date).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="text-right">
        <div className="font-bold text-emerald-600 text-xl tabular-nums">
          {hours}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
        </div>
        <p className="text-neutral-600 text-sm">
          {session.completedExercises} exercises
        </p>
      </div>
    </Card>
  );
};
