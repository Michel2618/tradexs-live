import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import QuizNotificationBar from "@/components/ui/QuizNotificationBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tradexs - Intelligent B2B Wholesale",
  description: "AI-powered wholesale marketplace with 3D previews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Force default light
          enableSystem={false} // Disable system preference to force our design initially
          disableTransitionOnChange
        >
          {children}
          <Footer />
          <QuizNotificationBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
