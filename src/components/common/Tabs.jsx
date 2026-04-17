import { useState } from "react";

const tabData = {
  jsx: {
    title: "JSX",
    desc: "자바스크립트 안에서 UI를 HTML처럼 작성하는 문법",
  },
  props: {
    title: "Props",
    desc: "부모에서 자식으로 데이터를 전달하는 방식",
  },
  state: {
    title: "State",
    desc: "값이 바뀌면 화면이 다시 그려지는 리액트 상태",
  },
};

function Tabs() {
  const [activeTab, setActiveTab] = useState("jsx");

  return (
    <div className="tabs">
      <div className="tabs__nav">
        <button type="button" className={activeTab === "jsx" ? "active" : ""} onClick={() => setActiveTab("jsx")}>
          JSX
        </button>
        <button type="button" className={activeTab === "props" ? "active" : ""} onClick={() => setActiveTab("props")}>
          Props
        </button>
        <button type="button" className={activeTab === "state" ? "active" : ""} onClick={() => setActiveTab("state")}>
          State
        </button>
      </div>

      <div className="tabs__panel">
        <h4>{tabData[activeTab].title}</h4>
        <p>{tabData[activeTab].desc}</p>
      </div>
    </div>
  );
}

export default Tabs;
