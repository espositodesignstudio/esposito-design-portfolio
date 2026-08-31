import type { Metadata } from "next";
import localFont from "next/font/local";
import { HoverProvider } from "@/components/global/CursorHoverLabel";
import AnalyticsWrapper from "@/components/global/AnalyticsWrapper";
import "./globals.css";

const pallyBold = localFont({
  src: [
    {
      path: "../public/fonts/Pally-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Pally-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pally",
  display: "swap",
});

const nunitoRegular = localFont({
  src: [
    {
      path: "../public/fonts/Nunito-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Nunito-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Esposito Design · Creative Studio | Branding, UX/UI & Stampa 3D",
  description:
    "Portfolio ufficiale di Peppe Esposito - Graphic & UX/UI Designer specializzato in identità visive, interfacce digitali e produzione custom in Stampa 3D.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${pallyBold.variable} ${nunitoRegular.variable} antialiased selection:bg-[#0267C1] selection:text-white`}
    >
      <body className="bg-[#F1E3CB] text-[#0267C1] min-h-screen font-body">
        <HoverProvider>{children}</HoverProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
