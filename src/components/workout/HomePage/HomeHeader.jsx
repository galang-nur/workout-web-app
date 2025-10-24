import { Dumbbell } from 'lucide-react';

export const HomeHeader = () => (
  <div className="text-center mb-14">
    <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-3xl mb-5 shadow-sm">
      <Dumbbell className="w-10 h-10 text-emerald-600" />
    </div>
    <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-2 tracking-tight">
      Workout App
    </h1>
    <p className="text-lg text-neutral-600">
      Choose your workout and start building strength
    </p>
  </div>
);
