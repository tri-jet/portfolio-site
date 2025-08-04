'use client'
// components/SkillPills.tsx
import React from 'react';

export type SkillPillProps = {
  label: string;
};

const SkillPill: React.FC<SkillPillProps> = ({ label }) => {

  return (
    <span
      aria-label={label}
      className={`
        relative inline-block rounded-full px-3 py-1 text-xs font-semibold
        bg-gray-700 text-white
        transition-all duration-200 ease-out
        hover:scale-105 hover:shadow-lg hover:bg-gray-900
        focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500
        cursor-default select-none
      `}
    >
      {label}
    </span>
  );
};

export const SkillPills: React.FC<{
  skills: string[];
}> = ({ skills }) => (
  <div className="flex flex-wrap gap-2 my-2">
    {skills.map((s) => (
      <SkillPill key={s} label={s} />
    ))}
  </div>
);

export default SkillPill;
