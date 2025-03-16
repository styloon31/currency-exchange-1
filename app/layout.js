import Head from "next/head";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Best Currency Exchange | 7Janpath Forex",
  description: "Get the best forex rates at 7Janpath Forex. Trusted currency exchange services with competitive rates and secure transactions.",
  keywords: "currency exchange, forex rates, best forex services, money exchange, foreign exchange, currency conversion",
  openGraph: {
    title: "Best Currency Exchange | 7Janpath Forex",
    description: "Trusted currency exchange services with the best forex rates. Secure and fast foreign currency exchange solutions.",
    url: "https://www.7janpathforex.com", // Update with your actual URL
    type: "website",
    images: [
      {
        url: "https://www.7janpathforex.com/logo.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "7Janpath Forex - Best Currency Exchange",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@7JanpathForex", // Replace with actual Twitter handle
    title: "Best Currency Exchange | 7Janpath Forex",
    description: "Find the best forex rates and reliable currency exchange services at 7Janpath Forex.",
    image: "https://www.7janpathforex.com/logo.jpg",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="79N4E9avxZABOYNhCk61X9spR7Vtvub5IHSz-kmFovg" />
      </Head>

      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M8FC7GR7');`}
      </Script>

      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M8FC7GR7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
