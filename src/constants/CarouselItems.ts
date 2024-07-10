import { type StaticImageData } from 'next/image';

// Icons
import Grid from '/public/images/Grid.png';
import Shiny from '/public/images/Shiny.png';
import Chart from '/public/images/Chart.png';

// Images
import Construct from '/public/images/Construct.png';
import Refine from '/public/images/Refine.png';
import Work from '/public/images/Work.png';

// Images desktop
import ConstructDesktop from '/public/images/ConstructDesktop.png';
import RefineDesktop from '/public/images/RefineDesktop.png';

interface CarouselItemsProps {
  id: string;
  icon: StaticImageData;
  altIcon: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageDesktop?: StaticImageData;
  alt: string;
}

export const CarouselItems: CarouselItemsProps[] = [
  {
    id: '1',
    icon: Grid,
    title: 'Construa',
    altIcon: 'Icone de grade',
    description:
      'Crie o CRM dos seus sonhos com poderosos e flexiveis templates para cada caso',
    image: Construct,
    imageDesktop: ConstructDesktop,
    alt: 'Imagem de um quadro de tarefas'
  },
  {
    id: '2',
    icon: Grid,
    altIcon: 'Icone de grade',
    title: 'Refina',
    description:
      'Use a interface intuitiva do Attio e blocos ultrapersonalizáveis ​​para criar seus fluxos de trabalhoideais.',
    image: Refine,
    imageDesktop: RefineDesktop,
    alt: 'Imagem de um fluxograma'
  },
  {
    id: '3',
    icon: Shiny,
    altIcon: 'Icone de estrelas',
    title: 'Trabalhe',
    description:
      'Colabore com sua equipe em tempo real para criar o CRM perfeito para o seu negócio',
    image: Work,
    imageDesktop: ConstructDesktop,
    alt: 'Imagem de um quadro com o ranking de tarefas'
  },
  {
    id: '4',
    icon: Chart,
    altIcon: 'Icone de um gráfico',
    title: 'Relatorio',
    description:
      'Comece com um CRM tão flexível quanto você. Nenhum código é necessário',
    image: Work,
    imageDesktop: RefineDesktop,
    alt: 'Imagem de um quadro com o ranking de tarefas'
  }
];
