"use client"
import { Image, Card, cn } from "@heroui/react";
import { motion } from "framer-motion";

const photos = [
    { src: "photoMemory/photo1.jpg", label: "Милашка", rotation: "-3deg", size: "large" },
    { src: "photoMemory/photo2.jpg", label: "Лапочка", rotation: "4deg", size: "medium" },
    { src: "photoMemory/photo3.jpg", label: "Мы вместе)", rotation: "-2deg", size: "large" },
];

export const PhotoMemory = () => {

    return (
        <div className="flex flex-col items-center gap-16 py-20 px-4 max-w-sm mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-(--primary) opacity-30 pointer-events-none" />

            {photos.map((photo, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, rotate: 0 }}
                    whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={cn("relative", photo.size === "large" ? "w-[70%]" : "w-[60%]",
                        index % 2 === 0 ? "self-start ml-4" : "self-end mr-4")}
                    style={{
                        marginTop: index > 0 ? "-40px" : "0",
                        zIndex: 10 + index
                    }}
                >
                    <Card className="border border-(--border) bg-(--surface-tonal)/90 backdrop-blur-md p-2 overflow-hidden shadow-2xl">
                        <Image
                            isZoomed
                            src={photo.src}
                            alt={photo.label}
                            className="aspect-3/4 object-cover rounded-lg"
                            width="100%"
                        />
                        <div className="text-center">
                            <span className="text-[10px] uppercase tracking-wider text-(--primary) font-bold">
                                {photo.label}
                            </span>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};