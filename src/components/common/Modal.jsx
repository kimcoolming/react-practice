function Modal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3 className="modal__title">React 퍼블리싱 연습 포인트</h3>
        <p className="modal__desc">
          이 모달은 useState로 열고 닫습니다. 실무에서는 안내 팝업, 확인창, 상세 정보 레이어 등으로 자주 쓰입니다.
        </p>

        <div className="modal__actions">
          <button type="button" className="btn btn--light" onClick={onClose}>
            닫기
          </button>
          <button type="button" className="btn btn--primary">
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
