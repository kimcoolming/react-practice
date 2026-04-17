function Guide() {
  return (
    <section className="guide">
      <h2 className="page-title">Guide</h2>

      <div className="guide__grid">
        <article className="guide-card">
          <h3>JSX</h3>
          <p>자바스크립트 안에서 UI를 작성하는 리액트 문법.</p>
        </article>

        <article className="guide-card">
          <h3>Props</h3>
          <p>부모 컴포넌트가 자식에게 전달하는 데이터.</p>
        </article>

        <article className="guide-card">
          <h3>State</h3>
          <p>사용자 동작에 따라 변하는 값과 화면 상태.</p>
        </article>

        <article className="guide-card">
          <h3>Router</h3>
          <p>URL에 따라 다른 페이지를 보여주는 구조.</p>
        </article>
      </div>
    </section>
  );
}

export default Guide;
