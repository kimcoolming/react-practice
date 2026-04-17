function GuideSection({ item }) {
  return (
    <div className="guide-section">
      <h3 className="guide-section__title">{item.title}</h3>
      <p className="guide-section__desc">{item.desc}</p>

      <pre className="guide-code">{item.code}</pre>

      <ul className="guide-point">
        {item.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default GuideSection;
