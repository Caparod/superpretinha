import {
  About,
  Contact,
  Feed,
  Footer,
  Header,
  Hero,
  Marquee,
  Rapunzel,
  ShopPreview,
  Topics,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Feed />
        <Topics />
        <Rapunzel />
        <ShopPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
