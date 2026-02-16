import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import ProductCard from "./components/ProductCard";
import { Product } from "./interfaces/product";

interface Review {
  id: string;
  username: string;
  rating: number;
}

export default async function Home() {
  const response = await fetch("https://v2.api.noroff.dev/online-shop");
  if (!response.ok) {
    return <p>Kunne ikke laste produkter. Prøv igjen senere.</p>;
  }

  const result = await response.json();
  const products = result.data;

  return (
    <>
      <Header />
      <main className="flex-1 flex justify-center">
        <div className="max-w-7xl w-full py-16 px-6">
          <section className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-5xl font-extrabold mb-4">Discover standout products</h1>
              <p className="text-lg text-zinc-300 mb-6">Shop curated goods with bold orange accents and strong contrast — crafted for style and usability.</p>
              <div className="flex gap-3">
                <a href="#shop" className="rounded-md bg-orange-500 px-5 py-3 text-black font-semibold shadow hover:brightness-95 transition">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative h-64 w-full max-w-md rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=60&auto=format&fit=crop"
                  alt="Hero"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                  unoptimized
                />
              </div>
            </div>
          </section>
          <section id="shop">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Featured products</h2>
              <a href="#" className="text-sm text-orange-300 hover:underline">
                View all
              </a>
            </div>
            {products && products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.slice(0, 8).map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-center text-zinc-400">Ingen produkter tilgjengelig.</p>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
