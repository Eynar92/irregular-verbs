import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BabeLift | English Verb Conjugation Tool",
  description: "Master English verb conjugations with BabeLift! Practice and learn base form, 3rd person, gerund, simple past, past participle, and more in an interactive table. Perfect for ESL students and language learners.",
  keywords: [
    "English verbs",
    "verb conjugation",
    "ESL",
    "learn English",
    "past participle",
    "gerund",
    "irregular verbs",
    "language learning"
  ],
  authors: [{ name: "Eynar Joel Alvarez M.", url: "https://irregular-regular-verbs.vercel.app" }],
  creator: "Joel Alvarez",
  publisher: "Joel Alvarez",
  openGraph: {
    title: "BabeLift | English Verb Conjugation Tool",
    description: "Interactive tool to master English verb conjugations for all tenses.",
    url: "https://irregular-regular-verbs.vercel.app",
    siteName: "BabeLift"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
