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
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="black"
          id="sports"
        />
        <ProductsList
          games={actionGames}
          title="Açao"
          background="gray"
          id="action"
        />
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="black"
          id="rpg"
        />
        <ProductsList
          games={figthGames}
          title="Luta"
          background="gray"
          id="figth"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
