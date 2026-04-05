import localFont from "next/font/local";

const poppins = localFont({
  src: "../font/Poppins-ExtraBold.ttf", // Adjust path if needed
  variable: "--font-poppins",
  weight: "100 900",
});

export default function About() {
  return (
    <main className="bg-purple-50 min-h-screen py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className={`text-4xl md:text-5xl font-extrabold text-purple-900 mb-6 ${poppins.className}`}>
          About Our Service
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          We believe that the internet should be simple. Most URL shorteners are cluttered with 
          ads, tracking scripts, and unnecessary login requirements. We built this tool to 
          provide a **privacy-first** experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
            <h3 className="font-bold text-purple-800 mb-2">Fast</h3>
            <p className="text-sm text-gray-600">Redirects happen in milliseconds without interstitial ads.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
            <h3 className="font-bold text-purple-800 mb-2">Secure</h3>
            <p className="text-sm text-gray-600">We don&apos;t sell your data or track your browsing habits.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
            <h3 className="font-bold text-purple-800 mb-2">Free</h3>
            <p className="text-sm text-gray-600">No hidden subscriptions. Just paste your link and go.</p>
          </div>
        </div>
      </div>
    </main>
  );
}