'use client'
import { Avatar, Button } from "@heroui/react";
import { ArrowLeft, Phone, MoreVertical } from "lucide-react";

export function ChatHeader() {
    return (
        <div className="sticky top-0 z-30 bg-(--surface-tonal) border-(--border)">
            <div className="px-4 py-2 flex items-center gap-3">
                <Button size="md" variant='light' radius="full" isIconOnly>
                    <ArrowLeft size={24} className="text-(--muted-foreground)" />
                </Button >
                <div className="flex items-center gap-3 flex-1">
                    <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        size="md"

                    />
                    <div className="flex flex-col">
                        <span className="text-xg font-bold">Alexa</span>
                        <span className="text- text-(--muted-foreground)">online</span>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <Button size="md" variant='light' radius="full" isIconOnly>
                        <Phone size={24} className="text-(--muted-foreground)" />
                    </Button>
                    <Button size="md" variant='light' radius="full" isIconOnly>
                        <MoreVertical size={24} className="text-(--muted-foreground)" />
                    </Button>
                </div>
            </div>
        </div>
    );
}