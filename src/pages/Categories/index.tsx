import { ProductsList } from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFigthGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

export const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: figthGames, isLoading: isLoadingFigth } =
    useGetFigthGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={sportGames}
        title="Esportes"
        background="black"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={actionGames}
        title="Açao"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductsList
        games={figthGames}
        title="Luta"
        background="gray"
        id="figth"
        isLoading={isLoadingFigth}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}
