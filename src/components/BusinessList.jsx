import "./BusinessList.css";
import Business from "./Business";

export default function BusinessList({ businesses }) {
  return (
    <div className="business-list">
      {businesses.map((business, businessIndex) => {
        return <Business key={businessIndex} business={business} />;
      })}
    </div>
  );
}
