import { CreatedForYouWithBoxline } from '~/components/blocks/CreatedForYouSection';
import { Footer } from '~/components/blocks/FooterSection';
import { Hero } from '~/components/blocks/HeroSection/Hero';
import { HeroImage } from '~/components/blocks/HeroSection/HeroImage';
import { Container } from '~/components/ui/Container';

export default function HomePage() {
  return (
    <main>
      <section>
        <Container>
          <Hero />
        </Container>
        <HeroImage />
      </section>
      <Container>
        <section>
          <CreatedForYouWithBoxline />
        </section>
      </Container>
      <div className="relative bg-base-600 lg:bg-base-dark-600">
        <div className="absolute bottom-24 hidden w-full border  border-base-400 lg:block"></div>
        <Container>
          <footer>
            <Footer />
          </footer>
        </Container>
      </div>
    </main>
  );
}
