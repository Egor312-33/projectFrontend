'use client'
import { motion } from "framer-motion";
import { Card, CardBody, Avatar, cn } from "@heroui/react";

type MessageCardProps = {
    author: string;
    message: string;
    avatarSrc: string;
    bgColor?: "black" | "violet"
    isReverse?: boolean;
    delay?: number;
};

export const MessageCard = ({
    author,
    message,
    avatarSrc,
    bgColor = "black",
    isReverse = false,
    delay = 0
}: MessageCardProps) => {
    return (
        <div className={cn(
            "relative w-full",
            isReverse ? 'pl-8 pr-4' : 'pr-8 pl-4'
        )}>

            <div className={cn(
                "absolute top-0 bottom-0 w-1 rounded-full bg-linear-to-b from-transparent via-(--primary) to-transparent",
                isReverse ? 'right-2' : 'left-2'
            )} />

            <motion.div
                initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                    delay,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                }}
                className={cn(
                    "relative flex z-10",
                    isReverse ? 'justify-end' : 'justify-start'
                )}
            >
                <Card
                    className={cn(
                        'backdrop-blur-xl border shadow-2xl max-w-sm w-full border-(--border)',
                        bgColor === "black" && 'bg-(--surface-tonal)/80',
                        bgColor === "violet" && 'bg-(--primary)/10'
                    )}
                >
                    <CardBody className={cn(
                        'p-4 flex gap-4',
                        isReverse ? 'flex-row-reverse' : 'flex-row'
                    )}>
                        <div className={cn(
                            'flex flex-col gap-2 items-center shrink-0',
                            isReverse ? 'items-end' : 'items-start'
                        )}>
                            <span className="text-xs uppercase tracking-[0.2em] text-(--muted-foreground) font-black">
                                {author}
                            </span>
                            <Avatar
                                src={avatarSrc}
                                size="md"
                                isBordered
                                radius="full"
                                className={cn("shadow-lg",
                                    bgColor === "black" && "ring-orange-200/80",
                                    bgColor === "violet" && " ring-(--primary)/60"
                                )}
                            />
                        </div>

                        <div className={cn(
                            'flex flex-col justify-end flex-1',
                            isReverse ? 'text-right' : 'text-left'
                        )}>
                            <p className={cn("text-lg leading-relaxed font-light italic",
                                bgColor === "black" && 'text-orange-200/80',
                                bgColor === "violet" && 'text-(--foreground)'
                            )}>
                                «{message}»
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    );
};