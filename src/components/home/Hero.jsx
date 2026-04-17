import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">React Study Project</p>
        <h2 className="hero__title">리액트 뿌수기</h2>
        <p className="hero__desc">
          퍼블리셔가 React에서 가장 먼저 익혀야 할 개념과 화면 구성을 직접 만들며 공부하는 공간
        </p>

        <div className="hero__actions">
          <Link to="/guide" className="hero__button hero__button--primary">
            Guide 보러가기
          </Link>
          <Link to="/components" className="hero__button hero__button--ghost">
            Components 보기
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
