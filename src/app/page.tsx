import { Container } from '~/components/Container';
import { DataAndFlowsWithBoxline } from '~/components/blocks/DataAndFlowsWithBoxline';

export default function HomePage() {
  return (
    <Container>
      <h1>CRM - LANDING PAGE</h1>
      <div className="flex">
        <DataAndFlowsWithBoxline />
      </div>
    </Container>
  );
}
