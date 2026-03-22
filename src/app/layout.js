import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Particles from "@/components/Particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nicol Portfolio",
  description: "Portafolio de desarrollo web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* VIDEO DE FONDO GLOBAL */}
        <video
            autoPlay
            loop
            muted
            playsInline
            className="fixed top-0 left-0 w-full h-full object-cover -z-10 scale-125"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        <Particles />
        {/* OVERLAY PARA OSCURECER */}
        <div className="fixed inset-0 bg-black/60 -z-10"></div>

        {children}

      </body>
    </html>
  );
}