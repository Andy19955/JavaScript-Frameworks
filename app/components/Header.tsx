import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-black text-white">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-4">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-linear-to-br from-orange-400 to-orange-600 shadow-md">
            <span className="font-bold text-black">TOS</span>
          </div>
          <h1 className="text-xl font-semibold tracking-tight">The Online Store</h1>
        </Link>
        <nav className="flex items-center gap-3">
          <Link href="/" className="px-3 py-2 rounded-md text-orange-300 hover:bg-orange-600/10 hover:text-orange-200 transition">
            Home
          </Link>
          <Link href="/cart" className="px-3 py-2 rounded-md text-orange-300 hover:bg-orange-600/10 hover:text-orange-200 transition">
            Cart
          </Link>
          <Link href="/contact" className="px-3 py-2 rounded-md border border-orange-600 bg-orange-600/10 text-orange-100 hover:bg-orange-600 hover:text-black transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
