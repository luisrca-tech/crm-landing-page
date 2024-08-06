import { ClimbSafely } from '~/components/ClimbSafely';
import { Container } from '~/components/Container';
import { AndMuchMore } from '~/components/blocks/AndMuchMoreSection';
import { CreatedForYouWithBoxline } from '~/components/blocks/CreatedForYouSection';
import { Footer } from '~/components/blocks/FooterSection';
import { Hero } from '~/components/blocks/HeroSection/Hero';
import { HeroImage } from '~/components/blocks/HeroSection/HeroImage';
import { LovedByEnterprising } from '~/components/blocks/LovedByEnterprisingSection';
import { ReadyToBuildYourCrm } from '~/components/blocks/ReadyToBuildYourCrmSection';

export default function HomePage() {
  return (
    <main>
      <section id="inicio">
        <Container>
          <Hero />
        </Container>
        <HeroImage />
      </section>
      <Container>
        <section>
          <CreatedForYouWithBoxline />
        </section>
      </Container>
      <Container>
        <section className="pb-[3.375rem] lg:pb-28">
          <ClimbSafely />
        </section>
      </Container>
      <section className=" bg-base-600 lg:bg-base-dark-600">
        <Container>
          <AndMuchMore />
        </Container>
      </section>
      <section className="bg-base-600 lg:bg-base-dark-600">
        <Container>
          <LovedByEnterprising />
        </Container>
      </section>
      <section className="mt-20 bg-blue-600">
        <Container>
          <ReadyToBuildYourCrm />
        </Container>
      </section>
      <div className="relative bg-base-600 lg:bg-base-dark-600">
        <div className="absolute bottom-24 hidden w-full border  border-base-400 lg:block"></div>
        <Container>
          <Footer />
        </Container>
      </div>
    </main>
  );
}
