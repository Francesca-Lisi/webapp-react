import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <div className="text-center">
      <h1 className="mt-4 text-danger">ERROR 404</h1>
      <h5 className="my-3">Pagina non trovata</h5>
      <Link to='/' className="btn btn-outline-danger">Torna alla Home</Link>
    </div>
  )
}

export default Error404