"use client"
import { Card, CardBody, Chip, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Heart, MapPin } from "lucide-react";

interface ScenePhotoProps {
    imageSrc: string;
    location?: string;
    caption: string;
    imageWidth?: number;
}

export function ScenePhoto({ imageSrc, location, caption, imageWidth = 260 }: ScenePhotoProps) {
    return (
        <div className="relative flex flex-col items-center px-4 gap-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
            >
                <Image
                    isBlurred
                    width={imageWidth}
                    src={imageSrc}
                    alt={caption}
                    className="rounded-3xl shadow-2xl border border-(--border)"
                />

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -bottom-6 -right-4 z-20"
                >
                    <Card className="bg-(--surface-tonal)/90 backdrop-blur-xl border border-(--primary)/20 shadow-xl">
                        <CardBody className="p-4 flex flex-row items-center gap-2">
                            <Heart size={20} className="text-(--primary) fill-(--primary)" />
                            <p className=" font-medium text-(--primary)">
                                {caption}
                            </p>
                        </CardBody>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute -top-3 -left-3 z-20"
                >
                    {location && <Chip
                        startContent={<MapPin size={16} />}
                        variant="shadow"
                        size="lg"
                        classNames={{
                            base: "bg-[var(--primary)] border-[var(--border)]",
                            content: "font-semibold text-sm"
                        }}
                    >
                        {location}
                    </Chip>}
                </motion.div>
            </motion.div>
        </div>
    );
}
