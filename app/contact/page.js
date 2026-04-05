// Change 'Github' to 'GitHub'
import { Mail, Twitter, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-purple-50 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-4">
          Let&apos;s Connect
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Pick your favorite platform!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <a
            href="mailto:hello@example.com"
            className="group p-8 bg-white rounded-3xl shadow-sm border border-purple-100 hover:shadow-xl hover:bg-purple-600 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <Mail className="w-10 h-10 text-purple-600 group-hover:text-white mb-4" />
              <h3 className="text-xl font-bold text-purple-900 group-hover:text-white">
                Email Me
              </h3>
              <p className="text-gray-500 group-hover:text-purple-100 mt-2">
                hello@yourdomain.com
              </p>
            </div>
          </a>

          {/* Community Support */}
          <div className="p-8 bg-purple-100 rounded-3xl border border-dashed border-purple-300 flex flex-col items-center justify-center">
            <MessageSquare className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-purple-900">Live Support</h3>
            <p className="text-gray-600 mt-2">Coming Soon!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
