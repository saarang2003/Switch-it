import React from "react";

const Message: React.FC = () => {
  return (
    <div className="space-y-4 max-w-xs w-full mx-auto">
      {/* New messages */}
      <div className="flex items-center gap-3 bg-info text-info-content rounded-xl px-4 py-3 shadow">
        <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <rect x={3} y={5} width={18} height={14} rx={3} stroke="currentColor" />
          <path d="M3 7l9 6 9-6" stroke="currentColor" />
        </svg>
        <span className="font-medium">There are 9 new messages</span>
      </div>

      {/* Verification completed */}
      <div className="flex items-center gap-3 bg-base-100 border-2 border-emerald-400 text-emerald-400 rounded-xl px-4 py-3 shadow">
        <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx={12} cy={12} r={10} stroke="currentColor" />
          <path d="M8 12l2 2 4-4" stroke="currentColor" />
        </svg>
        <span className="font-medium">Verification process completed</span>
      </div>

      {/* Verify email */}
      <div className="flex items-center gap-3 bg-base-100 border-2 border-orange-500 border-dashed text-orange-500 rounded-xl px-4 py-3 shadow">
        <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx={12} cy={12} r={10} stroke="currentColor" />
          <path d="M12 8v4" stroke="currentColor" />
          <circle cx={12} cy={16} r={1} fill="currentColor" />
        </svg>
        <span>
          <a href="#" className="font-medium underline text-orange-500 hover:text-orange-600">
            Click to verify your email
          </a>
        </span>
      </div>

      {/* Access denied */}
      <div className="flex items-center justify-between bg-base-100 rounded-xl px-4 py-3 shadow border border-transparent">
        <div className="flex items-center gap-3 text-pink-700">
          <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <rect x={4} y={4} width={16} height={16} rx={4} stroke="currentColor" />
            <path d="M9 12h6" stroke="currentColor" />
          </svg>
          <span className="font-medium">Access denied</span>
        </div>
        <a href="#" className="text-pink-600 font-medium hover:underline">
          Support
        </a>
      </div>
    </div>
  );
};

export default Message;