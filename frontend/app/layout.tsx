import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteLogo } from "@/lib/data";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "AI47 Labs — AI-powered products, built to last",
  description:
    "AI47 Labs designs and builds AI-powered mobile apps and web platforms — from first sketch to app store, for our own products and for clients.",
  icons: {
    icon: siteLogo.square,
    shortcut: siteLogo.square,
    apple: siteLogo.square,
  },
  openGraph: {
    title: "AI47 Labs — AI-powered products, built to last",
    description:
      "AI47 Labs designs and builds AI-powered mobile apps and web platforms — from first sketch to app store, for our own products and for clients.",
    images: [{ url: siteLogo.full }],
  },
  twitter: {
    card: "summary",
    title: "AI47 Labs — AI-powered products, built to last",
    description:
      "AI47 Labs designs and builds AI-powered mobile apps and web platforms — from first sketch to app store, for our own products and for clients.",
    images: [siteLogo.full],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}