'use client';

import React from 'react';

interface RatingCardProps {
  score: number;
  maxScore?: number;
  status?: string;
}

const RatingCard: React.FC<RatingCardProps> = ({
  score,
  maxScore = 100,
  status = 'All good',
}) => {
  const percentage = (score / maxScore) * 100;
  const circleRadius = 28;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const progress = (percentage / 100) * circleCircumference;

  return (
    <div className="w-full max-w-sm min-w-[200px]  px-2 py-2 rounded-xl shadow-xl bg-base-200">
    <div className="flex items-center justify-between bg-base-100 rounded-lg shadow p-6 min-w-[320px]">
      <div>
        <div className="text-base-content text-sm mb-2">Page Score</div>
        <div className="flex items-end">
          <span className="text-4xl font-bold text-base-content">{score}</span>
          <span className="text-base-content font-semibold ml-1 mb-1">/ {maxScore}</span>
        </div>
        <div className="flex items-center mt-3 text-success">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-base-content text-sm">{status}</span>
        </div>
      </div>
      <div>
        <svg width={64} height={64} className="block">
          <circle
            cx={32}
            cy={32}
            r={circleRadius}
            stroke="var(--color-base-content)"
            strokeWidth={5}
            fill="none"
            opacity={0.15}
          />
          <circle
            cx={32}
            cy={32}
            r={circleRadius}
            stroke="var(--color-primary)"
            strokeWidth={5}
            fill="none"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference - progress}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s' }}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            fontSize="1.25rem"
            fill="var(--color-base-content)"
            fontWeight={500}
          >
            {score}
          </text>
        </svg>
      </div>
    </div>
    </div>
  );
};

export default RatingCard;