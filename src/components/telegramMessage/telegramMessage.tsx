'use client'
import { cn } from "@heroui/react";
import { motion } from "framer-motion";
import { Check, CheckCheck } from "lucide-react";

interface TelegramMessageProps {
    text: string;
    isMe: boolean;
    time: string;
    isRead?: boolean;
}
export const TelegramMessage = ({ text, isMe, time, isRead }: TelegramMessageProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={cn("flex w-full mb-2", isMe ? "justify-end" : "justify-start")}
        >
            <div className={cn(
                "relative px-4 py-2 rounded-2xl max-w-[92%] wrap-break-word",
                isMe && "bg-(--accent-deep)  rounded-tr-md",
                !isMe && "bg-(--surface-tonal)  rounded-tl-md"
            )}>
                <p className="text-lg  text-(--primary-foreground) leading-relaxed pr-12 whitespace-pre-wrap">{text}</p>
                <div className="absolute bottom-1.5 right-3 flex items-center gap-1 select-none">
                    <span className={cn(
                        "text-sm leading-none",
                        isMe ? "text-(--muted)/60" : "text-(--muted-foreground)"
                    )}>
                        {time}
                    </span>
                    {isMe && (
                        isRead ?
                            <CheckCheck size={16} /> :
                            <Check size={16} />
                    )}
                </div>
            </div>
        </motion.div>
    );
};