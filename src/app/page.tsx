import { Container } from '~/components/Container';
import { ReadyToBuildYourCrm } from '~/components/ReadyToBuildYourCrmSection';
import { CreatedForYouWithBoxline } from '~/components/blocks/CreatedForYouSection';
import { Hero } from '~/components/blocks/HeroSection/Hero';
import { HeroImage } from '~/components/blocks/HeroSection/HeroImage';

export default function HomePage() {
  return (
    <main>
      <section>
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
