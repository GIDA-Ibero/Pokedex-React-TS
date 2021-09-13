import { MainLayout } from "./layout/MainLayout"
import { PokemonCard } from './components/PokemonCard';

export const App = () => {
  return (
    <MainLayout>
      <PokemonCard />
    </MainLayout>
  )
}
