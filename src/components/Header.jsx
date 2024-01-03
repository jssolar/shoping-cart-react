import Filters from './Filters'

const Header = ({changeFilters}) => {
  return (
    <header>
      <h1>React Shop 🛒</h1>
      <Filters changeFilters={changeFilters} />
    </header >
  )
}

export default Header
