import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css';

import svgLogo from './assets/logo.svg'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={svgLogo}></img>
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui!</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='' className="relative rouded-lg overflow-hidden">
          <img src='/game 1.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="font-bold text-white block mt-1">League of Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href='' className="relative rouded-lg overflow-hidden">
          <img src='/game 2.png' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="font-bold text-white block mt-1">Dota 2</strong>
            <span className='text-zinc-300 text-sm block mt-1'>1 anúncio</span>
          </div>
        </a>
        <a href='' className="relative rouded-lg overflow-hidden">
          <img src='/game 3.png' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="font-bold text-white block mt-1">CS-GO</strong>
            <span className='text-zinc-300 text-sm block mt-1'>9 anúncios</span>
          </div>
        </a>
        <a href='' className="relative rouded-lg overflow-hidden">
          <img src='/game 5.png' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="font-bold text-white block mt-1">APEX Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>2 anúncios</span>
          </div>
        </a>
        <a href='' className="relative rouded-lg overflow-hidden">
          <img src='/game 6.png' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="font-bold text-white block mt-1">Fortnite</strong>
            <span className='text-zinc-300 text-sm block mt-1'>16 anúncios</span>
          </div>
        </a>
        <a href='' className="relative rouded-lg overflow-hidden">
          <img src='/game 7.png' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className="font-bold text-white block mt-1">World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block mt-1'>52 anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-4 py-6 flex justify-between">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block mt-2">Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className="my-2 px-7 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
      

    </div>
  )
}

export default App
