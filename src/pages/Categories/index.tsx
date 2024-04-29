import { useEffect, useState } from 'react'
import { ProductsList } from '../../components/ProductsList'
import { Game } from '../Home'

export const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((response) => response.json())
      .then((res) => setGamesAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((response) => response.json())
      .then((res) => setGamesEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((response) => response.json())
      .then((res) => setGamesRPG(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((response) => response.json())
      .then((res) => setGamesLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((response) => response.json())
      .then((res) => setGamesSimulacao(res))
  }, [])

  return (
    <>
      <ProductsList games={gamesEsportes} title="Esportes" background="black" />
      <ProductsList games={gamesAcao} title="Açao" background="gray" />
      <ProductsList games={gamesRPG} title="RPG" background="black" />
      <ProductsList games={gamesLuta} title="Luta" background="gray" />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
      />
    </>
  )
}
