'use client'
import { cn } from "@heroui/react";
import { motion } from "framer-motion";
import { Check, CheckCheck } from "lucide-react";
import Image from "next/image";

interface TelegramMediaprops {
    src: string;
    isMe: boolean;
    time: string;
    isRead?: boolean;
    caption?: string;
}

export const TelegramMedia = ({ src, isMe, time, isRead, caption }: TelegramMediaprops) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            viewport={{ once: false, amount: 0.2, margin: "-20px 0px -20px 0px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={cn("flex w-full mb-2 outline-none", isMe ? "justify-end" : "justify-start")}
        >
            <div className={cn(
                "relative rounded-2xl overflow-hidden max-w-50",
                isMe ? "rounded-tr-md" : "rounded-tl-md"
            )}>
                <div className="relative">
                    {src.endsWith('.webm') ? (
                        <video
                            src={src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto object-cover"
                        />
                    ) : (
                        <Image
                            src={src}
                            alt="media"
                            width={200}
                            height={200}
                            className="w-full h-auto object-cover"
                        />
                    )}

                    <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-0 right-0 flex items-center gap-1 select-none">
                        <span className="flex items-center text-sm  bg-(--accent-deep)/30 p-1 rounded-xl drop-shadow-lg">
                            {time}
                            {isMe && (
                                isRead ?
                                    <CheckCheck size={16} className="drop-shadow-lg" /> :
                                    <Check size={16} className=" drop-shadow-lg" />
                            )}
                        </span>
                    </div>
                </div>
                {caption && (
                    <div className={cn(
                        "px-4 py-2",
                        isMe && "bg-(--accent-deep) text-(--messenger-blue-text)",
                        !isMe && "bg-(--surface-tonal) text-(--foreground)"
                    )}>
                        <p className="text-[15px] leading-relaxed">{caption}</p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};