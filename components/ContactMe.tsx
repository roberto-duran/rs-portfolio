"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { HiPhone, HiEnvelope, HiMapPin } from "react-icons/hi2";
type Props = {
  email: string | null | undefined;
  phone_number: string | null | undefined;
  address: string | null | undefined;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({ email, phone_number, address }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:info@robertoduran.me?subject=${formData.subject}&body=From ${formData.name} Message ${formData.message}`;
  };
  return (
    <div
      className="h-screen flex relative flex-col items-center md:text-left
    md:flex-row max-w-full justify-evenly mx-auto"
    >
      <h3 className="section-title">Contact</h3>
      <h3 className="hidden md:block section-sub-title">
        I have got just what you need.{" "}
        <span className="underline whitespace-nowrap underline-offset-8 decoration-defaultColor">
          Lest Talk.
        </span>
      </h3>

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="text-sm space-y-2 px-10 mb-5 md:mb-0">
            <div className="contact-info">
              <HiEnvelope className="h-7 w-7 text-defaultColor animate-pulse" />
              <p className="text-2xl">{email}</p>
            </div>
            <div className="contact-info">
              <HiPhone className="h-7 w-7 text-defaultColor animate-pulse" />
              <p className="text-2xl">{phone_number}</p>
            </div>
            <div className="contact-info">
              <HiMapPin className="h-7 w-7 text-defaultColor animate-pulse" />
              <p className="text-2xl">{address}</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 min-w-[325px] md:min-w-[500px] px-10 md:px-0"
          >
            <div className="flex flex-col md:flex-row gap-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contact-input h-[66px] w-full"
                type="text"
              />

              <input
                {...register("email")}
                placeholder="Email"
                className="contact-input h-[66px] w-full"
                type="email"
              />
            </div>

            <input
              {...register("subject")}
              placeholder="Subject"
              className="contact-input h-[66px]"
              type="text"
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              className="contact-input h-20 md:h-44 "
            ></textarea>
            <button
              className="bg-green-900 py-5 px-10 text-xl rounded-sm font-bold
                    hover:bg-green-600"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
