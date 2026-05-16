import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MathClass - 나만의 수학교실",
  description: "쉽고 재미있게 배우는 나만의 수학교실 만들기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* 상단 헤더 컴포넌트 */}
        <Header />
        
        {/* 메인 콘텐츠 영역 */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        
        {/* 하단 푸터 컴포넌트 */}
        <Footer />
      </body>
    </html>
  );
}
