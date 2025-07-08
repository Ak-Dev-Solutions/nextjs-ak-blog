import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg";

export default function Home() {
  return (
    // ✅ Changed background color here
    <main className="relative min-h-screen text-white bg-[#C4CDD3]">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-24 text-center">
        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          width={120}
          height={120}
          className="mb-6 animate-pulse drop-shadow-lg"
        />

        {/* Title */}
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Welcome to <span className="text-blue-500">Ak&#39;s Blog</span>
        </h1>

        {/* Typewriter Subtitle */}
        <p className="max-w-xl mb-6 overflow-hidden font-mono text-xl border-r-2 border-white sm:text-2xl whitespace-nowrap animate-typewriter">
          Bytes of knowledge. Posts with purpose.
        </p>

        {/* Buttons with routing */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/">
            <button className="px-6 py-3 font-semibold transition bg-blue-600 rounded-full shadow-md hover:bg-blue-700">
              Get Started
            </button>
          </Link>
          <Link href="/blog">
            <button className="px-6 py-3 font-semibold transition border border-gray-400 rounded-full hover:bg-gray-700">
              Learn More
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
