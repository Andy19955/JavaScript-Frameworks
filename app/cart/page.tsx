import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cart() {
  return (
    <>
      <Header />
      <main className="flex-1 flex justify-center">
        <div className="max-w-6xl w-full py-20 px-6">
          <h1 className="text-4xl font-bold mb-6">Shopping Cart</h1>
          <p className="text-lg text-gray-600 mb-10">Review and manage the items in your shopping cart.</p>
          <a href="/about" className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">
            Learn More
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
