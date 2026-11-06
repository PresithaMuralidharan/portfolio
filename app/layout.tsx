import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080B14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — Data Science & AI Portfolio | Coimbatore Institute of Technology`,
  description: `${SITE_CONFIG.name} is an Integrated MSc Data Science student at CIT specializing in Machine Learning, Natural Language Processing, Big Data, and practical Python applications.`,
  keywords: [
    "Presitha M",
    "Data Science Student",
    "Machine Learning",
    "Natural Language Processing",
    "Tamil-English NLP",
    "Resume Screening AI",
    "NetPulse Air Quality",
    "Coimbatore Institute of Technology",
    "CIT Data Science",
    "Python Developer",
    "Big Data Hadoop",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://presitha-m.vercel.app",
    title: `${SITE_CONFIG.name} — Data Science & AI Portfolio`,
    description: SITE_CONFIG.bio,
    siteName: `${SITE_CONFIG.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — Data Science Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — Data Science & AI Portfolio`,
    description: SITE_CONFIG.bio,
    creator: "@presitha_m",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} dark`}>
      <body className="min-h-screen bg-[#080B14] text-slate-100 antialiased selection:bg-brand-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

