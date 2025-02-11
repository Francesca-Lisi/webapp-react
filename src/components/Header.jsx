
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bolder fs-3 ps-3" to='/'>MyMovies</Link>

        </div>
      </nav>
    </header>
  )
}

export default Header