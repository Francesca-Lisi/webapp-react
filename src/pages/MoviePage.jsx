import { useParams, Link, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import StarRating from "../components/StarRating";
import ReviewCard from "../components/ReviewCard";

const MoviePage = () => {
  const { id } = useParams();
  const { movie, fetchMovie } = useGlobalContext();
  const redirect = useNavigate();

  const renderReviews = () => {
    return movie.reviews.map(item => <ReviewCard key={item.id} review={item} />)

  }

  useEffect(() => fetchMovie(id, () => redirect('/404')), [])

  return (
    <>
      <header className="container">

        <div className="card p-3">
          <div className="d-flex">
            <div className="">
              {movie?.image && <img src={movie?.image} alt={movie?.title} className="image-cover" />}
            </div>

            <div className="ms-3 container-fluid">
              <h1>{movie?.title}</h1>
              <h5 className="mb-3">{movie?.director}</h5>
              <p>Genere: {movie?.genre}</p>
              <p className="py-4">{movie?.abstract}</p>
              <p className="card-text"><small>Anno: {movie?.release_year}</small></p>
              <div className="d-flex justify-content-between align-items-center">
                <StarRating vote={movie?.average_vote} />
                <Link to='/' className="btn btn-outline-secondary">Torna all'elenco</Link>
              </div>
            </div>
          </div>
        </div>



        {/* <div className="d-flex border rounded p-3" >

          {movie?.image && <img src={movie?.image} alt={movie?.title} className="image-cover" />}

          <div className="px-3">
            <h1>{movie?.title}</h1>
            <h5 className="mb-3">{movie?.director}</h5>
            <p>Genere: {movie?.genre}</p>
            <p className="py-4">{movie?.abstract}</p>
            <p className="card-text"><small>Anno: {movie?.release_year}</small></p>
            <div className="d-flex justify-content-between">
              <StarRating vote={movie?.average_vote} />
              <Link to='/' className="btn">Torna all'elenco</Link>
            </div>
          </div> 

      </div>*/}
      </header >


      <section className="container my-3">
        {movie?.reviews && renderReviews()}

      </section>

      <footer></footer>
    </>
  )
}

export default MoviePage