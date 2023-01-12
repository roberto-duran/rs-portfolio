'use client'

import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

export default function contactMe() {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:info@robertoduran.me?subject=${formData.subject}&body=From ${formData.name} Message ${formData.message}`;
    }
  return (
    <div className="h-screen flex relative flex-col items-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto">
        <h3 className="section-title">
           Contact 
        </h3>

        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                I have got just what you need.{" "} 
                <span className="underline whitespace-nowrap underline-offset-8 decoration-defaultColor">
                     Lest Talk.
                </span>
            </h4>

            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon  className="h-7 w-7 text-defaultColor animate-pulse" />
                    <p className="text-2xl">+57 3058505642</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon  className="h-7 w-7 text-defaultColor animate-pulse" />
                    <p className="text-2xl">info@robertoduran.me</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon  className="h-7 w-7 text-defaultColor animate-pulse" />
                    <p className="text-2xl">123 la calle</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder="Name" className="contact-input" type="text" />
                    <input {...register('email')} placeholder="Email" className="contact-input" type="email" />
                </div>

                <input {...register('subject')} placeholder="Subject" className="contact-input" type="text" />

                <textarea {...register('message')} placeholder="Message" className="contact-input"></textarea>
                <button className="bg-defaultColor py-5 px-10 rounded-sm text-black font-bold" type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}