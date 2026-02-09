import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-16">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-4">
              Bring Your Imagination to Life
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              From Digital Dreams to Physical Reality
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              Join thousands of hobbyists sharing unique 3D designs. If you can
              dream it, someone here has probably modeled it.
            </p>
            <button className="border-2 border-black px-8 py-3 font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors">
              Start Creating
            </button>
          </div>

          {/* Image Placeholder */}
          <div className="relative w-full max-w-md aspect-square bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/home-page-hero-img.jpg"
              alt="3D printer next to some printed figures"
              width={742}
              height={742}
              priority
            />
          </div>
        </section>
      </div>
    </main>
  );
}
