"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Card } from "../ui/card";

export default function TestimonialSlider() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}

                <div className="mx-auto max-w-2xl lg:text-center mb-10">
                    <h2 className="text-base/7 font-semibold text-gray-500">Testimonial</h2>
                    <p className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                        What our happy users say!
                    </p>
                </div>

                {/* Swiper */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={32}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 32 },
                        768: { slidesPerView: 2, spaceBetween: 32 },
                        1024: { slidesPerView: 3, spaceBetween: 32 },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {/* === Slide 1 === */}
                    <SwiperSlide>
                        <TestimonialCard
                            rating={4.1}
                            text="Before this, I used to enter traders emotionally. The rules section alone forced me to stay disciplined like I was in a prop firm challenge. I have passed my first evaluation now"
                            name="Danial O."
                            role="Forex Trader"
                            img="https://pagedone.io/asset/uploads/1696229969.png"
                        />
                    </SwiperSlide>

                    {/* === Slide 2 === */}
                    <SwiperSlide>
                        <TestimonialCard
                            rating={3.9}
                            text="Every other trading journal I tried looked like an Excel sheet. This one is a real dashboard for traders. I actually look forward to logging trades now."
                            name="Maria"
                            role="Titan FX"
                            img="https://pagedone.io/asset/uploads/1696229994.png"
                        />
                    </SwiperSlide>

                    {/* === Slide 3 === */}
                    <SwiperSlide>
                        <TestimonialCard
                            rating={4.7}
                            text="The AI literally told me I took too many trades during London close and it was right. I didn't notice that pattern until I saw the analysis"
                            name="Emmanuel"
                            role="TradingOS"
                            img="https://pagedone.io/asset/uploads/1696230027.png"
                        />
                    </SwiperSlide>

                    {/* === Slide 4 === */}
                    <SwiperSlide>
                        <TestimonialCard
                            rating={5.0}
                            text="The sharable journal report made me post my results weekly on Telegram and now other traders are joining my group. It's help me to grow my brand too"
                            name="David N."
                            role="Community Leader @ The Market Guild"
                            img="https://pagedone.io/asset/uploads/1696230027.png"
                        />
                    </SwiperSlide>

                    {/* === Slide 5 === */}
                    <SwiperSlide>
                        <TestimonialCard
                            rating={4.2}
                            text="The best part is I can track my prop firm rules directly, no need for spreadsheets. I can see daily drawdonws, total loss and if I'm still within limits instantly"
                            name="Faith"
                            role="AlphaWave Groups"
                            img="https://pagedone.io/asset/uploads/1696230027.png"
                        />
                    </SwiperSlide>

                    {/* === Slide 6 === */}
                    <SwiperSlide>
                        <TestimonialCard
                            rating={4.9}
                            text="I used to pay for mentorship just to review my performance. Now the app breaks it down automatically; win rates by setup, time of the day and even pair bias. Crazy value"
                            name="Lil A."
                            role="Day Trader"
                            img="https://pagedone.io/asset/uploads/1696230027.png"
                        />
                    </SwiperSlide>

                    {/* Add more slides if needed */}
                </Swiper>
            </div>
        </section>
    );
}

// Reusable testimonial card
function TestimonialCard({ rating, text, name, role, img }) {
    return (
        <Card className="group rounded-xl p-6 transition-all duration-500">
            <div>
                {/* Rating */}
                <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                            fill="currentColor"
                        />
                    </svg>
                    <span className="text-base font-semibold text-white">{rating}</span>
                </div>

                {/* Review */}
                <p className="text-base text-gray-muted leading-6 transition-all duration-500 pb-8 group-hover:text-white">
                    {text}
                </p>
            </div>

            {/* User */}
            <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                <div>
                    <h5 className="text-white font-medium transition-all duration-500 mb-1">{name}</h5>
                    <span className="text-sm leading-4 text-gray-500">{role}</span>
                </div>
            </div>
        </Card>
    );
}
