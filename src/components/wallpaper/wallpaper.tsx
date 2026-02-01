"use client"
import { Image } from "@heroui/react";
import { motion } from "framer-motion";

interface WallpaperProps {
    title: string,
    subtitle: string,
    content?: string
}

export function Wallpaper({ title, subtitle, content }: WallpaperProps) {
    return (
        <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">

            <div className="absolute left-1/2 top-0 h-[20%] w-px bg-(--primary) opacity-30 pointer-events-none -translate-x-1/2" />
            <div className="absolute left-1/2 bottom-0 h-[20%] w-px bg-(--primary) opacity-30 pointer-events-none -translate-x-1/2" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="z-10 text-center px-6 w-full mb-8"
            >
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-(--primary)">
                    {title}
                </h1>
                <p className="text-lg md:text-xl font-light leading-relaxed text-(--foreground)/60 max-w-2xl mx-auto">
                    {subtitle}
                </p>
                {content && (
                    <p className="text-sm mt-6 text-(--muted-foreground)/50 max-w-md mx-auto">
                        {content}
                    </p>
                )}
            </motion.div>

            <Image
                isBlurred
                width={260}
                src="/cat.png"
                alt="cat"
            />

            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-(--primary) font-bold opacity-50"
            >
                листай вниз
            </motion.div>
        </section>
    );
}