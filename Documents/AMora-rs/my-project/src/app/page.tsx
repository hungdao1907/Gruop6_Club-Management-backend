import TopBar from "@/components/TopBar"
import StickyNav from "@/components/StickyNav"
import SectionIntro from "@/components/SectionIntro"
import FeaturedSection from "@/components/FeaturedSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      {/* --- Hero Section --- */}
      <div className="relative w-full h-screen">
        <img
          src="/images/hero.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10">
          <TopBar />
          <StickyNav />
        </div>
      </div>

      {/* --- Phần giới thiệu bên dưới --- */}
      <SectionIntro />
      
      {/* Featured Section */}
      <FeaturedSection />

      <Footer />
    </div>
  )
}