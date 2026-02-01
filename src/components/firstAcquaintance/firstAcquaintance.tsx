'use client'
import { Chip } from "@heroui/react";
import { ChatHeader } from "./chatHeader";
import { TelegramMedia } from "../telegramMessage/telegramMedia";
import { TelegramMessage } from "../telegramMessage/telegramMessage";
import type { Message } from "./message.types";

const MessageContent: Message[] = [
    {
        type: "media",
        isMe: true,
        src: "/gifs/mainCat.webm",
        time: "10:01",
        isRead: true
    },
    {
        type: "media",
        isMe: false,
        src: "/gifs/catWinked.webm",
        time: "10:13",
        isRead: true
    },
    {
        isMe: true,
        text: "Привет",
        time: "10:15",
        isRead: true
    },
    {
        isMe: false,
        text: "Привет",
        time: "10:21",
        isRead: true
    },
    {
        isMe: false,
        text: "Я кстати тоже слушаю Playingtheangel",
        time: "12:23",
        isRead: true
    },
    {
        isMe: true,
        text: "Оо круто",
        time: "12:23",
        isRead: true
    },
    {
        isMe: true,
        text: "А кого ещё слушаешь",
        time: "12:23",
        isRead: true
    },
    {
        isMe: false,
        text: "Та много кого, я меломан",
        time: "12:24",
        isRead: true
    },
    {
        isMe: false,
        text: "Ну например гнилая лирика",
        time: "12:24",
        isRead: true
    },
    {
        isMe: true,
        text: "Знаю такого",
        time: "12:24",
        isRead: true
    },
    {
        type: "media",
        isMe: true,
        src: "/gifs/catTrapped.webm",
        time: "12:24",
        isRead: true
    },
];

export function FirstAcquaintance() {
    return (
        <section>
            <ChatHeader />
            <div
                className="px-4 py-6 relative min-h-screen"
                style={{
                    backgroundColor: 'var(--secondary-foreground)',
                }}
            >
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `url('/pattern.svg')`,
                        backgroundRepeat: 'repeat',
                    }}
                />
                <div className="absolute inset-0  pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex justify-center mb-6 sticky top-16 z-20">
                        <Chip
                            variant="flat"
                            size="sm"
                            className="bg-(--primary)/60 border-none shadow-sm text-(--primary-foreground)"
                        >
                            30 Августа 2024
                        </Chip>
                    </div>

                    <div className="space-y-1 max-w-175 mx-auto ">
                        {MessageContent.map((message, key) => {
                            if (message.type === "media") {
                                return (
                                    <TelegramMedia
                                        key={key}
                                        isMe={message.isMe}
                                        src={message.src}
                                        time={message.time}
                                        caption={message.caption}
                                        isRead={message.isRead}
                                    />
                                );
                            }
                            return (
                                <TelegramMessage
                                    key={key}
                                    isMe={message.isMe}
                                    text={message.text}
                                    time={message.time}
                                    isRead={message.isRead}
                                />
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}