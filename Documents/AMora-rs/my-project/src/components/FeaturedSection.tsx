"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const images = [
  {
    src: "/images/pool.jpg",
    description:
      "Thư giãn tại hồ bơi ngoài trời hướng biển, nơi bạn có thể ngắm trọn khung cảnh đại dương và tận hưởng không gian yên bình đầy tinh tế.",
  },
  {
    src: "/images/Gym2.jpg",
    description:
      "Tận hưởng thiết kế hiện đại hòa quyện cùng phong cách cổ điển, mang đến trải nghiệm nghỉ dưỡng hoàn hảo.",
  },
];

export default function FeaturedSection() {
  const [current, setCurrent] = useState(0);
  const [isTextChanging, setIsTextChanging] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const next = () => changeImage((current + 1) % images.length);
  const prev = () => changeImage((current - 1 + images.length) % images.length);

  function changeImage(toIndex: number) {
    if (isTextChanging) return;
    setIsTextChanging(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      setCurrent(toIndex);
      setIsTextChanging(false);
    }, 700);
  }

  const image = images[current];

  return (
    <section className="relative border-t border-b border-black bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row border-l border-black min-h-[550px] px-6 md:px-10">
        {/* --- Khung 1: Cột trái PC => Hàng đầu mobile --- */}
        <div className="md:w-[60px] border-b md:border-b-0 md:border-r border-black flex items-center justify-center py-4 md:py-0">
          <p
            style={{ writingMode: "vertical-rl" }}
            className="text-[12px] tracking-[0.25em] select-none md:block hidden"
          >
            AURALIS RESORT
          </p>
          {/* phiên bản nằm ngang cho mobile */}
          <p className="text-[12px] tracking-[0.3em] select-none md:hidden">
            AURALIS RESORT
          </p>
        </div>

        {/* --- Khung 2: phần chữ giữa PC => Hàng thứ 2 mobile --- */}
        <div className="flex-1 relative flex flex-col justify-center px-4 py-10 md:px-16 md:py-20 border-b md:border-b-0 md:border-r border-black">
          {/* nút điều hướng */}
          <div className="absolute top-3 right-4 flex items-center gap-3 md:top-4 md:right-6">
            <button
              onClick={prev}
              aria-label="previous"
              className="w-8 h-8 md:w-10 md:h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="next"
              className="w-8 h-8 md:w-10 md:h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              →
            </button>
          </div>

          <h3 className="text-[28px] md:text-[40px] font-serif mb-2">
            FEATURED
          </h3>
          <h2 className="text-[28px] md:text-[40px] font-serif leading-tight mb-1">
            AURALIS HAMRONG RESORT
          </h2>
          <p className="font-semibold text-base md:text-lg mb-5">
            nổi bật RESORT AURALIS
          </p>

          <p
            className={`text-[14px] text-gray-700 mb-6 max-w-[480px] leading-relaxed ${
              isTextChanging ? "animate-fadeOut" : "animate-fadeIn"
            }`}
          >
            {image.description}
          </p>

          <button className="text-sm uppercase font-medium underline hover:opacity-70 transition">
            Tìm hiểu thêm →
          </button>
        </div>

        {/* --- Khung 3: phần ảnh bên phải PC => Hàng cuối mobile --- */}
        <div className="relative w-full md:w-[50%] min-h-[280px] md:min-h-[420px] overflow-hidden border-b-0 border-black">
          <div key={current} className="absolute inset-0 animate-slideIn">
            <Image
              src={image.src}
              alt="featured"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* animation CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-5px);
          }
        }
        @keyframes slideIn {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.7s ease forwards;
        }
        .animate-fadeOut {
          animation: fadeOut 0.7s ease forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}