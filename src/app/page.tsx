import { Container } from '~/components/Container';
import { LovedBy } from '~/components/blocks/LovedBy';

export default function HomePage() {
  return (
    <>
      <Container>
        <h1>CRM - LANDING PAGE</h1>
      </Container>
      <div className="bg-base-600">
        <Container>
          <LovedBy />
        </Container>
      </div>
    </>
  );
}
