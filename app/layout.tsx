import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "신촌 프리미엄 벗방 셔츠룸 | 이달인 실장",
  description: "신촌 프리미엄 벗방 셔츠룸. 전화 문의 및 상담 가능.",

  verification: {
    google: "mHVDHFzN6MYAfdGj6gkj0BMizBgM3Y5TJjh7K-WOg-g",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
