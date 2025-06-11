import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Traimm Imperium - Placas de Acero Industrial",
  description: "Especialistas en placas de acero Hardox, acero inoxidable, galvanizado y placas navales. Fabricación, corte y laminado profesional.",
  keywords: "placas de acero, Hardox, acero inoxidable, galvanizado, placas navales, fabricación industrial",
  authors: [{ name: "Traimm Imperium" }],
  openGraph: {
    title: "Traimm Imperium - Placas de Acero Industrial",
    description: "Especialistas en placas de acero Hardox, acero inoxidable, galvanizado y placas navales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} antialiased min-h-screen industrial-gradient`}>
        {children}
      </body>
    </html>
  )
}
