import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const noto_sans = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이하현 | 프론트엔드 개발자 포트폴리오",
  description: "사용자 경험을 중시하는 프론트엔드 개발자 이하현의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 다양한 프로젝트를 소개합니다.",
  keywords: "프론트엔드 개발자, React, Next.js, TypeScript, 포트폴리오, 이하현",
  authors: [{ name: "이하현" }],
  creator: "이하현",
  publisher: "이하현",
  openGraph: {
    title: "이하현 | 프론트엔드 개발자 포트폴리오",
    description: "사용자 경험을 중시하는 프론트엔드 개발자 이하현의 포트폴리오",
    url: "https://im-madylin.github.io",
    siteName: "이하현 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
