import Tabs from "../components/common/Tabs";
import Modal from "../components/common/Modal";

function ComponentsPage() {
  return (
    <section className="components-page">
      <h2 className="page-title">Components</h2>

      <div className="components-page__grid">
        <article className="component-box">
          <h3>Tabs</h3>
          <p>useState로 현재 탭 상태를 바꾸는 연습</p>
          <Tabs />
        </article>

        <article className="component-box">
          <h3>Modal</h3>
          <p>버튼 클릭으로 열고 닫는 상태 제어 연습</p>
          <Modal />
        </article>

        <article className="component-box">
          <h3>Card</h3>
          <p>목록형 UI와 상세 페이지 이동 구조 연습</p>
        </article>

        <article className="component-box">
          <h3>Banner</h3>
          <p>재사용 가능한 안내 영역과 섹션 구분 UI</p>
        </article>
      </div>
    </section>
  );
}

export default ComponentsPage;
