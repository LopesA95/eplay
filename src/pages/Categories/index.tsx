import { ProductsList } from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFigthGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

export const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: figthGames } = useGetFigthGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulationGames && figthGames && rpgGames) {
    return (
      <>
        <ProductsList games={sportGames} title="Esportes" background="black" />
        <ProductsList games={actionGames} title="Açao" background="gray" />
        <ProductsList games={rpgGames} title="RPG" background="black" />
        <ProductsList games={figthGames} title="Luta" background="gray" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
