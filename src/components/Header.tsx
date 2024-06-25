'use client';

import Image, { type StaticImageData } from 'next/image';
import LogoAttios from '/public/images/logo.svg';
import Menu from '/public/images/menu.svg';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetOverlay, SheetTrigger } from './ui/sheet';
import Link from 'next/link';

export function Header() {
  return (
    <div className="flex justify-between p-4">
      <Image src={LogoAttios as StaticImageData} alt='' />

      <Sheet>
          <SheetTrigger>
          <Image src={Menu as StaticImageData} alt='' />
        </SheetTrigger>
        <SheetContent className="flex flex-col min-h-screen bg-blend-overlay">
          <div className="flex-grow">
            <SheetDescription>
              <Link href="#">ínicio</Link>
            </SheetDescription>
            <SheetDescription>
              <Link href="#">Depoimentos</Link>
            </SheetDescription>
            <SheetDescription>
              <Link href="#">Preço</Link>
            </SheetDescription>
            <SheetDescription>
              <Link href="#">Entre em contato</Link>
            </SheetDescription>
          </div>

          <SheetFooter className="mt-auto flex flex-col space-y-2 items-center justify-center">
            <Link href="#"><button className="w-[4.8125rem] h-10 rounded-xl border px-2 py-4 font-normal text-base-500 flex justify-center items-center">Entrar</button></Link>
            <Link href="#"><button className="w-[14.5rem] h-10 rounded-xl border px-2 py-4 flex justify-center items-center bg-base-600 font-normal text-base-100">Cadastre-se gratuitamente</button></Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
