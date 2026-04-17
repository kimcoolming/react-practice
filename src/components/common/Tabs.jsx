function Tabs({ tabs, activeTab, onChangeTab }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          className={activeTab === tab ? "is-active" : ""}
          onClick={() => onChangeTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
