export const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white border border-neutral-200 rounded-3xl shadow-sm ${className}`}
  >
    {children}
  </div>
);
