import { CreatedForYouWithBoxline } from '~/components/blocks/CreatedForYouSection';
import { Hero } from '~/components/blocks/Hero';
import { Container } from '~/components/ui/Container';

export default function HomePage() {
  return (
    <main>
      <Container>
        <Hero />
        <CreatedForYouWithBoxline />
      </Container>
    </main>
  );
}
