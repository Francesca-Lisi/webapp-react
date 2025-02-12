import StarRating from "./StarRating"


const ReviewCard = ({ review }) => {
  return (
    <div className="card my-3">
      <div className="card-header fw-bold">
        - {review.name}
      </div>
      <div className="card-body">
        <p>{review.text}</p>
        <div className="d-flex">
          <span className="me-2">Voto: {review.vote}</span> <StarRating vote={review.vote} /> </div>
      </div>
    </div>
  )
}

export default ReviewCard