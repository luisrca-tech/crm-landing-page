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
import { NavigationItems } from '~/constants/navigation-items';
import { Container } from './Container';

export function Header() {
  return (
    <header>
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-16">
          <Image
            priority
            src={LogoAttios as StaticImageData}
            alt="Logo da empresa Attios CRM"
          />
          <nav className="hidden lg:block">
            <ul className="flex gap-4">
              {NavigationItems.map((item) => {
                return (
                  <li className="px-2 py-4" key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Image
                src={Menu as StaticImageData}
                alt="Botão de abrir o menu"
              />
            </SheetTrigger>
            <SheetOverlay />
            <SheetContent className="flex min-h-screen flex-col">
              <SheetHeader>
                <SheetTitle>Attios Menu</SheetTitle>
              </SheetHeader>
              <div className="flex-grow">
                <nav>
                  <ul>
                    {NavigationItems.map((item) => (
                      <li key={item.href}>
                        <SheetDescription>
                          <Link href={item.href}>{item.label}</Link>
                        </SheetDescription>
                      </li>
                    ))}
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
        <div className="ml-auto hidden items-center justify-center gap-2 lg:flex">
          <button className="flex h-10 items-center justify-center rounded-xl border border-base-200 bg-base-100 px-4 py-2  text-base font-normal tracking-[-0.2px] text-base-500">
            Entrar
          </button>
          <button className="flex h-10 items-center justify-center rounded-xl border border-base-400 bg-base-600 px-2 py-4 text-base-100">
            Cadastre-se gratuitamente
          </button>
        </div>
      </Container>
    </header>
  );
}
