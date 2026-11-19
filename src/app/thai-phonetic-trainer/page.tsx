import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thai Phonetic Trainer: Support",
  alternates: { canonical: "https://dasecure.com/thai-phonetic-trainer" },
  description:
    "Help for Thai Phonetic Trainer, the app that teaches you to read, hear and say Thai: the Thai voice, the speech check, the polite ending, and how to contact us.",
};

export default function ThaiPhoneticTrainerSupportPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="text-gray-500 hover:text-white transition text-sm mb-6 inline-block">
          ← DaSecure Solutions
        </Link>

        <h1 className="text-3xl font-bold mb-2">Thai Phonetic Trainer: Support</h1>
        <p className="text-gray-500 mb-10">For iPhone and Android</p>

        <div className="max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <p>
              Thai Phonetic Trainer teaches you to read, hear and say Thai: the 44 consonants, 32 vowels and 5 tones, then 50 everyday phrases and the numbers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">I can&apos;t hear the Thai voice</h2>
            <p>
              The app uses your phone&apos;s own Thai voice. Check that the phone is not on silent and the volume is up. On Android, open Settings, search for Text-to-speech, and install the Thai voice data if it is missing. The app&apos;s Settings screen has a test button.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">The app doesn&apos;t hear me</h2>
            <p>
              Allow the microphone and speech recognition when asked, or turn them on in your phone&apos;s settings for Thai Phonetic Trainer. Speech recognition usually needs an internet connection. If your phone has no Thai speech recognition, the app records you instead so you can compare with the voice by ear.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">It says I&apos;m wrong when I&apos;m right</h2>
            <p>
              The app reports what the phone&apos;s speech recognition heard. It checks the word, not the pitch, so treat it as a guide and use the playback to compare.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Khrap or kha?</h2>
            <p>
              The switch on the Beginner tab sets the polite ending and the word for &quot;I&quot; to match how you speak.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Starting again</h2>
            <p>
              Settings, Reset progress clears your progress. Progress is saved on your phone only, so it does not move to a new phone.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p>
              Email{" "}
              <a href="mailto:info@dasecure.com" className="text-white underline">
                info@dasecure.com
              </a>
              . Read the{" "}
              <Link href="/thai-phonetic-trainer/privacy" className="text-white underline">
                privacy policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
