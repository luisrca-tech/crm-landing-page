import { Container } from '~/components/Container';
import { Hero } from '~/components/Hero';

export default function HomePage() {
  return (
    <Container>
      <h1>CRM - LANDING PAGE</h1>
      <div className="flex">
      <Hero />
      </div>
    </Container>
  );
}
