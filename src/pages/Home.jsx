import Hero from "../components/home/Hero";
import NoticeBanner from "../components/home/NoticeBanner";
import SectionTitle from "../components/home/SectionTitle";
import CardList from "../components/home/CardList";
import cardData from "../data/mockData";

function Home() {
  return (
    <div className="home">
      <Hero />
      <NoticeBanner />

      <section className="home-section">
        <SectionTitle title="리액트 뿌수기 카드" />
        <CardList items={cardData} />
      </section>
    </div>
  );
}

export default Home;
