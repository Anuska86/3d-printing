export default function AboutPage() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-6 py-16 md:px-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image Container with the Circular Mask */}
          <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-full border-none">
            <img
              src="/about-img.jpg"
              alt="A 3D printer printing an orange figure"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              About PrintForge
            </p>
            <h1 className="mb-6 text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight">
              Empowering Makers Worldwide
            </h1>
            <p className="mb-6 text-gray-600 text-lg leading-relaxed">
              Founded in 2023, PrintForge has quickly become the go-to platform
              for 3D printing enthusiasts, makers, and professional designers.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to foster a vibrant community where creativity
              meets technology.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" aria-hidden="true" />

      <section className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid gap-12 md:gap-0 md:grid-cols-3">
            <article className="md:pr-12">
              <h3 className="mb-3 text-2xl font-bold tracking-tighter">
                100K+ Models
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Access our vast library of community-created 3D models, from
                practical tools to artistic creations.
              </p>
            </article>

            <article className="md:px-12 md:border-x border-gray-200">
              <h3 className="mb-3 text-2xl font-bold tracking-tighter">
                Active Community
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Join thousands of makers who share tips, provide feedback, and
                collaborate on projects.
              </p>
            </article>

            <article className="md:pl-12">
              <h3 className="mb-3 text-2xl font-bold tracking-tighter">
                Free to Use
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Most models are free to download, with optional premium features
                for power users.
              </p>
            </article>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" aria-hidden="true" />

      <section className="container max-w-3xl px-4 py-8 mx-auto">
        <div className="prose max-w-none">
          <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>
          <p className="mb-4 text-gray-700">
            At PrintForge, we believe that 3D printing is revolutionizing the
            way we create, prototype, and manufacture. Our platform serves as a
            bridge between designers and makers, enabling the sharing of
            knowledge and creativity that pushes the boundaries of what's
            possible with 3D printing.
          </p>
          <p className="text-gray-700">
            Whether you're a hobbyist looking for your next weekend project, an
            educator seeking teaching materials, or a professional designer
            wanting to share your creations, PrintForge provides the tools and
            community to support your journey in 3D printing.
          </p>
        </div>
      </section>
    </main>
  );
}
