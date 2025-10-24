export const SummaryCard = ({ label, value }) => (
  <div className="bg-neutral-50 rounded-2xl p-6 text-center border border-neutral-100">
    <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-2 tabular-nums">
      {value}
    </div>
    <div className="text-sm text-neutral-600 font-medium">{label}</div>
  </div>
);
