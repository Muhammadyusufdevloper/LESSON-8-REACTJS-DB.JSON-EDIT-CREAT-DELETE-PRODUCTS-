import { Swiper, SwiperSlide } from 'swiper/react';
import earphone from "../../assets/product-img.avif";
import camera from "../../assets/product-img1.avif";
import phone from "../../assets/product-iphone.webp";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-5 mb-14 relative z-[-3]">
            <div className="">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: '.custom-swiper-button-prev',
                        nextEl: '.custom-swiper-button-next',
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className='h-96 w-full rounded-lg relative'
                >
                    <SwiperSlide className='h-96 w-full rounded-lg'>
                        <img className='w-full h-full object-cover' src={earphone} alt="earphone img" />
                    </SwiperSlide>
                    <SwiperSlide className='h-96 w-full'>
                        <img className='w-full h-full object-cover' src={camera} alt="camera img" />
                    </SwiperSlide>
                    <SwiperSlide className='h-96 w-full'>
                        <img className='w-full h-full object-cover' src={phone} alt="phone img" />
                    </SwiperSlide>
                    <div className="custom-swiper-button-prev absolute top-1/2 transform -translate-y-1/2 left-0 z-10 flex items-center justify-center w-10 h-10 bg-black bg-opacity-50 text-white rounded-full cursor-pointer">
                        <GoChevronLeft size={24} />
                    </div>
                    <div className="custom-swiper-button-next absolute top-1/2 transform -translate-y-1/2 right-0 z-10 flex items-center justify-center w-10 h-10 bg-black bg-opacity-50 text-white rounded-full cursor-pointer">
                        <GoChevronRight size={24} />
                    </div>
                </Swiper>
            </div>
        </section>
    );
}

export default Hero;

