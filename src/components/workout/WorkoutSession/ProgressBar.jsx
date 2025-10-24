export const ProgressBar = ({ progress }) => (
  <div className="w-full h-2 bg-neutral-200 rounded-full mb-8 overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-500 ease-out"
      style={{ width: `${progress}%` }}
    />
  </div>
);
