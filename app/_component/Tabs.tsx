'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from 'recharts';

// Demo data
const data = [
  { name: 'Mon', value: 4 },
  { name: 'Tue', value: 6 },
  { name: 'Wed', value: 5 },
  { name: 'Thu', value: 4 },
  { name: 'Fri', value: 7 },
  { name: 'Sat', value: 8 },
  { name: 'Sun', value: 6 },
  { name: 'Mon', value: 9 },
  { name: 'Tue', value: 10 },
  { name: 'Wed', value: 12 },
  { name: 'Thu', value: 13 },
];

const Tabs: React.FC = () => {
  return (
    <div className="bg-base-100 rounded-xl shadow p-6 min-w-[340px] max-w-md mx-auto">
      <ResponsiveContainer width="100%" height={120}>
        <BarChart data={data} barCategoryGap={2}>
          <Bar dataKey="value" fill="var(--color-primary Juliet

System: --primary)" radius={[8, 8, 0, 0]} />
          <XAxis dataKey="name" hide />
          <Tooltip cursor={{ fill: "transparent" }} content={undefined} />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-6 text-base-content text-center text-lg font-normal">
        Sales volume reached <span className="font-semibold">$12,450</span> this week, showing<br />
        a <span className="font-semibold text-success">15% increase</span> from the previous period.
      </div>
      <div className="flex gap-4 mt-6 justify-center">
        <button className="flex-1 py-3 rounded-lg border border-base-300 bg-base-100 text-base-content font-semibold text-lg shadow-sm hover:bg-base-200 transition">
          Charts
        </button>
        <button className="flex-1 py-3 rounded-lg bg-primary text-primary-content font-semibold text-lg shadow hover:shadow-md transition">
          Details
        </button>
      </div>
    </div>
  );
};

export default Tabs;