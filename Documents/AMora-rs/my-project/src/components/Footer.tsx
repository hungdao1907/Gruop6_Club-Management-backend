"use client";
import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (section: string) => setOpen(open === section ? null : section);

  return (
    <footer className="bg-[#111] text-[#bfbfbf] text-[13px] font-sans tracking-wide leading-relaxed">
      {/* --- Phần chính --- */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-[170px] pt-12 pb-8">
        {/* Tiêu đề */}
        <h2 className="text-white text-[22px] font-serif mb-10 tracking-wide text-center md:text-left">
          AMORA HAM RONG RESORT
        </h2>

        {/* --- PC layout --- */}
        <div className="hidden md:grid grid-cols-[1.1fr_1.1fr_0.8fr_1fr_1.2fr] gap-10">
          {/* DESTINATION */}
          <div>
            {/* Tiêu đề: đổi màu giống Lotte (kem nhạt) */}
            <h3 className="text-[#ded6c6] text-[16px] font-serif mb-4">DESTINATION</h3>
            <ul className="space-y-[6px]">
              {/* các mục nhỏ hơn + màu mờ hơn */}
              <li className="text-[#9d9d9d] text-[13px]">About US</li>
              <li className="text-[#9d9d9d] text-[13px]">----------</li>
              <li className="text-[#9d9d9d] text-[13px]">----------</li>
              <li className="text-[#9d9d9d] text-[13px]">----------</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-[#ded6c6] text-[16px] font-serif mb-4">COMPANY</h3>
            <ul className="space-y-[6px]">
              <li className="text-[#9d9d9d] text-[13px]">-----------------</li>
              <li className="text-[#9d9d9d] text-[13px]">-----------------</li>
              <li className="text-[#9d9d9d] text-[13px]">-----------------</li>
              <li className="text-[#9d9d9d] text-[13px]">-----------------</li>
              <li className="text-[#9d9d9d] text-[13px]">-----------------</li>
            </ul>
          </div>

          {/* HOTLINE */}
          <div>
            <h3 className="text-[#ded6c6] text-[16px] font-serif mb-4">HOTLINE</h3>
            <ul className="space-y-[6px]">
              <li className="text-[#9d9d9d] text-[13px]">-----------------</li>
            </ul>
          </div>

          {/* TERMS & POLICY */}
          <div className="border-r border-[#2c2c2c] pr-6">
            <h3 className="text-[#ded6c6] text-[16px] font-serif mb-4">TERMS & POLICY</h3>
            <ul className="space-y-[6px]">
              <li className="text-[#9d9d9d] text-[13px]">-----------------</li>
              <li className="text-[#9d9d9d] text-[13px]">-----------------</li>
            </ul>
          </div>

          {/* CONTACT */}
<div className="pl-6 relative">
  {/* App icons (desktop only) - đặt phía trên, canh phải */}
  <div className="hidden md:flex justify-end absolute right-0 top-[-60px] items-center gap-5">
    <div className="flex items-center gap-2">
      <img src="/images/appstore.png" alt="App Store" className="w-[28px] h-auto" />
      <span className="text-[#d1d1d1] text-sm">App Store</span>
    </div>
    <div className="flex items-center gap-2">
      <img src="/images/googleplay.png" alt="Google Play" className="w-[28px] h-auto" />
      <span className="text-[#d1d1d1] text-sm">CH Play</span>
    </div>
  </div>

  <h3 className="text-[#ded6c6] text-[16px] font-serif mb-4">CONTACT</h3>
  <p className="text-[#d1d1d1]">AMORA HAMRONG RESORT</p>
  <p className="text-[#bfbfbf]">Đại Học Văn lang , Dương quảng hàm , Quận Bình Thạnh</p>
  <p className="text-[#bfbfbf]">Thành phố Hồ Chí Minh, Việt Nam</p>
  <p className="mt-[4px] text-[#bfbfbf]">099-999-9999</p>

  {/* --- Icon mạng xã hội --- */}
  <div className="flex items-center gap-4 mt-6">
    <SocialIcon src="/images/Tripadvisor.png" alt="Tripadvisor" />
    <SocialIcon src="/images/youtube.png" alt="YouTube" />
    <SocialIcon src="/images/instagram.png" alt="Instagram" />
    <SocialIcon src="/images/facebook.png" alt="Facebook" />
    <SocialIcon src="/images/blog.png" alt="Blog" />
  </div>
</div>

        </div>

        {/* --- Mobile layout (accordion) --- */}
        <div className="md:hidden space-y-2">
          {accordionItems.map((item) => (
            <Accordion
              key={item.id}
              title={item.title}
              open={open === item.id}
              onClick={() => toggle(item.id)}
            >
              {item.content}
            </Accordion>
          ))}

          {/* --- Socials + Apps (mobile already had them) --- */}
          <div className="mt-6 ">
            <div className="flex items-center gap-4 mt-6 justify-center">
              <SocialIcon src="/images/Tripadvisor.png" alt="Tripadvisor" />
              <SocialIcon src="/images/youtube.png" alt="YouTube" />
              <SocialIcon src="/images/instagram.png" alt="Instagram" />
              <SocialIcon src="/images/facebook.png" alt="Facebook" />
              <SocialIcon src="/images/blog.png" alt="Blog" />
            </div>

            <div className="flex justify-center items-center gap-5 mt-8">
              <div className="flex items-center gap-2">
                <img src="/images/appstore.png" alt="App Store" className="w-[30px]" />
                <span className="text-[#d1d1d1] text-sm">App Store</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/images/googleplay.png" alt="Google Play" className="w-[30px]" />
                <span className="text-[#d1d1d1] text-sm">CH Play</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Dòng text cuối --- */}
        <div className="mt-8 pt-6 text-[#8f8f8f] text-[11px] leading-6 border-t border-[#2c2c2c]">
          ĐỒ ÁN KHỞI NGHIỆP | ĐỒ ÁN KHỞI NGHIỆP | ĐỒ ÁN KHỞI NGHIỆP | ĐỒ ÁN KHỞI NGHIỆP | ĐỒ ÁN KHỞI NGHIỆP
          <br />
          Đặt voucher chỗ ở tích hợp · Nhân viên ·{" "}
          <span className="text-white underline cursor-pointer">Privacy Policy</span> · FAQ ·
          Cài đặt cookie · Sơ đồ trang web
        </div>
      </div>

      {/* --- Line + thương hiệu --- */}
      <div className="border-t border-[#2c2c2c] mt-6"></div>
      <div className="bg-[#0a0a0a] py-4">
        <div className="max-w-[1440px] mx-auto px-[80px] flex flex-wrap justify-center gap-8 text-[#bcbcbc] text-[13px] font-serif tracking-wide">
          <span className="hover:text-white cursor-pointer">EXAMPLE</span>
          <span className="hover:text-white cursor-pointer">EXAMPLE</span>
          <span className="hover:text-white cursor-pointer">EXAMPLE</span>
          <span className="hover:text-white cursor-pointer">EXAMPLE</span>
          <span className="hover:text-white cursor-pointer">EXAMPLE</span>
        </div>
      </div>
    </footer>
  );
}

/* --- Accordion component --- */
function Accordion({
  title,
  open,
  onClick,
  children,
}: {
  title: string;
  open: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-[#2c2c2c]">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-4 text-white text-[15px] font-serif"
      >
        {title}
        {/* SVG ChevronDown thay cho lucide-react */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className={`w-5 h-5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="pb-4 text-[#bfbfbf]">{children}</div>}
    </div>
  );
}

/* --- SocialIcon component --- */
function SocialIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-[18px] opacity-80 hover:opacity-100 cursor-pointer transition"
    />
  );
}

/* --- Accordion items --- */
const accordionItems = [
  {
    id: "destination",
    title: "DESTINATION",
    content: (
      <ul className="space-y-[6px]">
        <li>About US</li>
        <li>----------</li>
        <li>----------</li>
        <li>----------</li>
      </ul>
    ),
  },
  {
    id: "company",
    title: "COMPANY",
    content: (
      <ul className="space-y-[6px]">
        <li>-----------------</li>
        <li>-----------------</li>
        <li>-----------------</li>
        <li>-----------------</li>
        <li>-----------------</li>
      </ul>
    ),
  },
  {
    id: "hotline",
    title: "HOTLINE",
    content: <ul><li>-----------------</li></ul>,
  },
  {
    id: "policy",
    title: "TERMS & POLICY",
    content: (
      <ul className="space-y-[6px]">
        <li>-----------------</li>
        <li>-----------------</li>
      </ul>
    ),
  },
  {
    id: "contact",
    title: "CONTACT",
    content: (
      <div>
        <p className="text-[#d1d1d1]">AMORA HAMRONG RESORT</p>
        <p>Đại Học Văn lang , Dương quảng hàm , Quận Bình Thạnh</p>
        <p>Thành phố Hồ Chí Minh, Việt Nam</p>
        <p className="mt-[4px]">099-999-9999</p>
      </div>
    ),
  },
];
