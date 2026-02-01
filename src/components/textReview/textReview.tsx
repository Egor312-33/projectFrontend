"use client"
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Sparkles } from "lucide-react";

interface TextReview {
    title: string,
    description: string
}

export function TextReview({ title, description }: TextReview) {
    return (
        <div className="px-6 mt-10 max-w-2xl mx-auto w-full">
            <Card className="border border-(--border) bg-(--surface-tonal)/80 backdrop-blur-md shadow-xl">
                <CardHeader className="flex gap-3 pb-0">
                    <Sparkles className="text-(--primary)" size={22} />
                    <div className="flex flex-col">
                        <p className="text-sm uppercase tracking-wider text-(--primary) font-bold">
                            {title}
                        </p>
                    </div>
                </CardHeader>
                <Divider className="my-4 bg-(--border)" />
                <CardBody className="pt-0">
                    <p className="text-lg leading-relaxed text-(--primary)/50">
                        {description}
                    </p>
                </CardBody>
            </Card>
        </div>
    );
}