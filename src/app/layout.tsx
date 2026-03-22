import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kim So Young Portfolio",
  description: "Bilingual portfolio and admin site for Kim So Young",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
