import type { Metadata } from "next";
import "./globals.css";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["400", "500", "600", "700", "800", "900"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", weight: ["400", "500", "600", "700"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "JG University — New Age Tech-Driven Education | Ahmedabad, Gujarat",
  description:
    "JG University is a UGC-approved, tech-driven university in Ahmedabad offering MBA, BBA, B.Tech, BCA, MCA, B.Com and 30+ future-ready programmes. Shaping global change leaders since 2019.",
  keywords: "JG University, Ahmedabad university, MBA, BBA, BCA, MCA, B.Tech, Gujarat university, UGC approved",
  openGraph: {
    title: "JG University — New Age Tech-Driven Education",
    description: "Future-ready programmes. World-class faculty. Industry-embedded learning.",
    type: "website",
    url: "https://jguni.in",
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { AdmissionModal } from "@/components/ui/AdmissionModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("scroll-smooth", outfit.variable, dmSans.variable, jetbrainsMono.variable)}>
      <body className="antialiased bg-base text-textPrimary font-body min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AdmissionModal />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
