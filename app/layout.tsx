import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bala Pilli | AI Engineer",
  description:
    "Portfolio of Bala Pilli (Balu), an AI engineer focused on machine learning, analytics, and practical AI-enabled workflows.",
  openGraph: {
    title: "Bala Pilli | AI Engineer",
    description:
      "Machine learning, analytics, and practical AI-enabled workflows.",
    type: "website",
    images: ["/bala-pilli.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bala Pilli | AI Engineer",
    description: "Machine learning, analytics, and practical AI-enabled workflows.",
    images: ["/bala-pilli.jpg"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#181716" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
