import { useGlobalContext } from "../context/GlobalContext"
import { use, useEffect } from "react"
import MovieCard from "../components/MovieCard"

const HomePage = () => {

  const { fetchMovies, movies } = useGlobalContext()

  //funzione per renderizzare il ciclo
  const renderMovies = () => {
    return movies.map(movie => {
      return (
        <div className="col" key={movie.id}>
          <MovieCard movieData={movie} />
        </div>
      )
    })
  }

  useEffect(fetchMovies, [])

  return (
    <>
      <h1 className="text-center">Lista dei film</h1>
      <div className="row row-cols-3">
        {renderMovies()}
      </div>

    </>
  )
}

export default HomePage