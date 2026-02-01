
import { FirstAcquaintance } from "@/components/firstAcquaintance/firstAcquaintance";
import { FirstMeetScene } from "@/components/firstMeetScene/firstMeetScene";
import { GiveGift } from "@/components/giveGift/giveGift";
import { PhotoMemory } from "@/components/photoMemory/photoMemory";
import { Wallpaper } from "@/components/wallpaper/wallpaper";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto bg-(--secondary-foreground)/90 text-(--background) rounded-2xl rounded-bl-none">
      <Wallpaper
        title="Первое Знакомство"
        subtitle="Всё началось с этого диалога. 
        Тогда я еще не знал, что застряну в нем на полтора года." />

      <FirstAcquaintance />
      <Wallpaper
        title="Первая встреча"
        subtitle="Недели две мы только договоривались погулять, уже я даже надежду потерять успел, ахах" />
      <FirstMeetScene />
      <PhotoMemory />
      <Wallpaper
        title="Последняя встреча"
        subtitle="Всё было хорошо, но всё равно эта встречала стала последней" />
      <GiveGift />
    </main>
  );
}
