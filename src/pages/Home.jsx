import Hero from "../components/home/Hero";
import NoticeBanner from "../components/home/NoticeBanner";
import SectionTitle from "../components/home/SectionTitle";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Hero />
      <NoticeBanner />

      <section className="home-intro">
        <SectionTitle title="이 사이트에서 배우는 것" />

        <div className="home-intro__grid">
          <article className="home-intro__card">
            <h3>1. 구조 이해</h3>
            <p>pages, components, layouts, routes를 나누는 기준 익히기</p>
          </article>

          <article className="home-intro__card">
            <h3>2. 데이터 흐름</h3>
            <p>props, map, import/export, mock data 연결 흐름 익히기</p>
          </article>

          <article className="home-intro__card">
            <h3>3. 상태 제어</h3>
            <p>useState로 탭, 모달, 토글 UI 구현하기</p>
          </article>
        </div>
      </section>

      <section className="home-start">
        <SectionTitle title="학습 시작하기" />

        <div className="home-start__box">
          <p>학습 카드 목록으로 이동해서 각 개념의 상세 페이지를 따라가며 공부해보자.</p>
          <Link to="/study" className="home-start__button">
            Study 보러가기
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;