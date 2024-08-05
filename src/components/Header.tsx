'use client';

import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { NavigationItems } from '~/constants/navigation-items';
import { Container } from './Container';
import { ButtonLink } from './ui/Button/ButtonLink';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger
} from './ui/sheet';
import LogoAttios from '/public/images/logo.svg';
import Menu from '/public/images/menu.svg';

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
                          <SheetClose>{item.label}</SheetClose>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <SheetFooter className="mt-auto flex flex-col items-center justify-center space-y-2">
                <ButtonLink href="#" outline="primary">
                  Entrar
                </ButtonLink>
                <ButtonLink href="#" filled="primary">
                  Cadastre-se gratuitamente
                </ButtonLink>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className="ml-auto hidden items-center justify-center gap-2 lg:flex">
          <ButtonLink href="#" outline="primary">
            Entrar
          </ButtonLink>
          <ButtonLink href="#" filled="primary">
            Cadastre-se gratuitamente
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
