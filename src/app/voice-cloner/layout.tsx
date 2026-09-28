import type { Metadata } from "next";
import { breadcrumbs, jsonLd } from "../structured-data";

export const metadata: Metadata = {
  title: "Voice Cloner — AI text-to-speech in your own voice",
  description:
    "Voice Cloner for iOS clones your voice from a short sample and reads any text back in it. ElevenLabs and Qwen3-TTS, preset speakers, voice design, 16+ languages. Free to start, by DaSecure Solutions.",
  alternates: { canonical: "https://dasecure.com/voice-cloner" },
  openGraph: {
    title: "Voice Cloner — AI text-to-speech in your own voice",
    description:
      "Clone your voice from a short sample and generate speech that sounds like you. iOS app by DaSecure Solutions.",
    url: "https://dasecure.com/voice-cloner",
    type: "website",
  },
};

export default function VoiceClonerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbs([{ name: "Voice Cloner", path: "/voice-cloner" }]),
          ),
        }}
      />
      {children}
    </>
  );
}
