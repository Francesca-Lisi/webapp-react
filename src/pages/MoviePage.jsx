import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import StarRating from "../components/StarRating";
import ReviewCard from "../components/ReviewCard";

const MoviePage = () => {
  const { id } = useParams();
  const { movie, fetchMovie } = useGlobalContext();

  const renderReviews = () => {
    return movie.reviews.map(item => <ReviewCard key={item.id} review={item} />)

  }

  useEffect(() => fetchMovie(id), [])

  return (
    <>
      <header className="container">
        <div className="d-flex border rounded p-3" >

          {movie?.image && <img src={movie?.image} alt={movie?.title} className="image-cover" />}

          <div className="px-3">
            <h1>{movie?.title}</h1>
            <h5 className="mb-3">{movie?.director}</h5>
            <p>Genere: {movie?.genre}</p>
            <p className="py-4">{movie?.abstract}</p>
            <p className="card-text"><small>Anno: {movie?.release_year}</small></p>
            <div>
              {/* <span>Voto: {movie?.average_vote}</span> */}
              <StarRating vote={movie?.average_vote} />
            </div>
          </div>

        </div>
      </header>


      <section>
        {movie?.reviews && renderReviews()}

      </section>

      <footer></footer>
    </>
  )
}

export default MoviePage