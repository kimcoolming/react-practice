function FileTree() {
  return (
    <div className="file-tree">
      <pre>{`react-practice/
├─ .github/
│  └─ workflows/
│     └─ deploy.yml
├─ public/
├─ src/
│  ├─ assets/
│  │  └─ styles/
│  │     ├─ _common.scss
│  │     ├─ _components.scss
│  │     ├─ _contact.scss
│  │     ├─ _detail.scss
│  │     ├─ _guide.scss
│  │     ├─ _home.scss
│  │     ├─ _layout.scss
│  │     ├─ _mixin.scss
│  │     ├─ _reset.scss
│  │     ├─ _variables.scss
│  │     └─ main.scss
│  ├─ components/
│  │  ├─ common/
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Header.jsx
│  │  │  ├─ Modal.jsx
│  │  │  ├─ Sidebar.jsx
│  │  │  └─ Tabs.jsx
│  │  ├─ guide/
│  │  │  ├─ FileTree.jsx
│  │  │  └─ GuideSection.jsx
│  │  └─ home/
│  │     ├─ CardItem.jsx
│  │     ├─ CardList.jsx
│  │     ├─ Hero.jsx
│  │     ├─ NoticeBanner.jsx
│  │     └─ SectionTitle.jsx
│  ├─ data/
│  │  ├─ guideData.js
│  │  └─ mockData.js
│  ├─ layouts/
│  │  └─ MainLayout.jsx
│  ├─ pages/
│  │  ├─ ComponentsPage.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Detail.jsx
│  │  ├─ Guide.jsx
│  │  └─ Home.jsx
│  ├─ routes/
│  │  └─ index.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js`}</pre>
    </div>
  );
}

export default FileTree;