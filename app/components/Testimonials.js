"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonial = [
  {
    name: "Kristina Draper",
    location: "Asian Tourist",
    img: "/Images/tourist.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus animi inventore atque assumenda quidem.",
  },
  {
    name: "Kristina Draper",
    location: "Asian Tourist",
    img: "/Images/tourist.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus animi inventore atque assumenda quidem.",
  },
  {
    name: "Kristina Draper",
    location: "Asian Tourist",
    img: "/Images/tourist.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus animi inventore atque assumenda quidem.",
  },
  {
    name: "Kristina Draper",
    location: "Asian Tourist",
    img: "/Images/tourist.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus animi inventore atque assumenda quidem.",
  },
  {
    name: "Kristina Draper",
    location: "Asian Tourist",
    img: "/Images/tourist.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus animi inventore atque assumenda quidem.",
  },
  {
    name: "Kristina Draper",
    location: "Asian Tourist",
    img: "/Images/tourist.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus animi inventore atque assumenda quidem.",
  },
  {
    name: "Kristina Draper",
    location: "Asian Tourist",
    img: "/Images/tourist.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus animi inventore atque assumenda quidem.",
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
      breakpoint: 1279,
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
            <div className="p-8 rounded-3xl bg-white shadow-md flex flex-col items-center justify-center">
              <div className="flex w-full justify-between">
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
              <p className="text-lg font-inter text-gray-700 text-center mt-6 mb-8">
                {tm.message}
              </p>
              <Image
                src={tm.img}
                alt={tm.name}
                width={500}
                height={500}
                className="rounded-full object-cover w-20 h-20 mb-4"
              />
              <h3 className="text-center font-Helvetica text-lg text-darkBlue">
                {tm.name}
                <br />
              </h3>
            </div>
          </aside>
        );
      })}
    </Slider>
  );
};

export default Testimonials;
