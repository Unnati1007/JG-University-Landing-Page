import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
