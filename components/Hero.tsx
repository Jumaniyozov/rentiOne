import React from "react";
import {YoutubeLogo} from "./assets/YoutubeLogo";
import {TelegramLogo} from "./assets/TelegramLogo";
import {FacebookLogo} from "./assets/FacebookLogo";
import {BtnLogo} from "./assets/BtnLogo";

export const Hero = () => {
    return (
        <section id="hero" className="snap-start bg-primary h-screen max-w-screen-2xl w-full">
            <div className="px-40 pt-16 h-full flex w-full">
                <div className="flex-1 flex">
                    <div className="h-full flex flex-col basis-1/3 gap-4">
                        <div className="basis-2/5 relative flex justify-start items-end">
                            <p className="[writing-mode:vertical-lr] ml-1  rotate-180 opacity-50 cursor-default">We are in social networks</p>
                        </div>
                        <div className="basis-3/5 flex flex-col">
                            <div className="basis-3/6 ">
                                <div className="pl-4 h-full">
                                    <div className="bg-black-primary opacity-25 h-full w-[0.1rem]"></div>
                                </div>
                            </div>
                            <div className="basis-2/6 flex flex-col mt-2 gap-4">
                                <YoutubeLogo fill="black-primary" className="opacity-25 h-8 w-8"/>
                                <FacebookLogo fill="black-primary" className="opacity-25 h-8 w-8"/>
                                <TelegramLogo fill="black-primary" className="opacity-25 h-8 w-8"/>
                            </div>
                        </div>
                    </div>
                    <div className="h-full flex basis-2/3">
                        <div className="flex mt-24 flex-col gap-24">
                            <div className="flex flex-col gap-8">
                                <div>
                                    <p className="opacity-50">#49 among brokers</p>
                                </div>
                                <div>
                                    <h1 className="font-decorator text-6xl">Office Rental in Moscow</h1>
                                </div>
                                <div className="flex items-center gap-12">
                                    <p className="text-lg">Go to the catalog</p>
                                    <BtnLogo/>
                                </div>
                            </div>
                            <div className="flex">
                                <p className="text-lg basis-1/4 font-semibold">News</p>
                                <p className="text-md basis-3/4">
                                    A new skyscraper `825 Third Ave` with 37 offices has been added to our portfolio …
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex-1 relative flex flex-col">
                    <div className="bg-hero-image bg-center bg-contain bg-no-repeat h-full basis-10/12 flex flex-col gap-3">
                        <div className="flex items-start justify-end">
                            <p className="[writing-mode:vertical-lr] rotate-180 opacity-50 cursor-default">Interview
                                with Forbes</p>
                        </div>
                        <div className="basis-4/12 flex items-start justify-end">
                            <div className="pr-2 h-2/4">
                                <div className="bg-black-primary opacity-25 h-full w-[0.1rem]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-2/12 flex flex-col">
                        <div className="h-full bg-white flex">
                            <div className="basis-6/12 justify-center flex items-center">
                                <h3 className="font-decorator text-2xl">Fair rental conditions</h3>
                            </div>
                            <div className="basis-6/12 flex items-end px-8 py-4">
                                <p className="text-md">Rent an office for several months or several years without
                                    long-term obligations and commissions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
