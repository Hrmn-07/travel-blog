import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Herman's Travel Blog",
  description: "A travel blog built with Next.js and Contentful",
};

export const viewport: Viewport = {
  width: "device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          style={{
            backgroundImage: "url('/web-background.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="bg-white bg-opacity-60 min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
