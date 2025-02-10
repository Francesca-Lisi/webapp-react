import PropTypes from "prop-types";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const MovieCard = ({ movieData }) => {
  const { id, title, director, genre, release_year, abstract, image, average_vote } = movieData;
  return (
    <div>
      <div className="card m-3">
        <h3 className="card-title m-3">{title}</h3>
        <h6 className="px-3 pb-2">- {release_year} -</h6>
        <img className="card-image movie-image" src={image} alt={title} />
        <div className="card-body">
          <p className="my-2 fw-medium">{genre}</p>
          <p>{abstract || ''}</p>
          <address><i>{director}</i></address>

          <div className="d-flex justify-content-between align-items-center">
            {average_vote && <StarRating vote={average_vote} />}
            <Link to={`movies/${id}`} className="btn btn-outline-warning btn-sm">Vai alle Recensioni</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


MovieCard.propTypes = {
  movieData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genre: PropTypes.string,
    release_year: PropTypes.string,
    abstract: PropTypes.string,
    image: PropTypes.string,
    average_vote: PropTypes.number
  })
}

export default MovieCard