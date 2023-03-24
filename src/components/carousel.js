import Slide_1 from '../assets/Slide_1.jpeg';
import Slide_2 from '../assets/Slide_2.jpeg';
import Slide_3 from '../assets/Slide_3.jpeg';
import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Carousel = () => {
    return ( 
    <div className="2xl:mx-auto 2xl:container flex justify-center">
            <div className="2xl:px-20 px-6 py-2 w-full">
                <CarouselProvider className="relative hidden sm:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true} currentSlide={1}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 flex justify-center items-center absolute left-0 ml-20 cursor-pointer" id="prev">
                            <svg width={20} height={20} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider className="carousel__sliderLarge w-3/4">
                            <Slide className="carousel__inner-slideLarge" index={0}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                        <img src={Slide_1} alt="sitting area" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pr-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="px-2 py-2 bg-black text-lg leading-5 lg:leading-normal font-thin text-white">DISKUSI KOLABORASI ANTARA PPTIK ITB, PUSTEKHAN ITB DAN PT. PINDAD - MITRA 16 FEB, 2023</h1>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                        <img src={Slide_1} alt="sitting area" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">DISKUSI KOLABORASI ANTARA PPTIK ITB, PUSTEKHAN ITB DAN PT. PINDAD - MITRA 16 FEB, 2023</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={1}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                        <img src={Slide_2} alt="chairs" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="px-2 py-2 bg-black text-lg leading-5 lg:leading-normal font-thin text-white">DISKUSI KOLABORASI DENGAN BPPTIK KEMENKOMINFO - MITRA 2 FEB, 2023</h1>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                        <img src={Slide_2} alt="chairs" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">DISKUSI KOLABORASI DENGAN BPPTIK KEMENKOMINFO - MITRA / SLIDER 2 FEB, 2023</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={2}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                        <img src={Slide_3} alt="chair" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="px-2 py-2 bg-black text-lg leading-5 lg:leading-normal font-thin text-white">PERTEMUAN PPTIK ITB DAN UBL - MITRA / SLIDER 2 MAR, 2023</h1>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                        <img src={Slide_3} alt="chair" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">PERTEMUAN PPTIK ITB DAN UBL - MITRA / SLIDER 2 MAR, 2023</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 flex justify-center items-center absolute z-30 right-0 mr-20" id="next">
                            <svg width={20} height={20} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
     );
}
 
export default Carousel;