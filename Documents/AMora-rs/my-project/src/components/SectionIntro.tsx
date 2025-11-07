export default function SectionIntro() {
    return (
      <section className="bg-white text-center py-24">
        {/* --- Tiêu đề --- */}
        <h2 className="text-4xl font-serif text-gray-900 mb-3">
          ABOUT US
        </h2>
        <p className="text-gray-600 text-base mb-8">
          
        </p>
  
        {/* --- Đoạn mô tả --- */}
        <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-14 text-[15px]">
        Welcome to Auralis Ham Rong Resort, an architectural masterpiece blending modern elegance with natural elements. Located in the serene Phu Quoc, we invite you to discover a destination built on the philosophy of harmony and well-being.From our stunning ocean views to our meticulously curated experiences, Auralis is dedicated to delivering impeccable standards and moments of pure bliss.
        </div>
  
        {/* --- 3 hình ảnh hàng ngang --- */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <img
            src="/images/pool.jpg"
            alt="Hồ bơi"
            className="w-full h-[300px] object-cover rounded-lg shadow-sm"
          />
          <img
            src="/images/gym.jpg"
            alt="gym"
            className="w-full h-[300px] object-cover rounded-lg shadow-sm"
          />
          <img
            src="/images/view.jpg"
            alt="View"
            className="w-full h-[300px] object-cover rounded-lg shadow-sm"
          />
        </div>
      </section>
    )
  }