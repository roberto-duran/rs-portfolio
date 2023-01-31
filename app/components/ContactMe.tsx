'use client'

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
    md:flex-row max-w-full justify-evenly mx-auto">
        <h3 className="section-title">
           Contact
        </h3>
        <h3 className="section-sub-title">
            I have got just what you need.{" "}
            <span className="underline whitespace-nowrap underline-offset-8 decoration-defaultColor">
                Lest Talk.
            </span>
        </h3>

        <div className="flex flex-col space-y-10">
            <div className="flex flex-col md:flex-row">
                <div className="space-y-2 px-10 mb-10 md:mb-0">
                    <div className="contact-info">
                        <PhoneIcon className="h-7 w-7 text-defaultColor animate-pulse"/>
                        <p className="text-2xl">+57 3058505642</p>
                    </div>
                    <div className="contact-info">
                        <EnvelopeIcon className="h-7 w-7 text-defaultColor animate-pulse"/>
                        <p className="text-2xl">info@robertoduran.me</p>
                    </div>
                    <div className="contact-info">
                        <MapPinIcon className="h-7 w-7 text-defaultColor animate-pulse"/>
                        <p className="text-2xl">Bogotá</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 min-w-[325px] md:min-w-[500px] px-10 md:px-0">
                    <input {...register('name')} placeholder="Name" className="contact-input h-[66px]" type="text"/>

                    <input {...register('email')} placeholder="Email" className="contact-input h-[66px]" type="email"/>

                    <input {...register('subject')} placeholder="Subject" className="contact-input h-[66px]" type="text"/>

                    <textarea {...register('message')} placeholder="Message" className="contact-input h-20 md:h-44 "></textarea>
                    <button className="bg-defaultColor py-5 px-10 rounded-sm font-bold" type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}
