import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Creative Thoughts Agency",
    template:"%s | Creative Thoughts Agency"
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-10 flex flex-col justify-between min-h-[100vh]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
