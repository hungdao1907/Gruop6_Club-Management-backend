"use client"
import { useEffect, useState } from "react"

export default function StickyNav() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`hidden md:block w-full z-20 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 backdrop-blur-md bg-white/70 shadow-md text-black border-b border-gray-200"
          : "absolute top-[64px] bg-white/10 backdrop-blur-sm border-b border-white/30 text-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-center gap-10 py-3 text-sm font-medium tracking-wide">
        <a href="#" className="hover:underline">AURALIS HAM RONG RESORT</a>
        <a href="#" className="hover:underline">VỀ RESORT AURALIS</a>
        <a href="#" className="hover:underline">Phòng</a>
        <a href="#" className="hover:underline">Ưu đãi</a>
        <a href="#" className="hover:underline">Ẩm thực</a>
        <a href="#" className="hover:underline">Tiện ích</a>
        <a href="#" className="hover:underline">Tiệc cưới & Hội nghị</a>
      </div>
    </div>
  )
}