import { Container } from '~/components/Container';
import { LovedBy } from '~/components/blocks/LovedBy';

export default function HomePage() {
  return (
    <>
      <Container>
        <h1>CRM - LANDING PAGE</h1>
      </Container>
      <div className="min-h-screen bg-base-600">
        <Container hasBgBlack>
          <LovedBy />
        </Container>
      </div>
    </>
  );
}
