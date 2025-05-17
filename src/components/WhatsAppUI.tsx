import { FC } from 'react';
import { cn } from '@/lib/utils';

interface WhatsAppMessageProps {
  text: string;
  sender: 'user' | 'bot';
  time: string;
  animate?: boolean;
}

export const WhatsAppMessage: FC<WhatsAppMessageProps> = ({
  text,
  sender,
  time,
  animate = false
}) => {
  const isUser = sender === 'user';
  
  return (
    <div 
      className={cn(
        "flex max-w-[75%] w-fit rounded-lg px-3 py-2",
        isUser 
          ? "self-end bg-[#005C4B] text-white rounded-tr-none" 
          : "self-start bg-[#202C33] text-white rounded-tl-none",
        animate && "animate-fade-in-up"
      )}
    >
      <div>
        <div className="break-words whitespace-pre-wrap">{text}</div>
        <div className="text-xs opacity-70 text-right mt-1">{time}</div>
      </div>
    </div>
  );
};

interface WhatsAppNotificationProps {
  text: string;
}

export const WhatsAppNotification: FC<WhatsAppNotificationProps> = ({ text }) => {
  return (
    <div className="self-center bg-[#182229] text-[#8696A0] text-xs px-4 py-2 rounded-lg max-w-[80%] text-center my-2">
      {text}
    </div>
  );
};