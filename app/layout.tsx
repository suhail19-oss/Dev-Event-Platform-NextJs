import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from "../components/LightRays";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The Hub for Every Dev Event You Mustn't Miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen",
        "antialiased",
        schibstedGrotesk.variable,
        martianMono.variable,
        geist.variable,
        "font-sans",
      )}
    >
      <body className="relative min-h-screen w-full overflow-x-hidden bg-[#030708] text-white">
        {/* Background Effects */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={1.4}
            glow={0.6}
            haze={0.25}
            followMouse={true}
            mouseInfluence={0.02}
            rayDensity={1}
            tilt={0}
            raySharpness={0.35}
            atmosphere={1}
            intensity={1}
            fadeDistance={1}
            saturation={1}
            noiseAmount={0}
            distortion={0.01}
            pulsating={false}
            cursorShadow
            clickPulse
            intro
            lightMode={false}
          />
        </div>

        {/* Page Content */}
        <main className="relative z-10 flex min-h-screen w-full flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
