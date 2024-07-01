import { Container } from '~/components/Container';
import { MuchMore } from '~/components/blocks/MuchMore';

export default function HomePage() {
  return (
    <>
      <Container>
        <h1>CRM - LANDING PAGE</h1>
      </Container>
      <div className="min-h-screen bg-base-600">
        <Container>
          <MuchMore />
        </Container>
      </div>
    </>
  );
}
