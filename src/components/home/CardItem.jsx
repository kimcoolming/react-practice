import { Link } from "react-router-dom";

function CardItem({ item }) {
  return (
    <Link to={`/detail/${item.id}`} className="card-item">
      <div className="card-item__top">
        <span className="card-item__category">{item.category}</span>
        <span className={`card-item__level ${item.level}`}>
          {item.level}
        </span>
      </div>

      <h3 className="card-item__title">{item.title}</h3>
      <p className="card-item__desc">{item.desc}</p>

      <div className="card-item__tags">
        {item.tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </div>

      <p className="card-item__date">{item.date}</p>
    </Link>
  );
}

export default CardItem;