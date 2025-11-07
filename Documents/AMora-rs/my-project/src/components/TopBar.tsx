"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-30 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200"
          : "absolute top-0 bg-white/10 backdrop-blur-sm border-b border-white/30"
      }`}
    >
      <div
        className={`mx-auto max-w-[1440px] flex justify-between items-center 
                   px-4 md:px-6 py-3 font-sans font-medium transition-colors duration-300
                   ${isSticky ? "text-black" : "text-white"}`}
      >
        {/* --- Logo + Tên --- */}
        <div className="flex items-center gap-2 md:gap-3">
          <Image
            src="/images/logo.png"
            alt="Auralis Resort Logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
          <div
            className={`flex flex-col leading-tight uppercase tracking-wider transition-colors duration-300 ${
              isSticky ? "text-black" : "text-white"
            }`}
          >
            <span className="font-bold text-[16px] md:text-[20px]">AURALIS</span>
            <span className="font-light text-[11px] md:text-[13px] normal-case tracking-normal">
              HAM RONG RESORT
            </span>
          </div>
        </div>

        {/* --- Desktop Navigation --- */}
        <nav
          className={`hidden md:flex items-center gap-8 text-[13px] tracking-wide transition-colors duration-300 ${
            isSticky ? "text-black" : "text-white"
          }`}
        >
          <a href="#" className="hover:underline decoration-1 underline-offset-4 transition">
            Thông báo
          </a>
          <a href="#" className="hover:underline decoration-1 underline-offset-4 transition">
            Yêu cầu đặt chỗ
          </a>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 hover:opacity-70 transition"
            >
              Tiếng Việt
              <span className="text-[10px]">▼</span>
            </button>

            {open && (
              <div
                className="absolute right-0 mt-2 bg-white border border-gray-200 
                           shadow-lg text-sm rounded-md overflow-hidden"
              >
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Tiếng Việt
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  English
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* --- Hamburger cho mobile --- */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`text-2xl md:hidden transition-colors duration-300 ${
            isSticky ? "text-black" : "text-white"
          }`}
        >
          ☰
        </button>
      </div>

      {/* --- Menu xổ xuống cho mobile --- */}
      {menuOpen && (
        <div
          className={`flex flex-col md:hidden items-center gap-4 py-4 text-sm font-medium border-t transition-all duration-300 ${
            isSticky
              ? "bg-white/95 text-black border-gray-200"
              : "bg-black/50 text-white border-white/20"
          }`}
        >
          <a href="#" onClick={() => setMenuOpen(false)}>Thông báo</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Yêu cầu đặt chỗ</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Về Resort</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Phòng</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Ưu đãi</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Ẩm thực</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Liên hệ</a>
        </div>
      )}
    </header>
  );
}