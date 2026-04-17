import CardItem from "./CardItem";

function CardList({ items = [] }) {
  if (items.length === 0) {
    return <p>등록된 카드가 없습니다.</p>;
  }

  return (
    <div className="card-list">
      {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CardList;
