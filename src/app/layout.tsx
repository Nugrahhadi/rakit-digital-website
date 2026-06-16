import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rakit Digital | Creative Digital Production Agency",
  description: "Rakit Digital is an attractive, cheerful, and fun digital production agency specializing in high-fidelity websites, applications, and bespoke custom systems.",
  keywords: ["Rakit Digital", "Digital Agency", "Web Production", "Web Development", "App Development", "Custom Software", "Indonesia Development", "Creative Agency"],
  authors: [{ name: "Rakit Digital" }],
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
      <body className="min-h-full flex flex-col bg-cream text-primary">{children}</body>
    </html>
  );
}
