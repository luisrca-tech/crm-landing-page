import { Container } from '~/components/Container';
import { CreatedForYouWithBoxline } from '~/components/blocks/CreatedForYouSection';
import { Hero } from '~/components/blocks/Hero';
import { HeroImage } from '~/components/blocks/HeroImage';
import { ReadyToBuildYourCrm } from '~/components/blocks/ReadyToBuildYourCrm';

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
