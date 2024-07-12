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
      <Container>
        <section>
          <CreatedForYouWithBoxline />
        </section>
      </Container>
      <div className="min-h-screen bg-blue-600">
        <Container className="bg-blue-600">
          <ReadyToBuildYourCrm />
        </Container>
      </div>
    </main>
  );
}
