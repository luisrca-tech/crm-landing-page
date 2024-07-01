import { StaticImageData } from 'next/image';

import Sebastian from '../../public/images/Sebastian.png';
import Alon from '../../public/images/Alon.png';
import Alexandra from '../../public/images/Alexandra.png';
import Khrisna from '../../public/images/Khrisna.png';
import VillaGouse from '../../public/images/VillaGouse.png';
import Damian from '../../public/images/Damian.png';

interface LovedByItemsProps {
  id: string;
  Avatar: StaticImageData;
  name: string;
  user: string;
  description: string;
  publishedAt: string;
}

export const LovedByItems: LovedByItemsProps[] = [
  {
    id: '1',
    Avatar: Sebastian,
    name: 'Sebastian Debrouwere',
    user: '@iamsebdeb',
    description:
      'Nós utilizamos @attio diariamente para vários processos internos, e eu não consigo falar suficiente sobre ele! Inacreditávelmente flexivel e cheio de funcionalidades com uma UI intuitiva.',
    publishedAt: '7 de abril, 2022'
  },
  {
    id: '2',
    Avatar: Alon,
    name: 'Alon',
    user: '@alon',
    description:
      'Como uma nova startup, estou amando utilizar o Attio. Ótimo balanceamento de flexibilidade.',
    publishedAt: '01 de Dezembro, 2022'
  },
  {
    id: '3',
    Avatar: Alexandra,
    name: 'Alexandra Smith',
    user: '@smith_alexandra',
    description:
      'Nós utilizamos nosso CRM Attio para vendas, arrecadação de receita e recrutamento. É demais!',
    publishedAt: 'Jan 4, 2023'
  },
  {
    id: '4',
    Avatar: Khrisna,
    name: 'Khrisna',
    user: '@ntkris',
    description:
      'Nossa! Attio é lindo 😍 Eu estava utilizando meu CRM no Notion até agora. Hubspot & Salesforce é muito engrenado. Attio resolve tudo!',
    publishedAt: '03 de Março, 2023'
  },
  {
    id: '5',
    Avatar: VillaGouse,
    name: 'Villa Gouse',
    user: '@villa_gouse',
    description:
      'Vamos ser honetos, a maioria dos CRMs são horríveis! Super complicados, caros e você precisa se adaptar as necessidades deles, não o contrário. Eu sou uma super fã do Attio. O produto deles é sólido, super flexível e simples!',
    publishedAt: '01 de Dezembro, 2022'
  },
  {
    id: '6',
    Avatar: Damian,
    name: 'Damian',
    user: '@damian09',
    description:
      'Ive been using @attio to track          applicants, manage my deal pipeline and manage the associated notes/tasks. The   use-cases are unlimited; it truly feels like the Notion of CRM.',
    publishedAt: '09 de Janeiro, 2023'
  }
];
