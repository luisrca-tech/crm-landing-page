'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import ErrorMessage from '~/components/ui/ErrorMessage';
import Input from '~/components/ui/Input';
import { LoadingSpinner } from '~/components/ui/LoadingSpinner';
import { contactUsSchema } from '~/schemas/ContactUs.schema';
import type { ContactUsSchema } from '~/types/ContactUs.type';

export default function ContactUsForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactUsSchema>({
    resolver: zodResolver(contactUsSchema)
  });

  const onSubmit: SubmitHandler<ContactUsSchema> = (data) => {
    if (data) {
      setIsLoading(true);

      setTimeout(() => {
        toast.success('Obrigado pela inscrição');
        setIsLoading(false);
        reset();
      }, 1000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 rounded-lg bg-base-dark-100 p-8 text-lg text-base-500"
    >
      <div className="max-w-[290px] text-2xl font-bold">
        Inscreva-se para versão gratuita
      </div>
      <div>
        <label>Nome</label>
        <Input {...register('name')} type="text" />
        <ErrorMessage>{errors.name ? errors.name?.message : ''}</ErrorMessage>
      </div>
      <div>
        <label>Email</label>
        <Input {...register('email')} type="text" />
        <ErrorMessage>{errors.email ? errors.email?.message : ''}</ErrorMessage>
      </div>
      <button className="rounded-xl bg-blue-500 px-4 py-3 text-base-100 transition-colors hover:bg-blue-400">
        {isLoading ? <LoadingSpinner /> : 'Confirmar inscrição'}
      </button>
    </form>
  );
}
