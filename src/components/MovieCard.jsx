
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
          <p>{abstract}</p>
          <address><i>{director}</i></address>
          <div>Voto: {average_vote}</div>


        </div>
      </div>
    </div>
  )
}

export default MovieCard