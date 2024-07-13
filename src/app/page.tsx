import { ClimbSafely } from '~/components/ClimbSafely';
import { Container } from '~/components/Container';
import { CreatedForYouWithBoxline } from '~/components/blocks/CreatedForYouSection';
import { Hero } from '~/components/blocks/HeroSection/Hero';
import { HeroImage } from '~/components/blocks/HeroSection/HeroImage';
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
      <Container>
        <section>
          <ClimbSafely />
        </section>
      </Container>
      <section className="bg-blue-600">
        <Container>
          <ReadyToBuildYourCrm />
        </Container>
      </section>
    </main>
  );
}
