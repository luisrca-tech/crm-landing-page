import { type StaticImageData } from 'next/image';

// Icons
import Grid from '../../public/images/Grid.png';
import Shiny from '../../public/images/Shiny.png';
import Chart from '../../public/images/Chart.png';

// Images
import Construct from '../../public/images/Construct.png';
import Refine from '../../public/images/Refine.png';
import Work from '../../public/images/Work.png';

interface CarouselItemsProps {
  id: string;
  icon: StaticImageData;
  title: string;
  description: string;
  image: StaticImageData;
}

export const CarouselItems: CarouselItemsProps[] = [
  {
    id: '1',
    icon: Grid,
    title: 'Construa',
    description:
      'Crie o CRM dos seus sonhos com poderosos e flexiveis templates para cada caso',
    image: Construct
  },
  {
    id: '2',
    icon: Grid,
    title: 'Refina',
    description:
      'Use a interface intuitiva do Attio e blocos ultrapersonalizáveis ​​para criar seus fluxos de trabalhoideais.',
    image: Refine
  },
  {
    id: '3',
    icon: Shiny,
    title: 'Trabalhe',
    description:
      'Colabore com sua equipe em tempo real para criar o CRM perfeito para o seu negócio',
    image: Work
  },
  {
    id: '4',
    icon: Chart,
    title: 'Relatorio',
    description:
      'Comece com um CRM tão flexível quanto você. Nenhum código é necessário',
    image: Work
  }
];
