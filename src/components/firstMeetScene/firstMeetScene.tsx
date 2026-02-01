'use client'
import { motion } from "framer-motion";
import { Image, Card, CardBody, CardHeader, Divider, Chip } from "@heroui/react";
import { Sparkles, Heart, MapPin } from "lucide-react";
import { MessageCard } from "../messageCard/messageCard";

export const FirstMeetScene = () => {
    return (
        <section className="min-h-screen py-20 flex flex-col gap-20 relative overflow-hidden">

            <div className="absolute inset-0  from-(--primary)/5 transparent to-(--primary)/5ter-events-none" />
            <MessageCard
                author="Pudge"
                message="Блин, я сегодня приехал в парк, жаль что тебя так и нешёл..."
                avatarSrc="/myAvatar.jpg"
                bgColor="violet"
                isReverse={false}
            />

            <div
                className="absolute left-1/2 top-0 bottom-0 w-px bg-(--primary) opacity-30 pointer-events-none"
            />
            <MessageCard
                author="Alexa"
                message="Блин, то же самое! Но ничего, может в следующий раз..."
                avatarSrc="/herAvatar.jpg"
                isReverse={true}
                delay={0.2}
            />

            <div className="relative py-16 flex justify-center items-center" >
                <h2 className="text-7xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-(--primary) to-(--primary)/40 uppercase">
                    А нет ))
                </h2>

            </div>
            <FirstMeetScenePhoto />
            <MessageCard
                author="Alexa"
                message="У меня теперь вещи твоими духами пахнут"
                avatarSrc="/herAvatar.jpg"
                isReverse={true}
                delay={0.2}
            />
            <MessageCard
                author="Alexa"
                message="У подруги в фанфике в её голове у нас уже свадьба "
                avatarSrc="/herAvatar.jpg"
                isReverse={true}
                delay={0.2}
            />
            <TextReview />

            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--primary)/30 to-transparent" />
        </section>
    );
};

function FirstMeetScenePhoto() {
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
                    width={360}
                    src="/firstMeetScene/firstPhoto.jpg"
                    alt="Первая встреча"
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
                                Красотка ✨
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
                    <Chip
                        startContent={<MapPin size={16} />}
                        variant="shadow"
                        size="lg"
                        classNames={{
                            base: "bg-[var(--primary)] border-[var(--border)]",
                            content: "font-semibold text-sm"
                        }}
                    >
                        Парк Юбилейный
                    </Chip>
                </motion.div>
            </motion.div>
        </div>
    );
}

function TextReview() {
    return (
        <div className="px-6 mt-10 max-w-2xl mx-auto w-full">
            <Card className="border border-(--border) bg-(--surface-tonal)/80 backdrop-blur-md shadow-xl">
                <CardHeader className="flex gap-3 pb-0">
                    <Sparkles className="text-(--primary)" size={22} />
                    <div className="flex flex-col">
                        <p className="text-sm uppercase tracking-wider text-(--primary) font-bold">
                            PUDGE
                        </p>
                    </div>
                </CardHeader>
                <Divider className="my-4 bg-(--border)" />
                <CardBody className="pt-0">
                    <p className="text-lg leading-relaxed text-(--primary)/50">
                        Я помню этот вечер, как мы гугяли часов 6,
                        хоть я в основном молчал и слушал про твои фильмы),
                        но мы были интересно друг другу и
                        именно тогда я и влюбился в тебя

                    </p>
                </CardBody>
            </Card>
        </div>
    );
}