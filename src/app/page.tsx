import { AndMuchMore } from '~/components/blocks/AndMuchMoreSection';
import { CreatedForYouWithBoxline } from '~/components/blocks/CreatedForYouSection';
import { Hero } from '~/components/blocks/Hero';
import { HeroImage } from '~/components/blocks/HeroImage';
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
      <section className=" bg-base-600 lg:bg-base-dark-600">
        <Container>
          <AndMuchMore />
        </Container>
      </section>
    </main>
  );
}
