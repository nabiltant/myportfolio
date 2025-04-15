import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nabil Tantssift | Portfolio",
  description: "Welcome to Nabil Tantssift's portfolio - Full Stack Developer specializing in web development, software solutions, and digital experiences",
  keywords: ["Nabil Tantssift", "Full Stack Developer", "Web Development", "Portfolio", "Software Engineer", "Mobile App Development", "Digital Solutions"],
  authors: [{ name: "Nabil Tantssift" }],
  creator: "Nabil Tantssift",
  openGraph: {
    type: "website",
    title: "Nabil Tantssift | Portfolio",
    description: "Full Stack Developer portfolio showcasing projects and professional experience",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <Header />
            {children}


        </ThemeProvider>

        <Toaster />


      </body>
    </html>
  );
}
