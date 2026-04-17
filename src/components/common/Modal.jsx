import { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="modal-demo">
      <button type="button" className="modal-demo__open" onClick={() => setIsOpen(true)}>
        모달 열기
      </button>

      {isOpen && (
        <div className="modal">
          <div className="modal__dim" onClick={() => setIsOpen(false)}></div>

          <div className="modal__content">
            <h4 className="modal__title">기본 모달</h4>
            <p className="modal__desc">useState로 열고 닫는 상태를 제어하는 가장 기본적인 예제</p>

            <button type="button" className="modal__close" onClick={() => setIsOpen(false)}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
