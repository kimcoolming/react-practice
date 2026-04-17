import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";

function MainLayout({ children }) {
  return (
    <div className="layout">
      <Header />

      <div className="layout__body">
        <Sidebar />

        <main className="layout__main">
          <div className="inner">{children}</div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
