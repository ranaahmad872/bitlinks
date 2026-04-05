import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./font/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-50 min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 h-screen md:h-[70vh] items-center px-8 md:px-16">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 justify-center items-center md:items-start text-center md:text-left">
          <h1 className={`text-4xl md:text-6xl font-extrabold text-purple-900 leading-tight ${poppins.className}`}>
            The best URL shortener in the Market
          </h1>
          <p className="max-w-lg text-gray-600 text-lg">
            We are the most straightforward URL Shortener in the world. No tracking, 
            no forced logins—just fast, clean links designed for your privacy.
          </p>
          
          <div className='flex gap-4'>
            <Link href="/shorten">
              <button className='bg-purple-600 hover:bg-purple-700 transition-all rounded-full px-8 py-3 font-bold text-white shadow-md'>
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className='bg-white border border-purple-200 hover:bg-purple-50 transition-all rounded-full px-8 py-3 font-bold text-purple-600 shadow-sm'>
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex justify-center relative w-full h-full">
           <Image 
             className="mix-blend-darken object-contain" 
             alt="Vector Illustration" 
             src="/vector.jpg" 
             fill={true}
             priority 
           />
        </div>
      </section>
    </main>
  );
}