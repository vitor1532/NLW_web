import { useState, useEffect } from 'react';
import { GameBanner } from './components/GameBanner';
import * as Dialog from '@radix-ui/react-dialog'
import React from 'react';

//Carousel

//<div className="grid grid-cols-6 gap-6 mt-16">
//</div>
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


import './styles/main.css';

import svgLogo from './assets/logo.svg'
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';
import { CaretLeft, CaretRight } from 'phosphor-react';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();
  const res = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 6 },
  };  
  useEffect(() => {
    axios('http://192.168.33.55:3333/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])

  const item = games.map(game => {    
          
    return (
        
      <GameBanner 
        key={game.id}
        bannerUrl={game.bannerUrl}
        title={game.title}
        adsCount={game._count.ads}
        onDragStart={handleDragStart}
        role="presentation"            
        />
    )
  })

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={svgLogo}></img>
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui!</h1>

      
      
        <AliceCarousel 
          //mouseTracking
          items={item}
          responsive={res}
          renderPrevButton={() => {
            return <div className="absolute divCenterTop divLeft"><p className="text-white"><button><CaretLeft size={32} /></button></p></div>
          }}
          renderNextButton={() => {
            return <div className="absolute divCenterTop divRight"><p className="text-white"><button><CaretRight size={32} /></button></p></div>
          }}
        />
      
      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
