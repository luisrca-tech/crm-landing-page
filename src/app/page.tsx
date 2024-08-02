import { Container } from '~/components/Container';
import { CreatedForYouWithBoxline } from '~/components/blocks/CreatedForYouSection';
import { Hero } from '~/components/blocks/HeroSection/Hero';
import { HeroImage } from '~/components/blocks/HeroSection/HeroImage';
import { ReadyToBuildYourCrm } from '~/components/blocks/ReadyToBuildYourCrmSection';

export default function HomePage() {
  return (
    <main>
      <section id="inicio">
        <Container>
          <Hero />
        </Container>
        <HeroImage />
      </section>
      <section className="mb-20">
        <Container>
          <CreatedForYouWithBoxline />
        </Container>
      </section>
      <section className="bg-blue-600">
        <Container>
          <ReadyToBuildYourCrm />
        </Container>
      </section>
    </main>
  );
}
