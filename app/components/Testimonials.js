"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonial = [
  {
    name: "Vikam Singh",
    location: "Indian",
    img: "/Images/tourist1.jpg",
    message:
      "I needed to exchange AED to INR for a trip to Dubai. 7janpath forex had a good rate and they also offered me a forex card which was very useful during my travels. They have a wide range of currencies and services, making them my go-to currency exchange provider.",
  },
  {
    name: "Simran Kaur",
    location: "Indian",
    img: "/Images/tourist1.jpg",
    message:
      "Great rates, excellent service, and super convenient. 7janpath forex is the best place to exchange currency. I wouldn't go anywhere else.",
  },
  {
    name: "Amit Kapoor",
    location: "Indian",
    img: "/Images/tourist1.jpg",
    message:
      "I've been using 7janpath forex for all my currency exchange needs for the past few years. I trust them completely. Their rates are always competitive, and they are reliable and honest. I wouldn't go anywhere else.",
  },
  {
    name: "Neha Reddy",
    location: "Indian",
    img: "/Images/tourist1.jpg",
    message:
      "I was in a rush to exchange some Euros before my trip, and 7janpath forex was incredibly fast. The transaction was completed quickly and efficiently, and I was on my way in no time. Saved me a lot of stress!",
  },
  {
    name: "Anit Uniyal",
    location: "Indian",
    img: "/Images/tourist1.jpg",
    message:
      "It was a good experience in getting forex though you people- Quick and quality response. Thanks a lot",
  },
  {
    name: "Chand Mohammad",
    location: "Indian",
    img: "/Images/tourist1.jpg",
    message:
      "I have tried various money exchange providers but none was as good as 7 Janpath Forex. Agility and friendly outlook, the best part is the unbeatable rates. Just go for it.",
  },
];

const settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <Slider {...settings}>
      {testimonial.map((tm, i) => {
        return (
          <aside key={i} className="p-4">
            <div className="p-8 rounded-3xl bg-white shadow-md flex flex-col justify-between items-center h-fit md:h-[60vh]">
              {/* Stars and Quote Icon in a Single Line */}
              <div className="flex justify-between items-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-300"
                >
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                </svg>
                <div>⭐⭐⭐⭐⭐</div>
              </div>

              {/* Message with fixed height */}
              <div className="flex-grow flex items-center">
                <p className="text-lg font-inter text-gray-700 text-center leading-relaxed">
                  {tm.message}
                </p>
              </div>

              {/* Image and Name in a Single Line */}
              <div className="flex flex-col items-center">
                <Image
                  src={tm.img}
                  alt={tm.name}
                  width={500}
                  height={500}
                  className="rounded-full object-cover w-20 h-20 mb-2"
                />
                <h3 className="text-center font-Helvetica text-lg text-darkBlue">
                  {tm.name}
                </h3>
              </div>
            </div>
          </aside>
        );
      })}
    </Slider>
  );
};

export default Testimonials;
