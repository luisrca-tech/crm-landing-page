'use client';

import ErrorMessage from '../ui/ErrorMessage';
import Input from '../ui/Input';

export default function ContactUsForm() {
  return (
    <form className="flex flex-col gap-6 rounded-lg bg-base-dark-100 p-8 text-lg text-base-500">
      <h3 className="max-w-[290px] text-2xl font-bold">
        Inscreva-se para versão gratuita
      </h3>
      <div>
        <label>Nome</label>
        <Input type="text" />
        <ErrorMessage>Por favor, digite seu nome!</ErrorMessage>
      </div>
      <div>
        <label>Email</label>
        <Input type="text" />
        <ErrorMessage>Por favor, digite um email valido</ErrorMessage>
      </div>
      <button className="rounded-xl bg-blue-500 px-4 py-3 text-base-100 transition-colors hover:bg-blue-400">
        Confirmar inscrição
      </button>
    </form>
  );
}
