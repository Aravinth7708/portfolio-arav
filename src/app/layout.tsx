import type { Metadata } from "next";
import { Anek_Latin, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeToggle } from "@/components/ThemeToggle";

const anekLatin = Anek_Latin({
  variable: "--font-anek-latin",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aravinthrajan-k.in"),
  title: "Aravinthrajan K | Full Stack Developer",
  description: "Portfolio of Aravinthrajan K — Full Stack Developer from Tamil Nadu. Skilled in React.js, Node.js, Next.js, Supabase. Building real-world web apps and PWAs.",
  keywords: ["Aravinthrajan K", "Full Stack Developer", "Tamil Nadu", "React.js", "Node.js", "Next.js", "Supabase", "MongoDB", "Tailwind CSS", "JavaScript", "Python", "Java"],
  authors: [{ name: "Aravinthrajan K" }],
  creator: "Aravinthrajan K",
  openGraph: {
    title: "Aravinthrajan K | Full Stack Developer",
    description: "Portfolio of Aravinthrajan K — Full Stack Developer from Tamil Nadu. Skilled in React.js, Node.js, Next.js, Supabase. Building real-world web apps and PWAs.",
    url: "https://www.aravinthrajan-k.in",
    siteName: "Aravinthrajan K Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aravinthrajan K Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aravinthrajan K | Full Stack Developer",
    description: "Portfolio of Aravinthrajan K — Full Stack Developer from Tamil Nadu. Skilled in React.js, Node.js, Next.js, Supabase. Building real-world web apps and PWAs.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aravinthrajan K",
  "url": "https://www.aravinthrajan-k.in",
  "image": "https://www.aravinthrajan-k.in/og-image.jpg",
  "sameAs": [
    "https://github.com/Aravinth7708",
    "https://www.linkedin.com/in/aravinthrajan-k-819664290"
  ],
  "jobTitle": "Full Stack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "KPR Institute of Engineering and Technology, Coimbatore"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tamil Nadu",
    "addressCountry": "India"
  },
  "description": "Full Stack Developer specializing in React.js, Node.js, Next.js, and Supabase."
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${anekLatin.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
