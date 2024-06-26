'use client';

import Image, { type StaticImageData } from 'next/image';
import LogoAttios from '/public/images/logo.svg';
import Menu from '/public/images/menu.svg';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger
} from './ui/sheet';
import Link from 'next/link';

export function Header() {
  return (
    <div className="flex justify-between p-4 xsm:hidden">
      <Image priority src={LogoAttios as StaticImageData} alt="" />

      <Sheet>
        <SheetTrigger>
          <Image src={Menu as StaticImageData} alt="" />
        </SheetTrigger>
        <SheetOverlay className="animate-fadeIn" />
        <SheetContent className="flex min-h-screen animate-slideIn flex-col">
          <SheetHeader>
            <SheetTitle>Attios Menu</SheetTitle>
          </SheetHeader>
          <div className="flex-grow">
            <nav>
              <ul>
                <li>
                  <SheetDescription>
                    <Link href="#inicio">ínicio</Link>
                  </SheetDescription>
                </li>
                <li>
                  <SheetDescription>
                    <Link href="#depoimentos">Depoimentos</Link>
                  </SheetDescription>
                </li>
                <li>
                  <SheetDescription>
                    <Link href="#precos">Preço</Link>
                  </SheetDescription>
                </li>
                <li>
                  <SheetDescription>
                    <Link href="#contato">Entre em contato</Link>
                  </SheetDescription>
                </li>
              </ul>
            </nav>
          </div>

          <SheetFooter className="mt-auto flex flex-col items-center justify-center space-y-2">
            <Link href="#">
              <button className="flex h-10 w-[4.8125rem] items-center justify-center rounded-xl border px-2 py-4 font-normal text-base-500">
                Entrar
              </button>
            </Link>
            <Link href="#">
              <button className="flex h-10 w-[14.5rem] items-center justify-center rounded-xl border bg-base-600 px-2 py-4 font-normal text-base-100">
                Cadastre-se gratuitamente
              </button>
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
