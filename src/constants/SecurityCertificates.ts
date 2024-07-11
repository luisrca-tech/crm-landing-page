import { type StaticImageData } from "next/image"

import GDPR from '/public/images/GDPR.png'
import CCPA from '/public/images/CCPA.png'
import LR from '/public/images/LR.png'
import Ukas from '/public/images/Ukas.png'

interface SecurityCertificatesProps {
  id: string;
  image: StaticImageData;
}

export const SecurityCertificates: SecurityCertificatesProps[] = [
  {
    id: '1',
    image: GDPR
  },
  {
    id: '2',
    image: CCPA
  },
  {
    id: '3',
    image: LR
  },
  {
    id: '4',
    image: Ukas
  }
]