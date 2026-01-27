export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-16">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-4">
              Your go-to platform for 3D printing files
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Discover what’s possible with 3D printing
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              Join our community of creators and explore a vast library of
              user-submitted models.
            </p>
            <button className="border-2 border-black px-8 py-3 font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors">
              Browse Models
            </button>
          </div>

          {/* Image Placeholder */}
          <div className="relative w-full max-w-md aspect-square bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
            <img src="/home-page-hero-img.jpg"></img>
          </div>
        </section>
      </div>
    </main>
  );
}
