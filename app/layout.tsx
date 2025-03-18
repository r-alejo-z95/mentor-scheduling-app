import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "MentorLink, connect with your mentor!",
  description: "Schedule your mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
