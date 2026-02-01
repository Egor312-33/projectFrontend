import { MessageCard } from "../messageCard/messageCard";
import { ScenePhoto } from "../scenePhoto/scenePhoto";
import { TextReview } from "../textReview/textReview";

export const FirstMeetScene = () => {
    return (
        <section className="min-h-screen py-20 flex flex-col gap-20 relative overflow-hidden">

            <div className="absolute inset-0  from-(--primary)/5 transparent to-(--primary)/5ter-events-none" />
            <MessageCard
                author="Pudge"
                message="Блин, я сегодня приехал в парк, жаль что тебя так и не нашёл..."
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
            <ScenePhoto
                imageSrc="/firstMeetScene/firstPhoto.jpg"
                location="Парк Юбилейный"
                caption="Красотка ✨"
            />
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
            <TextReview title="PUDGE"
                description="Я помню этот вечер, как мы гугяли часов 6,
                    хоть я в основном молчал и слушал про твои фильмы),
                    но мы были интересны друг другу и
                    именно тогда я и влюбился в тебя" />

            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--primary)/30 to-transparent" />
        </section>
    );
};
