import { useEffect, useState } from 'react';
import { GameController, MagnifyingGlassPlus } from 'phosphor-react';
import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from './components/CreateAdModal';


function App() {


  interface Game{
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
      ads: number;
    }
  }

  const [games, setGames] = useState<Game[]>([]);


  useEffect(()=>{
    fetch('http://localhost:3333/games').then(res => res.json()).then(data => {
      setGames(data);
    })
  })

  return(
    <div className='max-w-[1344] mx-auto flex-col flex items-center my-20'>
      <img src={logoImg} alt="" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo </span>está aqui.
      </h1>
    
      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return(
            <GameBanner
            key={game.id} 
            bannerUrl={game.bannerUrl} 
            title={game.title} 
            adsCount={game._count.ads}
            ></GameBanner>
          )
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner></CreateAdBanner>

        <CreateAdModal></CreateAdModal>

      </Dialog.Root>
    </div>
    
  )
}

export default App
