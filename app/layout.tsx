import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trijit's Portfolio",
  description: "A portfolio site built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script 
        src="https://cloud.umami.is/script.js" 
        data-website-id="e5cfe678-520e-4fb0-952a-b78bb9856ce5" 
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
