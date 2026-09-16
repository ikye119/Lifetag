import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LifeTag — Emergency identity",
  description: "Create and scan secure emergency identities online or offline.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "LifeTag", statusBarStyle: "black-translucent" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
