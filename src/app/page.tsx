import { Container } from '~/components/Container';
import { MadeForTeamWithBoxLine } from '~/components/blocks/MadeForTeam';

export default function HomePage() {
  return (
    <Container>
      <h1>CRM - LANDING PAGE</h1>
      <div className="flex">
        <MadeForTeamWithBoxLine />
      </div>
    </Container>
  );
}
