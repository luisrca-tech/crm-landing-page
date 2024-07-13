import { CreatedForYouWithBoxline } from '~/components/blocks/CreatedForYouSection';
import { Hero } from '~/components/blocks/HeroSection/Hero';
import { HeroImage } from '~/components/blocks/HeroSection/HeroImage';
import { LovedByEnterprising } from '~/components/blocks/LovedByEnterprisingSection';
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
      <div className="bg-base-600 lg:bg-base-dark-600">
        <Container>
          <section>
            <LovedByEnterprising />
          </section>
        </Container>
      </div>
    </main>
  );
}
