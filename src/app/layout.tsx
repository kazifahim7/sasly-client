import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import UserProvider from "@/context/userContext";
import StoreProvider from "@/provider/storeprovider";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sasly",
  description: "You are tasked with developing a SecondHand Marketplace Web Application, where users can buy and sell used items easily. The platform should allow users to post listings for used items, browse available products, and communicate securely with sellers. The system must provide a seamless and secure experience for all users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='light'>
      <body
        className={`${geistMono.className} antialiased`}
      >
        <StoreProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </StoreProvider>

        <Toaster richColors position="top-center" ></Toaster>
      </body>
    </html>
  );
}
