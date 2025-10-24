export const ProgressBar = ({ progress = 0, color = "emerald" }) => {
  const colorMap = {
    emerald: "from-emerald-400 to-emerald-600",
    blue: "from-sky-400 to-blue-600",
    amber: "from-amber-400 to-yellow-600",
  };

  return (
    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${colorMap[color]} transition-all duration-500 ease-out`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
