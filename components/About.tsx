'use client'

import { PageInfo } from "../models/pageInfo";

type Props = {
    pageInfo: PageInfo | null;
}
const About = ({ pageInfo }: Props) => {
    return (
        <div className="flex flex-col relative justify-evenly mx-auto items-center
        h-screen text-center md:text-left max-w-7xl px-10">
            <h3 className="section-title">
                Know me
            </h3>
            <div className="flex flex-col justify-around">
                <div>
                    <div className="flex flex-col px-0 md:px-10 md:flex-row md:justify-between">
                        <div className="flex-[0.8] md:flex-[0.9]">
                            <h4 className="text-3xl font-semibold">
                                I'm{" "}
                                <span className="underline underline-offset-8 decoration-defaultColor/50">{pageInfo?.name}</span>,
                                {" "}a {pageInfo?.role}
                            </h4>
                            <p className="text-base pt-3 text-justify">
                                {pageInfo?.back_ground_information}
                            </p>
                        </div>
                        {/* details */}
                        <div className="hidden sm:block mt-5 md:mt-0 md:w-1/5 lg:w-1/3">
                            <div className="flex flex-row sm:flex-col justify-between">
                                <div className="pb-5 sm:border-b sm:border-b-gray-400">
                                    <span className="text-gray-300 font-bold">Name:</span> <span>{pageInfo?.name}</span>
                                </div>
                                <div className="py-5 border-b border-b-gray-400">
                                    <span className="text-gray-300 font-bold">Email:</span> <span>{pageInfo?.email}</span>
                                </div>
                            </div>
                            <div className="flex flex-row md:flex-col justify-evenly border-b border-b-gray-400">
                                <div className="py-5 ">
                                    <span className="text-gray-300 font-bold">Phone:</span> <span>{pageInfo?.phone_number}</span>
                                </div>
                                <div className="py-5">
                                    <span className="text-gray-300 font-bold">From:</span> <span>{pageInfo?.address}</span>
                                </div>
                            </div>
                        </div>
                        <div className="py-5">
                            <button className="w-full bg-defaultColor py-5 px-10 rounded-sm font-bold">Download CV</button>
                        </div>
                    </div>
                </div>
                <div className="hidden mt-6 md:sticky md:bottom-5 md:flex md:flex-row md:justify-evenly">
                    <div className="text-center">
                        <h4 className="text-6xl mb-3 "><span>10</span> +</h4>
                        <p className="text-light">Years Experience</p>
                    </div>

                    <div className="border-r-[1px] border-r-gray-400 h-24"></div>
                    <div className="text-center">
                        <h4 className="text-6xl mb-3"><span>10</span> +</h4>
                        <p className="text-light">Years Experience</p>
                    </div>
                    <div className="border-r-[1px] border-r-gray-400"></div>
                    <div className="text-center">
                        <h4 className="text-6xl mb-3"><span>10</span> +</h4>
                        <p className="text-light">Years Experience</p>
                    </div>
                    <div className="border-r-[1px] border-r-gray-400"></div>
                    <div className="text-center">
                        <h4 className="text-6xl mb-3"><span>10</span> +</h4>
                        <p className="text-light">Years Experience</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;
