import { useState } from "react";
import FileTree from "../components/guide/FileTree";
import GuideSection from "../components/guide/GuideSection";
import guideData from "../data/guideData";

function Guide() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredData =
    activeCategory === "all"
      ? guideData
      : guideData.filter((item) => item.category === activeCategory);

  return (
    <section className="guide">
      <h2 className="page-title">React Guide</h2>

      <div className="guide-summary">
        <p>
          이 페이지는 React를 공부할 때 가장 먼저 잡아야 하는 핵심 개념과
          현재 프로젝트 구조를 함께 정리한 학습 노트다.
        </p>
      </div>

      <div className="guide-structure">
        <h3 className="guide-subtitle">프로젝트 전체 구조</h3>
        <p className="guide-structure__desc">
          현재 프로젝트를 폴더와 파일 기준으로 정리한 전체 구조
        </p>
        <FileTree />
      </div>

      <div className="guide-filter">
        <button
          type="button"
          className={activeCategory === "all" ? "active" : ""}
          onClick={() => setActiveCategory("all")}
        >
          전체
        </button>

        <button
          type="button"
          className={activeCategory === "basic" ? "active" : ""}
          onClick={() => setActiveCategory("basic")}
        >
          기초
        </button>

        <button
          type="button"
          className={activeCategory === "data" ? "active" : ""}
          onClick={() => setActiveCategory("data")}
        >
          데이터
        </button>

        <button
          type="button"
          className={activeCategory === "router" ? "active" : ""}
          onClick={() => setActiveCategory("router")}
        >
          라우터
        </button>
      </div>

      <div className="guide__list">
        {filteredData.map((item) => (
          <GuideSection key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Guide;