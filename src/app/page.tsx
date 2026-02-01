
import { FirstAcquaintance } from "@/components/firstAcquaintance/firstAcquaintance";
import { FirstMeetScene } from "@/components/firstMeetScene/firstMeetScene";
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
        subtitle="Недели две мы только договоривались погулять, уже даже надежду потерять успел,ахах" />
      <FirstMeetScene />
    </main>
  );
}
