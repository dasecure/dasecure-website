import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-emerald-400">da</span>secure
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="#about" className="text-gray-300 hover:text-white transition">About</Link>
            <Link href="#products" className="text-gray-300 hover:text-white transition">Products</Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Building software that{" "}
              <span className="text-emerald-400">solves real problems</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              dasecure solutions creates micro-SaaS products and mobile apps 
              that fill gaps in the market. Simple tools, real value.
            </p>
            <div className="flex gap-4">
              <Link 
                href="#products" 
                className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-3 rounded-lg transition"
              >
                View Products
              </Link>
              <Link 
                href="#contact" 
                className="border border-gray-700 hover:border-gray-500 px-8 py-3 rounded-lg transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-emerald-400 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Problem First</h3>
              <p className="text-gray-400">
                We identify real gaps in the market before writing a single line of code.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-emerald-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Ship Fast</h3>
              <p className="text-gray-400">
                Lean products that solve one thing well. No bloat, no feature creep.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-emerald-400 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile Native</h3>
              <p className="text-gray-400">
                Built for the modern user. Mobile-first, always accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Products</h2>
          <p className="text-gray-400 mb-12">Tools we've built for modern businesses.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="https://passqr.com" 
              target="_blank"
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 relative overflow-hidden hover:border-emerald-500/50 transition group"
            >
              <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 text-sm px-3 py-1 rounded-full">
                Live
              </div>
              <div className="text-4xl mb-4">🎫</div>
              <h3 className="text-2xl font-bold mb-2">PassQR</h3>
              <p className="text-gray-400 mb-4">
                Digital passes for modern businesses. QR tickets, memberships, and loyalty cards with Apple Wallet support.
              </p>
              <span className="text-emerald-400 group-hover:text-emerald-300 font-semibold transition">
                Visit passqr.com →
              </span>
            </Link>
            
            <Link 
              href="https://iotpush.com" 
              target="_blank"
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 relative overflow-hidden hover:border-orange-500/50 transition group"
            >
              <div className="absolute top-4 right-4 bg-orange-500/20 text-orange-400 text-sm px-3 py-1 rounded-full">
                Live
              </div>
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="text-2xl font-bold mb-2">iotpush</h3>
              <p className="text-gray-400 mb-4">
                Push notifications for IoT devices. One curl command from your Raspberry Pi, Arduino, or server.
              </p>
              <span className="text-orange-400 group-hover:text-orange-300 font-semibold transition">
                Visit iotpush.com →
              </span>
            </Link>

            <Link 
              href="https://waitlistwin.com" 
              target="_blank"
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 relative overflow-hidden hover:border-purple-500/50 transition group"
            >
              <div className="absolute top-4 right-4 bg-purple-500/20 text-purple-400 text-sm px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-2">WaitlistWin</h3>
              <p className="text-gray-400 mb-4">
                Beautiful launch waitlists in 60 seconds. Grow your audience before you ship.
              </p>
              <span className="text-purple-400 group-hover:text-purple-300 font-semibold transition">
                Visit waitlistwin.com →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-8">Have an idea? Want to collaborate? Let's talk.</p>
          
          <div className="max-w-md">
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition"
              />
              <textarea 
                placeholder="Your message..."
                rows={4}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition"
              />
              <button 
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-3 rounded-lg transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500">
            © 2026 dasecure solutions LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="https://github.com/dasecure" className="text-gray-500 hover:text-white transition">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
