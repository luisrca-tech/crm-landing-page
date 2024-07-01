import { Container } from '~/components/Container';
import { ReadyToBuildYourCrm } from '~/components/blocks/ReadyToBuildYourCrm';

export default function HomePage() {
  return (
    <>
      <Container>
        <h1>CRM - LANDING PAGE</h1>
      </Container>
      <div className="min-h-screen bg-blue-600">
        <Container className="bg-blue-600">
          <ReadyToBuildYourCrm />
        </Container>
      </div>
    </>
  );
}
