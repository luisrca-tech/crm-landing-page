import { Container } from '~/components/Container';
import { DataAndFlowsWithBoxline } from '~/components/blocks/YourDataAndFlowsSection';

export default function HomePage() {
  return (
    <Container>
      <h1>CRM - LANDING PAGE</h1>
      <section>
        <DataAndFlowsWithBoxline />
      </section>
    </Container>
  );
}
