import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nidhi Shah — Full-Stack Software Engineer",
  description:
    "Nidhi Shah is a Full-Stack Software Engineer building Applied AI systems — RAG pipelines, LLM orchestration, and distributed cloud infrastructure.",
  metadataBase: new URL("https://nidhishah.dev"),
  openGraph: {
    title: "Nidhi Shah — Full-Stack Software Engineer",
    description:
      "Applied AI systems: RAG pipelines, LLM orchestration, and distributed cloud infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-text antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
