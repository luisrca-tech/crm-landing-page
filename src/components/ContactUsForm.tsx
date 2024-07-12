'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { contactUsSchema } from '~/schemas/contactUs.schema';
import type { ContactUs } from '~/types/ContactUs.type';
import ErrorMessage from './ui/ErrorMessage';
import Input from './ui/Input';

export default function ContactUsForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactUs>({
    resolver: zodResolver(contactUsSchema)
  });

  const onSubmit: SubmitHandler<ContactUs> = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-base-dark-600 flex flex-col gap-8 p-6'>
      <div>
        <Input {...register('name')} type="text" placeholder='Name' />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </div>
      <div>
        <Input {...register('email')} type="text" placeholder='Name' />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </div>
      <button className='p-3 rounded-md bg-blue-500'>Submit</button>
    </form>
  );
}