import { Container } from '~/components/Container';
import { AndMuchMore } from '~/components/blocks/AndMuchMoreSection';

export default function HomePage() {
  return (
    <main>
        <div className=" bg-base-600">
          <Container>
            <AndMuchMore />
          </Container>
        </div>
    </main>
  );
}
