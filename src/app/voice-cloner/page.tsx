"use client";

import Link from "next/link";

export default function VoiceCloner() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            <span className="text-sm">DaSecure</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* App Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-28 h-28 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-[28px] flex items-center justify-center shadow-2xl shadow-purple-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" x2="12" y1="19" y2="22"/>
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Voice Cloner
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Clone any voice in seconds. Create AI-powered voiceovers with just a 10-second sample.
          </p>

          {/* App Store Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://apps.apple.com/app/voice-cloner-ai-tts/id6740000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg leading-tight">App Store</div>
              </div>
            </a>
          </div>

          {/* Preview */}
          <div className="relative max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-3xl"></div>
            <div className="relative bg-gray-900 rounded-[3rem] p-3 border border-gray-800 shadow-2xl">
              <div className="bg-gray-950 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                <div className="p-6 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white">Voice Cloner</h3>
                    <p className="text-sm text-gray-500">Tap to record</p>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="bg-gray-800/50 rounded-xl p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <span className="text-lg">🎤</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">My Voice</div>
                          <div className="text-xs text-gray-500">10s sample</div>
                        </div>
                        <div className="text-green-400 text-xs">Ready</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-xl p-3">
                      <div className="text-sm text-gray-400 mb-2">Enter text to speak:</div>
                      <div className="bg-gray-900 rounded-lg p-2 text-sm text-gray-300">
                        Hello, this is my cloned voice...
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white">
                    Generate Voice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Powerful Voice Cloning
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Cloning</h3>
              <p className="text-gray-400">
                Clone any voice with just a 10-second audio sample. No lengthy training required.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Language</h3>
              <p className="text-gray-400">
                Support for English, Chinese, Japanese, Korean, Spanish, French, and more.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Voice Design</h3>
              <p className="text-gray-400">
                Create unique voices from text descriptions. "A warm, friendly female voice with a British accent."
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyan-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">💾</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Save & Reuse</h3>
              <p className="text-gray-400">
                Save your cloned voices and generated clips. Access your voice library anytime.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🎙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Preset Voices</h3>
              <p className="text-gray-400">
                Choose from 9 high-quality preset voices for instant text-to-speech without cloning.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">📤</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Export</h3>
              <p className="text-gray-400">
                Download generated audio as WAV files. Share directly to other apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Perfect For
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2">🎬 Content Creators</h3>
              <p className="text-gray-400">
                Create voiceovers for YouTube videos, TikToks, and podcasts without expensive studio time.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2">📚 Audiobook Narration</h3>
              <p className="text-gray-400">
                Narrate stories and books with consistent, natural-sounding voice output.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2">🎮 Game Development</h3>
              <p className="text-gray-400">
                Prototype character voices quickly. Generate placeholder dialogue for indie games.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2">♿ Accessibility</h3>
              <p className="text-gray-400">
                Help those with speech difficulties communicate with a voice that sounds like them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-orange-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Clone Your Voice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Download Voice Cloner and start creating in seconds.
          </p>
          <a
            href="https://apps.apple.com/app/voice-cloner-ai-tts/id6740000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download for iOS
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} DaSecure Solutions LLC. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/support" className="hover:text-white transition">Support</Link>
              <Link href="/" className="hover:text-white transition">More Apps</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
