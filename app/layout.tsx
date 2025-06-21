import type { Metadata } from "next";
import "./globals.css";
import { CivicAuthProvider } from "@civic/auth/nextjs";

export const metadata: Metadata = {
  title: "Vocalis",
  description: "Complete DevOps Workflow Automation",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CivicAuthProvider>{children}</CivicAuthProvider>
      </body>
    </html>
  );
}
