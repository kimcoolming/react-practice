import { Link, useParams } from "react-router-dom";
import cardData from "../data/mockData";

function Detail() {
  const { id } = useParams();
  const currentId = Number(id);

  const item = cardData.find((card) => card.id === currentId);
  const currentIndex = cardData.findIndex((card) => card.id === currentId);

  const prevItem = currentIndex > 0 ? cardData[currentIndex - 1] : null;
  const nextItem = currentIndex < cardData.length - 1 ? cardData[currentIndex + 1] : null;

  if (!item) {
    return (
      <section className="detail">
        <h2 className="page-title">상세 페이지</h2>

        <div className="page-box">
          <p>해당 데이터를 찾을 수 없습니다.</p>
          <Link to="/study" className="detail-card__link">
            목록으로 돌아가기
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="detail">
      <h2 className="page-title">학습 상세 페이지</h2>

      <div className="detail-card">
        <div className="detail-card__top">
          <span className="detail-card__category">{item.category}</span>
          <span className={`detail-card__level ${item.level}`}>{item.level}</span>
        </div>

        <h3 className="detail-card__title">{item.title}</h3>
        <p className="detail-card__desc">{item.desc}</p>

        <div className="detail-card__tags">
          {item.tags.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>

        <p className="detail-card__date">등록일: {item.date}</p>

        <div className="detail-card__code">
          <h4>예제 코드</h4>
          <pre>{item.code}</pre>
        </div>

        <div className="detail-card__points">
          <h4>핵심 포인트</h4>
          <ul>
            {item.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="detail-card__actions">
          <Link to="/study" className="detail-card__link">
            목록으로 돌아가기
          </Link>
        </div>
      </div>

      <div className="detail-nav">
        {prevItem ? (
          <Link to={`/detail/${prevItem.id}`} className="detail-nav__button">
            ← 이전: {prevItem.title}
          </Link>
        ) : (
          <span className="detail-nav__button is-disabled">이전 글 없음</span>
        )}

        {nextItem ? (
          <Link to={`/detail/${nextItem.id}`} className="detail-nav__button">
            다음: {nextItem.title} →
          </Link>
        ) : (
          <span className="detail-nav__button is-disabled">다음 글 없음</span>
        )}
      </div>
    </section>
  );
}

export default Detail;