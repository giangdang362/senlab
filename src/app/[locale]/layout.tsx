import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { useLocale, useMessages, useTimeZone } from "next-intl";
import ClientProviders from "@/providers/ClientProviders";
import Footer from "../ui/components/common/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = useMessages();
  const locale = useLocale();
  const timeZone = useTimeZone();
  return (
    <ClientProviders messages={messages} locale={locale} timeZone={timeZone}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
          <Footer />
        </body>
      </html>
    </ClientProviders>
  );
}