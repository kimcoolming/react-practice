const cardData = [
  {
    id: 1,
    category: "JSX",
    level: "easy",
    tags: ["JSX", "기초"],
    title: "JSX 기본 문법",
    desc: "리액트에서 화면을 만드는 JSX의 기본 형태를 익혀보자.",
    date: "2026-04-17",
    code: `function App() {
  return <h1>Hello React</h1>;
}`,
    points: [
      "JSX는 자바스크립트 안에서 UI를 작성하는 문법이다.",
      "HTML처럼 보이지만 실제로는 JavaScript 표현식이다.",
      "속성은 class 대신 className을 사용한다.",
    ],
  },
  {
    id: 2,
    category: "Props",
    level: "medium",
    tags: ["Props", "데이터"],
    title: "props로 데이터 전달",
    desc: "부모에서 자식으로 데이터를 넘기는 흐름을 이해하자.",
    date: "2026-04-17",
    code: `<Card title="React" />

function Card({ title }) {
  return <h3>{title}</h3>;
}`,
    points: [
      "부모 컴포넌트가 자식에게 데이터를 전달한다.",
      "props 이름은 넘기는 쪽과 받는 쪽이 일치해야 한다.",
      "데이터 흐름은 기본적으로 위에서 아래 방향이다.",
    ],
  },
  {
    id: 3,
    category: "Router",
    level: "medium",
    tags: ["Router", "URL"],
    title: "상세페이지 연결하기",
    desc: "카드를 클릭해서 URL 파라미터 기반 상세페이지로 이동해보자.",
    date: "2026-04-17",
    code: `<Route path="/detail/:id" element={<Detail />} />

const { id } = useParams();`,
    points: [
      "react-router-dom으로 페이지 이동을 처리한다.",
      "URL 파라미터는 useParams로 읽을 수 있다.",
      "동적 라우팅은 상세페이지 구현의 핵심이다.",
    ],
  },
  {
    id: 4,
    category: "State",
    level: "hard",
    tags: ["State", "UI"],
    title: "useState 기초",
    desc: "탭, 모달, 토글 UI를 만들기 위한 상태 개념을 익혀보자.",
    date: "2026-04-17",
    code: `const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  {count}
</button>`,
    points: [
      "state는 변하는 값을 관리한다.",
      "set 함수가 호출되면 컴포넌트가 다시 렌더링된다.",
      "탭, 모달, 햄버거 메뉴 같은 UI의 핵심이다.",
    ],
  },
];

export default cardData;