import { TextReview } from "../textReview/textReview";
import { ScenePhoto } from "../scenePhoto/scenePhoto";

export const GiveGift = () => {
    return (
        <div className="min-h-screen flex flex-col gap-20 relative overflow-hidden">

            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-(--primary) opacity-30 pointer-events-none" />
            <ScenePhoto
                caption="Хех"
                imageWidth={220}
                imageSrc="/giveGift/gift.jpg"
            />

            <TextReview
                title="PUDGE"
                description="Помню тот момент, когда ты шла и читала письмо и мимо прохящая девушка заулыбалась,
                а потом мы поняли, что на другой стороне письма был нарисован котик)" />
            <ScenePhoto
                caption="Это ты"
                imageSrc="/giveGift/giveGift.jpg"
                location="Рядом с парком"
            />
            <div className="flex flex-col items-center justify-center mt-10 mb-20">
                <div className="h-10 w-px bg-linear-to-brfrom-(--primary)/30o-transparent mb-4" />
                <p className="text-(--muted-foreground) text-sm tracking-[0.2em] uppercase font-light">
                    28 Сентября 2024
                </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-rrom-transparent via-(--primary)/30 to-transparent" />
        </div>
    );
};