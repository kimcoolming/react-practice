import { Link } from "react-router-dom";

function CardItem({ item }) {
  return (
    <Link to={`/detail/${item.id}`} className="card-item">
      <span className="card-item__category">{item.category}</span>
      <h3 className="card-item__title">{item.title}</h3>
      <p className="card-item__desc">{item.desc}</p>
      <span className="card-item__date">{item.date}</span>
    </Link>
  );
}

export default CardItem;
