import { useState } from "react";
import SectionTitle from "../components/home/SectionTitle";
import CardList from "../components/home/CardList";
import cardData from "../data/mockData";

function Study() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredData =
    activeFilter === "all"
      ? cardData
      : cardData.filter((item) => item.level === activeFilter);

  return (
    <section className="study">
      <SectionTitle title="학습 카드 목록" />

      <p className="study__desc">
        React 핵심 개념을 카드 형태로 정리한 학습 리스트
      </p>

      <div className="study-filter">
        <button
          className={activeFilter === "all" ? "active" : ""}
          onClick={() => setActiveFilter("all")}
        >
          전체
        </button>

        <button
          className={activeFilter === "easy" ? "active" : ""}
          onClick={() => setActiveFilter("easy")}
        >
          easy
        </button>

        <button
          className={activeFilter === "medium" ? "active" : ""}
          onClick={() => setActiveFilter("medium")}
        >
          medium
        </button>

        <button
          className={activeFilter === "hard" ? "active" : ""}
          onClick={() => setActiveFilter("hard")}
        >
          hard
        </button>
      </div>

      <CardList items={filteredData} />
    </section>
  );
}

export default Study;