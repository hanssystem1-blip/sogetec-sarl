import React from 'react'
import Link from "next/link";
import { ArrowBigLeft, ArrowLeft } from 'lucide-react';
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
export default function Devis() {
  return (
    <>
      <main className='w-screen h-screen flex bg-sky-700 flex-col justify-center items-center'>
        {/* <section className='bg-gray-200 py-10'>
            <Link href="/" className='flex'>
            <ArrowLeft/>Back
            </Link>
            <div className='grid grid-cols-2 grid-rows-2 items-center px-6 gap-4'>
                <div className='flex items-center gap-6'>
                    <label htmlFor="nom">NOM</label>
                <input type="text" className=' outline p-4' name="" placeholder='votre nom' id="nom" />
                </div>
                <div className='flex items-center gap-6'>
                    <label htmlFor="number">NUMERO*</label>
                <input type="number" className=' outline p-4' name="" placeholder='votre numero' id="number" />
                </div>
                <div className='flex items-center gap-6'>
                    <label htmlFor="email">E-mail</label>
                <input type="email" className=' outline p-4' name="" placeholder='votre adresse mail' id="email" />
                </div>
                <div className='flex items-center gap-6'>
                    <label htmlFor="msg">message</label>
                    <textarea name="" placeholder='Rediger votre demande' cols={24} rows={4} className=' outline' id="msg"></textarea>
                </div>
            </div>
        </section> */}

        <Field>
      <FieldLabel htmlFor="input-required">
        Required Field <span className="text-destructive">*</span>
      </FieldLabel>
      <Input
        id="input-required"
        placeholder="This field is required"
        required
      />
      <FieldDescription>This field must be filled out.</FieldDescription>
    </Field>
      </main>
    </>
  )
}
