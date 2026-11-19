import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thai Phonetic Trainer: Privacy Policy",
  alternates: { canonical: "https://dasecure.com/thai-phonetic-trainer/privacy" },
  description:
    "Privacy policy for Thai Phonetic Trainer. The app has no accounts, ads or analytics, and DaSecure Solutions collects no information from it.",
};

export default function ThaiPhoneticTrainerPrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/thai-phonetic-trainer" className="text-gray-500 hover:text-white transition text-sm mb-6 inline-block">
          ← Thai Phonetic Trainer
        </Link>

        <h1 className="text-3xl font-bold mb-2">Thai Phonetic Trainer: Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Effective date: November 19, 2026</p>

        <div className="max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <p>
              Thai Phonetic Trainer is made by DaSecure Solutions LLC. This policy covers version 1.0 of the app on iPhone and Android.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">The short version</h2>
            <p>
              The app has no accounts, no ads and no analytics. We do not collect, receive or store any information about you. Everything the app saves stays on your phone.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">What stays on your phone</h2>
            <p>
              Your lesson progress and your settings are saved on your phone only. They are not sent to us or to anyone else. You can erase them in the app under Settings, Reset progress, or by deleting the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Microphone and speech recognition</h2>
            <p>
              When you tap the microphone to practise, the app records your voice so it can tell you which Thai sound or phrase it heard, and so you can play your attempt back. To do this the app passes the audio to your phone&apos;s built-in speech recognition service: Apple&apos;s on iPhone, Google&apos;s on Android. Depending on your phone and its settings, that service may process the audio on your phone or on Apple&apos;s or Google&apos;s servers, under their privacy policies. The app keeps your latest recording in temporary storage on your phone for playback. We never receive your recordings or the transcripts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">The Thai voice</h2>
            <p>
              The voice you hear is your phone&apos;s built-in text-to-speech voice. Nothing is sent to us to produce it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Permissions</h2>
            <p>
              The app asks for the microphone and for speech recognition. Both are used only for the practice feature above. If you decline, you can still use the lessons and compare by ear.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Children</h2>
            <p>
              The app is not directed at children under 13, and it does not collect personal information from anyone.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Changes</h2>
            <p>
              If a later version collects any information, for example for an optional paid feature, this page will be updated before that version is released.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p>
              DaSecure Solutions LLC, 2261 Market Street Ste 99785, San Francisco, CA 94114, USA. Email{" "}
              <a href="mailto:info@dasecure.com" className="text-white underline">
                info@dasecure.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
