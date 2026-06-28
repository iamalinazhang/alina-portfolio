import type { Metadata } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alina Zhang - Academic Portfolio",
  description:
    "Personal academic portfolio showcasing papers, projects, and research in AI/NLP",
  keywords: ["AI", "NLP", "Machine Learning", "Research", "Portfolio"],
  authors: [{ name: "Alina Zhang" }],
  openGraph: {
    title: "Alina Zhang - Academic Portfolio",
    description:
      "Personal academic portfolio showcasing papers, projects, and research in AI/NLP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-primary">
        <div className="flex flex-col min-h-screen">
          {/* 导航栏 */}
          <Header />

          {/* 主内容区域 */}
          <main className="flex-1">{children}</main>

          {/* 页脚 */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
