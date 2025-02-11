import StarRating from "./StarRating"


const ReviewCard = ({ review }) => {
  return (
    <div className="card">
      <div className="card-header">
        {review.name}
      </div>
      <div className="card-body">
        <p>{review.text}</p>
        <div>Voto: {review.vote} <StarRating vote={review.vote} /> </div>
      </div>
    </div>
  )
}

export default ReviewCard