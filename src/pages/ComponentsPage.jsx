function ComponentsPage() {
  return (
    <section className="components-page">
      <h2 className="page-title">Components</h2>

      <div className="components-page__grid">
        <article className="component-box">
          <h3>Card</h3>
          <p>목록 UI와 상세 페이지 이동 실습용 카드.</p>
        </article>

        <article className="component-box">
          <h3>Tabs</h3>
          <p>state로 탭 상태를 바꾸는 연습용 컴포넌트.</p>
        </article>

        <article className="component-box">
          <h3>Modal</h3>
          <p>열기/닫기 흐름을 익히는 기본 모달 구조.</p>
        </article>

        <article className="component-box">
          <h3>Banner</h3>
          <p>상단 알림 영역과 재사용 섹션 UI.</p>
        </article>
      </div>
    </section>
  );
}

export default ComponentsPage;
