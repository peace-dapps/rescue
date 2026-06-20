import type { Metadata } from "next";
import "./globals.css";

// NOTE: On Vercel deploy, replace this with next/font/google imports:
// import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
// Google Fonts are blocked in this build environment.

export const metadata: Metadata = {
  title: "$RESCUE — Every Buy Saves a Life",
  description: "A Solana charity token funding real pit bull rescues. 100% community-driven, 100% on-chain transparent.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "$RESCUE — Every Buy Saves a Life",
    description: "A Solana charity token funding real pit bull rescues.",
    type: "website",
    url: "https://rescueonsol.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "$RESCUE — Every Buy Saves a Life",
    description: "A Solana charity token funding real pit bull rescues.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased"
        style={{
          fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif",
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          .font-display, [class*="font-display"] { font-family: 'Instrument Serif', Georgia, serif !important; }
          .font-body { font-family: 'DM Sans', system-ui, sans-serif !important; }
          .font-mono, [class*="font-mono"] { font-family: 'JetBrains Mono', monospace !important; }
        `}} />
        {children}
      </body>
    </html>
  );
}
