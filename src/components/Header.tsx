'use client';

import Image, { type StaticImageData } from 'next/image';
import LogoAttios from '/public/images/logo.svg';
import Menu from '/public/images/menu.svg';
import CloseMenu from '/public/images/cancel.svg';

import { useState } from 'react';
import ModalBlur from './ModalBlur';

export function Header() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      {showModal && <ModalBlur onClickCallback={() => setShowModal(false)} />}
      <div
        className={`bg-white transition-left fixed left-0 top-0 z-[9999] flex h-screen w-[66vw] flex-col rounded-b-2xl rounded-t-2xl pb-0 pl-[1.938rem] pr-[5.625rem] pt-[3.75rem] duration-300 ${showModal ? 'right-0' : '-right-[66vw]'}`}
      >
        <div className="border-light flex w-full items-center border-b-2 py-6">
          <button
            onClick={() => setShowModal(false)}
            className="bg-transparent flex w-full items-center gap-2.5 border-none"
          >
            <Image src={CloseMenu as StaticImageData} alt="Close menu icon" />
          </button>
        </div>
        <div className="flex h-full w-full flex-col">
          <div className="flex h-12 w-12 items-center justify-center">
            <button>Projetos</button>
          </div>
          <div className="flex h-12 w-12 items-center justify-center">
            <button>Pessoas</button>
          </div>
          <div className="flex h-12 w-12 items-center justify-center">
            <button>Mobilizados</button>
          </div>
          <div className="flex h-12 w-12 items-center justify-center">
            <button>Férias</button>
          </div>
        </div>
      </div>

      <div className="flex h-[4.25rem] w-full justify-between">
        <Image src={LogoAttios as StaticImageData} alt="" />

        <button onClick={() => setShowModal(true)}>
          <Image src={Menu as StaticImageData} alt="" />
        </button>
      </div>
    </>
  );

  // return (
  //   <>
  //
  //   </>
  // );
}
