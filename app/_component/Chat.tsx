import Image from "next/image";
import React from "react";

type Message = {
  id: number;
  text: string;
  time: string;
  sender: "me" | "them";
  name?: string;
  status?: string;
  avatar: string;
};

const messages: Message[] = [
  {
    id: 1,
    text: "It's over for you",
    time: "12:45",
    sender: "them",
    name: "Obi-Wan Kenobi",
    avatar: "/asset/girl.png",
  },
  {
    id: 2,
    text: "You peed on my shoes",
    time: "12:45",
    sender: "them",
    status: "Delivered",
    avatar: "/asset/girl.png",
  },
  {
    id: 3,
    text: "Bitch , you sold my kids",
    time: "12:46",
    sender: "me",
    status: "Seen at 12:46",
    avatar: "/asset/cat.png",
  },
];

const Chat: React.FC = () => {
  return (
    <div className="bg-base-100 rounded-xl shadow p-4 max-w-md mx-auto flex flex-col min-h-[400px]">
      <div className="flex-1 space-y-4 pb-4">
        {messages.map((msg, idx) => {
          const isMe = msg.sender === "me";
          return (
            <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
              {!isMe && (
                <Image
                  src={msg.avatar}
                  width={100}
                  height={100}
                  alt="avatar"
                  className="w-9 h-9 rounded-full mr-2 self-end"
                />
              )}
              <div className="flex flex-col max-w-[70%]">
                {!isMe && msg.name && idx === 0 && (
                  <div className="text-base-content/70 text-sm mb-1">
                    {msg.name} <span className="text-xs">{msg.time}</span>
                  </div>
                )}
                <div
                  className={`rounded-xl px-4 py-3 text-base-content bg-base-content text-primary-content text-base font-normal
                    ${isMe
                      ? "rounded-br-none bg-base-content text-primary-content"
                      : "rounded-bl-none bg-base-content text-primary-content"
                    }`}
                  style={{
                    borderTopLeftRadius: isMe ? "1rem" : "0.75rem",
                    borderTopRightRadius: isMe ? "0.75rem" : "1rem",
                  }}
                >
                  {msg.text}
                </div>
                {msg.status && (
                  <div className={`text-xs mt-1 ${isMe ? "text-right" : "text-left"} text-base-content/60`}>
                    {msg.status}
                  </div>
                )}
              </div>
              {isMe && (
                <Image
                  src={msg.avatar}
                  width={100}
                  height={100}
                  alt="avatar"
                  className="w-9 h-9 rounded-full ml-2 self-end"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between border-t border-base-200 pt-3 mt-auto">
        <button className="p-2">
          <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.08a6 6 0 0 1 3.33-5.37l3.34-1.67a2 2 0 0 0 2.66 0l3.34 1.67A6 6 0 0 1 22 16.92Z" />
            <circle cx={12} cy={7} r={4} />
          </svg>
        </button>
        <button className="p-2">
          <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx={12} cy={12} r={10} />
            <path d="M12 16v.01" />
            <path d="M12 8v4" />
          </svg>
        </button>
        <button className="p-2">
          <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx={12} cy={12} r={10} />
            <path d="M12 16v.01" />
            <path d="M12 8v4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;