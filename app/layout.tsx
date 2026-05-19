import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter , Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/headers";
import Footer from "@/components/footer";
const inter = Inter({subsets:['latin'],variable:'--font-sans'});


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SOGETEC-SARL",
  description: "societe generale de transaction electrique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={cn("", "antialiased", poppins.className)}
    >
      
      <body className="">
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
