import React from "react";

type OrderStatus = "Send" | "Failed" | "In progress" | "Completed";

interface Order {
  id: number;
  name: string;
  status: OrderStatus;
}

const orders: Order[] = [
  { id: 1, name: "Charlie Chapman", status: "Send" },
  { id: 2, name: "Howard Hudson", status: "Failed" },
  { id: 3, name: "Fiona Fisher", status: "In progress" },
  { id: 4, name: "Nick Nelson", status: "Completed" },
  { id: 5, name: "Amanda Anderson", status: "Completed" },
];

const statusStyles: Record<OrderStatus, string> = {
  Send: "bg-cyan-400 text-white",
  Failed: "bg-rose-300 text-white",
  "In progress": "bg-amber-400 text-white",
  Completed: "bg-emerald-400 text-white",
};

const Order: React.FC = () => {
  return (
    <div className="bg-base-100 rounded-xl shadow p-6 max-w-md w-full mx-auto">
      <div className="flex items-center mb-4 gap-2">
        <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M3 17a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4" />
          <circle cx={12} cy={7} r={4} />
        </svg>
        <span className="font-semibold text-base-content text-lg">Recent orders</span>
      </div>
      <ul>
        {orders.map((order) => (
          <li
            key={order.id}
            className="flex items-center justify-between gap-x-16 py-3 border-b last:border-b-0 border-base-200"
          >
            <span className="text-base-content">{order.name}</span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium min-w-[90px] text-center ${statusStyles[order.status]}`}
            >
              {order.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;