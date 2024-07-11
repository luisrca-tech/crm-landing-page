import { Container } from '~/components/Container';
import { LovedByEnterprising } from '~/components/blocks/LovedByEnterprisingSection';

export default function HomePage() {
  return (
    <main>
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
