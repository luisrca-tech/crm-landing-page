import { ClimbSafely } from '~/components/ClimbSafely';
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
      <Container>
        <section>
          <CreatedForYouWithBoxline />
        </section>
      </Container>
      <Container>
        <section className="pb-[3.375rem] lg:pb-28">
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
