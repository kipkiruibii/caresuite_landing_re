import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareSuite - Smart Scheduling for Care Agencies | AI-Powered Operations Platform",
  description: "Transform your care agency operations with CareSuite's comprehensive platform. AI-powered scheduling, digital document management, HR workforce tools, and finance tracking. Join our pilot program for early access.",
  keywords: "care agency software, home care scheduling, healthcare operations, care management platform, digital care forms, care agency HR, care finance management, AI scheduling, care agency compliance",
  authors: [{ name: "CareSuite Team" }],
  creator: "CareSuite",
  publisher: "CareSuite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://caresuite.care'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "CareSuite - Smart Scheduling for Care Agencies",
    description: "AI-powered care agency operations platform. Transform scheduling, documents, HR, and finance management. Join our pilot program.",
    url: 'https://caresuite.care',
    siteName: 'CareSuite',
    images: [
      {
        url: 'https://caresuite-landing-assets.s3.eu-central-1.amazonaws.com/dashboard-light.png',
        width: 1200,
        height: 630,
        alt: 'CareSuite Dashboard - Comprehensive Care Agency Management Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CareSuite - Smart Scheduling for Care Agencies",
    description: "AI-powered care agency operations platform. Transform scheduling, documents, HR, and finance management.",
    images: ['https://caresuite-landing-assets.s3.eu-central-1.amazonaws.com/dashboard-light.png'],
    creator: '@caresuite',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CareSuite",
    "description": "AI-powered care agency operations platform for scheduling, document management, HR, and finance",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Pilot program - Early access available"
    },
    "featureList": [
      "AI-powered scheduling",
      "Digital document management",
      "HR workforce management",
      "Finance and budget tracking",
      "Compliance management",
      "Real-time reporting"
    ],
    "publisher": {
      "@type": "Organization",
      "name": "CareSuite",
      "email": "info@caresuite.care",
      "url": "https://caresuite.care"
    },
    "potentialAction": {
      "@type": "JoinAction",
      "target": "https://caresuite.care#cta-section",
      "description": "Join our pilot program for early access"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is CareSuite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CareSuite is a comprehensive AI-powered operations platform designed specifically for care agencies. It handles scheduling, document management, HR workforce tools, and financial tracking all in one integrated system."
        }
      },
      {
        "@type": "Question",
        "name": "How does CareSuite help care agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CareSuite transforms care agency operations by automating scheduling, digitizing paperwork, managing HR processes, and providing financial visibility. This reduces administrative burden, improves compliance, and enhances operational efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "Is CareSuite currently available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CareSuite is currently in pilot program phase. We're working with select care agencies to refine the platform and ensure it meets the unique needs of care operations. Join our pilot program for early access."
        }
      },
      {
        "@type": "Question",
        "name": "What features does CareSuite include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CareSuite includes AI-powered scheduling, digital document management, HR workforce management, finance and budget tracking, compliance tools, and real-time reporting dashboards."
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
