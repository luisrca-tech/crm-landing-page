import { CreatedForYouAndBoxline } from '~/components/blocks/CreatedForYouAndBoxline';
import { Hero } from '~/components/blocks/Hero';
import { Container } from '~/components/ui/Container';

export default function HomePage() {
  return (
    <main>
      <Container>
        <h1>CRM - LANDING PAGE</h1>
        <Hero />
        <div className="flex">
          <CreatedForYouAndBoxline />
        </div>
      </Container>
    </main>
  );
}
