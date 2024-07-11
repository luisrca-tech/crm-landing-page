import { type StaticImageData } from 'next/image';

import QuickActions from '../../public/images/QuickActions.png';
import AutomaticEnrichment from '../../public/images/AutomaticEnrichment.png';
import ChromeExtension from '../../public/images/ChromeExtension.png';
import ContactAnalysis from '../../public/images/ContactAnalysis.png';
import Filters from '../../public/images/Filters.png';
import Ordenation from '../../public/images/TieredSorting.png';

interface MuchMoreItemsProps {
  id: string;
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

export const MuchMoreItems: MuchMoreItemsProps[] = [
  {
    id: '1',
    image: QuickActions,
    alt: 'Imagem ilustrativa de um fluxo de ações rápidas',
    title: 'Ações rápidas',
    description: 'Compartilhe seu fluxo de trabalho customizado com atalhos'
  },
  {
    id: '2',
    image: AutomaticEnrichment,
    alt: 'Imagem ilustrativa de um fluxo de enriquecimento automático',
    title: 'Enrequicimento automático',
    description:
      'Atualize seus contatos com as últimas informações no piloto automático.'
  },
  {
    id: '3',
    image: ChromeExtension,
    alt: 'Imagem ilustrativa de um fluxo de extensão do Chrome',
    title: 'Entensão do chrome',
    description: 'Continue leve com a integração de browser do Attio.'
  },
  {
    id: '4',
    image: ContactAnalysis,
    alt: 'Imagem ilustrativa de um fluxo de analise de contatos',
    title: 'Analise de Contatos',
    description:
      'Obtenha grandes insights sobre seus contatos com poucos olhares'
  },
  {
    id: '5',
    image: Filters,
    alt: 'Imagem ilustrativa de um fluxo de filtros',
    title: 'Filtros',
    description: 'Compartilhe seus fluxos com atalhos customizados'
  },
  {
    id: '6',
    image: Ordenation,
    alt: 'Imagem ilustrativa de um fluxo de ordenação',
    title: 'Ordenação',
    description: 'Atualize seus contatos com as ultimas informações.'
  }
];
