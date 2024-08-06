import { type StaticImageData } from 'next/image';

import Fivetran from '../../public/images/Fivetran.png';
import Hightouch from '../../public/images/Hightouch.png';
import Census from '../../public/images/Census.png';
import Segment from '../../public/images/Segment.png';
import Outlook from '../../public/images/Outlook.png';
import Gmail from '../../public/images/Gmail.png';

interface BoxToolsImagesProps {
  id: string;
  image: StaticImageData;
}

export const BoxToolsImages: BoxToolsImagesProps[] = [
  {
    id: '1',
    image: Fivetran
  },
  {
    id: '2',
    image: Hightouch
  },
  {
    id: '3',
    image: Census
  },
  {
    id: '4',
    image: Segment
  },
  {
    id: '5',
    image: Outlook
  },
  {
    id: '6',
    image: Gmail
  }
];
