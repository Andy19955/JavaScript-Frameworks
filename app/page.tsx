import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex justify-center">
        <div className="max-w-6xl w-full py-20 px-6">
          <h1 className="text-4xl font-bold mb-6">Welcome to The Online Store</h1>
          <p className="text-lg text-gray-600 mb-10">Discover our wide range of products and enjoy exclusive deals.</p>
          <a href="/about" className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">
            Learn More
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
