import { FC } from 'react'
import '../styles/mainLayout.css'

interface MainLayoutProps {
  title?: string
}

export const MainLayout: FC<MainLayoutProps> = ({
  title = 'Pokedex',
  children
}) => {
  return (
    <div>
      <h1>{ title }</h1>
      <hr />
      <main className="pokemon-container">
        { children }
      </main>
      <nav className="pagination">
        <ul className="pagination">
          <li id="previous" className="page-item disabled"><button className="page-link" id="previous-btn">Previous</button></li>
          <li id="next" className="page-item"><button className="page-link">Next</button></li>
        </ul>
      </nav>
      <div className="spinner-border text-warning" role="status" id="spinner">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
