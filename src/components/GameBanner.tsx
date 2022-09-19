interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
    role: string;
    onDragStart: any
}

export function GameBanner(props: GameBannerProps) {
    return (
      <div className="grid grid-cols gap-6 mt-16">
        <a href='' className="relative rouded-lg overflow-hidden mr-4">
          <img src={props.bannerUrl} />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="font-bold text-white block mt-1">{props.title}</strong>
            <span className='text-zinc-300 text-sm block mt-1'>{props.adsCount} anúncio(s)</span>
          </div>
        </a>
      </div>
    )
}