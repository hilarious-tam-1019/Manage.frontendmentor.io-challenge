import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Features from './components/features/Features';
import Carousel from './components/carousel/Carousel';
import CTA from './components/cta/CTA';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Features></Features>
        <Carousel></Carousel>
        <CTA></CTA>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
