import { Container } from '~/components/Container';
import { AndMuchMore } from '~/components/blocks/AndMuchMoreSection';

export default function HomePage() {
  return (
    <main>
        <div className="min-h-screen bg-base-600">
          <Container>
            <AndMuchMore />
          </Container>
        </div>
    </main>
  );
}
