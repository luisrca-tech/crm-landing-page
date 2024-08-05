import Image from 'next/image';
import { Container } from '~/components/Container';
import HeroImageData from '/public/images/Hero.png';

export function HeroImage() {
  return (
    <>
      <div className="lg:hidden">
        <Image
          priority
          src={HeroImageData}
          alt="Imagem de um gráfico de tarefas"
        />
      </div>
      <div>
        <Container>
          <div className="hidden lg:block">
            <Image
              priority
              src={HeroImageData}
              alt="Imagem de um gráfico de tarefas"
            />
          </div>
        </Container>
      </div>
    </>
  );
}
