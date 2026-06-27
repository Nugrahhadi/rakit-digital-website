import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rakit Digital | Creative Digital Production Agency",
  description: "Rakit Digital is an attractive, cheerful, and fun digital production agency specializing in high-fidelity websites, applications, and bespoke custom systems.",
  keywords: [
    "Rakit Digital",
    "Rakit Digital Agency",
    "Creative Digital Production Agency",
    "Bespoke Custom Systems Indonesia",
    "High-Fidelity Web Production",
    "Premium Web Development Agency",
    "Software House Purwokerto",
    "Interactive Web App Development",
    "Jasa Pembuatan Website Profesional"
  ],
  authors: [{ name: "Rakit Digital", url: "https://rakitdigital.com" }],
  creator: "Rakit Digital",
  publisher: "Rakit Digital",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rakitdigital.com",
    title: "Rakit Digital | Creative Digital Production Agency",
    description: "Rakit Digital is an attractive, cheerful, and fun digital production agency specializing in high-fidelity websites, applications, and bespoke custom systems.",
    siteName: "Rakit Digital",
    images: [
      {
        url: "https://rakitdigital.com/images/og-image.webp",
        width: 1200,
        height: 630,
        type: "image/webp",
        alt: "Rakit Digital - Creative Digital Production Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakit Digital | Creative Digital Production Agency",
    description: "Rakit Digital specializing in high-fidelity websites, applications, and bespoke custom systems.",
    images: ["https://rakitdigital.com/images/og-image.webp"],
  },
  alternates: {
    canonical: "https://rakitdigital.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-cream text-primary">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0EDW4G5QVL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0EDW4G5QVL');
            gtag('config', 'AW-18257353348');
          `}
        </Script>
      </body>
    </html>
  );
}