import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const noto_sans = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hahyun's Portfolio",
  description: "Portfolio of front-end developer Hahyun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${noto_sans.className}`}>{children}</body>
    </html>
  );
}
