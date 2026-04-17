const guideData = [
  {
    id: 1,
    category: "basic",
    title: "JSX",
    desc: "JSX는 자바스크립트 안에서 HTML처럼 UI를 작성하는 문법이다.",
    code: `function App() {
  return <h1>Hello React</h1>;
}`,
    points: ["HTML처럼 보여도 JavaScript", "className 사용"],
  },
  {
    id: 2,
    category: "data",
    title: "Props",
    desc: "부모 컴포넌트가 자식에게 데이터를 전달",
    code: `<Card title="React" />`,
    points: ["데이터는 위→아래", "이름 일치"],
  },
  {
    id: 3,
    category: "basic",
    title: "State",
    desc: "값이 바뀌면 UI도 바뀐다",
    code: `useState(0)`,
    points: ["상태 관리", "렌더링 트리거"],
  },
  {
    id: 4,
    category: "router",
    title: "Router",
    desc: "URL 기반 페이지 전환",
    code: `useParams()`,
    points: ["동적 라우팅", "URL 값 읽기"],
  },
  {
    id: 5,
    category: "data",
    title: "Map",
    desc: "배열 반복 렌더링",
    code: `items.map(...)`,
    points: ["반복 렌더링", "key 필수"],
  },
  {
    id: 6,
    category: "data",
    title: "Import / Export",
    desc: "파일 간 데이터 연결",
    code: `export default`,
    points: ["default vs named"],
  },
];

export default guideData;
