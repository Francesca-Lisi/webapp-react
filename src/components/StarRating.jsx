

const StarRating = ({ vote }) => {
  console.log(vote)
  const negativeValue = 100 - (vote * 2 * 10)
  console.log('val', negativeValue)
  return (
    <div>
      <div className="position-relative star-bottom">
        <i className="bi bi-star-fill text-warning "></i>
        <i className="bi bi-star-fill text-warning"></i>
        <i className="bi bi-star-fill text-warning"></i>
        <i className="bi bi-star-fill text-warning"></i>
        <i className="bi bi-star-fill text-warning"></i>
        <div className="position-absolute top-0 end-0 star-middle" style={{ width: negativeValue + '%' }} ></div>
        <div className="position-absolute top-0 start-0 star-top">
          <i className="bi bi-star "></i>
          <i className="bi bi-star "></i>
          <i className="bi bi-star "></i>
          <i className="bi bi-star "></i>
          <i className="bi bi-star "></i>
        </div>

      </div>
    </div>
  )
}

export default StarRating