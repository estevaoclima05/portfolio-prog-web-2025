import Header from "../components/Header";
import Hero from "../components/Hero";
import Weather from "../components/Weather";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-container">
        <Hero />
        <Weather />
      </main>
      <Footer />
    </>
  );
}
