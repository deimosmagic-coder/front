import type { Metadata } from "next";
import { Inter, Onest, Oswald, JetBrains_Mono, Iceberg, Iceland } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const iceberg = Iceberg({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-iceberg",
});

const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-iceland",
});

export const metadata: Metadata = {
  title: "e/",
  description: "Elapse AI — Know exactly what your customers want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${onest.variable} ${oswald.variable} ${jetbrainsMono.variable} ${iceberg.variable} ${iceland.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
