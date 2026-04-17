import { Link, useParams } from "react-router-dom";
import cardData from "../data/mockData";

function Detail() {
  const { id } = useParams();
  const item = cardData.find((card) => card.id === Number(id));

  if (!item) {
    return (
      <section className="detail">
        <h2 className="page-title">상세 페이지</h2>
        <div className="page-box">
          <p>해당 데이터를 찾을 수 없습니다.</p>
          <Link to="/">목록으로 돌아가기</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="detail">
      <h2 className="page-title">상세 페이지</h2>

      <div className="detail-card">
        <span className="detail-card__category">{item.category}</span>
        <h3 className="detail-card__title">{item.title}</h3>
        <p className="detail-card__desc">{item.desc}</p>
        <p className="detail-card__date">등록일: {item.date}</p>
        <Link to="/" className="detail-card__link">
          목록으로 돌아가기
        </Link>
      </div>
    </section>
  );
}

export default Detail;
