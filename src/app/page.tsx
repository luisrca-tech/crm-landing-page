import { Container } from '~/components/Container';
import { LovedByEnterprising } from '~/components/blocks/LovedByEnterprisingSection';

export default function HomePage() {
  return (
    <main>
      <Container>
        <h1>CRM - LANDING PAGE</h1>
      </Container>
      <div className="bg-base-dark-600">
        <Container>
          <section>
            <LovedByEnterprising />
          </section>
        </Container>
      </div>
    </main>
  );
}
