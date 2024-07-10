import { Container } from '~/components/Container';
import { DataAndFlowsWithBoxline } from '~/components/blocks/YourDataAndFlowsSection';

export default function HomePage() {
  return (
    <main>
      <section>
        <Container>
          <DataAndFlowsWithBoxline />
        </Container>
      </section>
    </main>
  );
}
