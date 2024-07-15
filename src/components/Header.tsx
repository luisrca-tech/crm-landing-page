'use client';

import Image, { type StaticImageData } from 'next/image';
import LogoAttios from '/public/images/logo.svg';
import Menu from '/public/images/menu.svg';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger
} from './ui/sheet';
import Link from 'next/link';
import { NavigationItems } from '~/constants/navigation-items';
import { Container } from './Container';
import { Button } from './ui/button';

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
            <SheetContent className="flex flex-col">
              <SheetHeader>
                <SheetTitle>Attios Menu</SheetTitle>
              </SheetHeader>
              <div className="flex-grow">
                <nav>
                  <ul>
                    {NavigationItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          className="mt-4 flex flex-col gap-4 text-sm text-base-dark-600"
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <SheetFooter className="mt-auto flex flex-col items-center justify-center space-y-2">
                <Button outline="primary">Entrar</Button>
                <Button as="a" href="#" filled="primary">
                  Cadastre-se gratuitamente
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className="ml-auto hidden items-center justify-center gap-2 lg:flex">
          <Button outline="primary">Entrar</Button>
          <Button as="a" href="#" filled="primary">
            Cadastre-se gratuitamente
          </Button>
        </div>
      </Container>
    </header>
  );
}
