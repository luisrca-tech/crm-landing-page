import { CreatedForYouWithBoxline } from '~/components/blocks/CreatedForYouSection';
import { Hero } from '~/components/blocks/HeroSection/Hero';
import { HeroImage } from '~/components/blocks/HeroSection/HeroImage';
import { ReadyToBuildYourCrm } from '~/components/blocks/ReadyToBuildYourCrm';
import { DataAndFlowsWithBoxline } from '~/components/blocks/YourDataAndFlowsSection';
import { Container } from '~/components/Container';

export default function HomePage() {
  return (
    <main>
      <section>
        <Container>
          <Hero />
        </Container>
        <HeroImage />
      </section>
      <section>
        <Container>
          <CreatedForYouWithBoxline />
        </Container>
      </section>
      <section>
        <Container>
          <DataAndFlowsWithBoxline />
        </Container>
      </section>
      <section className="bg-blue-600 mt-20">
        <Container>
          <ReadyToBuildYourCrm />
        </Container>
      </section>
    </main>
  );
}
