import { CreatedForYouWithBoxline } from '~/components/blocks/CreatedForYouSection';
import { Hero } from '~/components/blocks/HeroSection/Hero';
import { HeroImage } from '~/components/blocks/HeroSection/HeroImage';
import { DataAndFlowsWithBoxline } from '~/components/blocks/YourDataAndFlowsSection';
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
    </main>
  );
}
