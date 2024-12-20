import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { StateProvider } from '../providers/stateProvider';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next.jsの練習ページ",
  description: "Next.jsを練習するためのデモサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StateProvider>
          {children}
        </StateProvider>
      </body>
    </html>
  );
}
