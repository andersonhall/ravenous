export default function Business({ business }) {
  return (
    <div className="business">
      <img src={business.imageSrc} alt="" className="business-img" />
      <h3 className="business-name">{business.name}</h3>
      <div className="business-info">
        <div className="business-info-left">
          <p className="business-address">{business.address}</p>
          <p className="business-city">{business.city}</p>
          <p className="business-state-zip">
            {business.state} {business.zipCode}
          </p>
        </div>
        <div className="business-info-right">
          <p className="business-category">{business.category}</p>
          <p className="business-rating">{business.rating} stars</p>
          <p className="business-review-count">
            {business.reviewCount} reviews
          </p>
        </div>
      </div>
    </div>
  );
}
