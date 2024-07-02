import { CreatedForYouAndBoxline } from '~/components/blocks/CreatedForYouSection/CreatedForYou';
import { Hero } from '~/components/blocks/Hero';
import { Container } from '~/components/ui/Container';

export default function HomePage() {
  return (
    <main>
      <Container>
        <Hero />
        <CreatedForYouAndBoxline />
      </Container>
    </main>
  );
}
