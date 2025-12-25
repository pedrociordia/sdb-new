import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santo Domingo Bay - Management Portal",
  description: "CMS para gestionar el contenido del Santo Domingo Bay Resort & Casino",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
