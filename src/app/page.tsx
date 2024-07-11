import { ClimbSafely } from '~/components/ClimbSafely';
import { Container } from '~/components/Container';

export default function HomePage() {
  return (
    <main>
      <Container>
        <section>
          <ClimbSafely />
        </section>
      </Container>
    </main>
  );
}
